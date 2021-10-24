import React, { useEffect } from "react";
import { ScrollView, View, SafeAreaView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import {
  openMenu,
  openModal,
  updateName,
  updateAvatar,
  openNotif,
} from "../Redux/actions/actions";
import { CardsQuery, CourseQuery, LogoQuery } from "../Queries";
import { NotificationIcon } from "./../components/Icons";
import { useQuery } from "@apollo/client";
import styled from "styled-components/native";
import Card from "./../components/Card";
import Logo from "./../components/Logo";
import Course from "./../components/Course";
import Menu from "./../components/Menu";
import Avatar from "../components/Avatar";
import LoginModal from "../components/LoginModal";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NotificationButton from "../components/NotificationButton";
import Notifications from "../components/Notifications";

const Home = () => {
  const AllReducers = useSelector((state) => state);
  const { loading: CardLoading, data: CardData } = useQuery(CardsQuery);
  const { loading: LogoLoading, data: LogoData } = useQuery(LogoQuery);
  const { loading: CourseLoading, data: CourseData } = useQuery(CourseQuery);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAvatar = () => {
    if (AllReducers.name !== "Stranger") {
      dispatch(openMenu());
    } else {
      dispatch(openModal());
    }
  };
  const loadState = () => {
    AsyncStorage.getItem("state")
      .then((serializedState) => {
        const state = JSON.parse(serializedState);
        if (state) {
          dispatch(updateAvatar(require("../assets/happy-avatar.png")));
          dispatch(updateName(state.name));
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    loadState();
  }, []);
  const handleNotif = () => {
    dispatch(openNotif());
  };
  return (
    <>
      <Container>
        <Menu />
        <Notifications />
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }} showsHorizontalScrollIndicator={false}>
            <TitleBar>
              <TouchableOpacity onPress={handleAvatar}>
                <Avatar />
              </TouchableOpacity>
              <View>
                <Title>Welcome back,</Title>
                <Name>{AllReducers.name}</Name>
              </View>
              {/* <NotificationIcon
                style={{ position: "absolute", right: 20, top: 5 }}
              /> */}
              <TouchableOpacity
                onPress={handleNotif}
                style={{ position: "absolute", right: 20, top: 5 }}
              >
                <NotificationButton />
              </TouchableOpacity>
            </TitleBar>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                paddingTop: 20,
                paddingBottom: 20,
                height: 110,
              }}
            >
              {LogoData &&
                LogoData.logoCollection.items.map(({ logo, name }, index) => (
                  <Logo key={`${name}-${index}`} image={logo.url} name={name} />
                ))}
            </ScrollView>
            <Subtitle>Latest projects</Subtitle>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ paddingBottom: 10, height: 350 }}
            >
              {CardData &&
                CardData.cardCollection.items.map((card, i) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("section", { section: card })
                    }
                    key={`${i}${card.title}`}
                  >
                    <Card
                      coverImg={card.image.url}
                      title={card.title}
                      logo={card.logo.url}
                      caption={card.caption}
                      subtitle={card.subTitle}
                    />
                  </TouchableOpacity>
                ))}
                
            </ScrollView>
            <Subtitle>Popular Projects</Subtitle>
            {CourseData &&
                CourseData.courseCollection.items.map((course, i) => (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("section", { section: course })
                    }
                    key={`${i}${course.title}`}
                  >
                    <Course
                      image={course.image}
                      title={course.title}
                      logo={course.logo}
                      avatar={course.avatar}
                      caption={course.caption}
                      subtitle={course.subTitle}
                      author={course.author}
                    />
                  </TouchableOpacity>
                ))}
          </ScrollView>
        </SafeAreaView>
      </Container>
      <LoginModal />
    </>
  );
};
export default Home;
const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;
const Title = styled.Text`
  font-size: 16px;
  color: #b8bebe;
  font-weight: 500;
`;
const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  flex-direction: row;
`;

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 10px;
  text-transform: uppercase;
`;
