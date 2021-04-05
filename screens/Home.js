import React, { useState, useEffect } from "react";
import { ScrollView, View, SafeAreaView, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { closeModal, openMenu, openModal } from "../Redux/actions/actions";

import { CardsQuery, CourseQuery, LogoQuery } from "../Queries";
import { NotificationIcon } from "./../components/Icons";
import { useQuery } from "@apollo/client";
import styled from "styled-components/native";
import Card from "./../components/Card";
import Logo from "./../components/Logo";
import Course from "./../components/Course";
import Menu from "./../components/Menu";
import Avatar from "../components/Avatar";
import axios from "axios";
import Spinner from "react-native-loading-spinner-overlay";
import LoginModal from "../components/LoginModal";

const Home = () => {
  const modalReducer = useSelector((state) => state.modalReducer);
  const nameReducer = useSelector((state) => state.nameReducer);
  console.log("home");
  const { loading: CardLoading, data: CardData } = useQuery(CardsQuery);
  const { loading: LogoLoading, data: LogoData } = useQuery(LogoQuery);
  const { loading: CourseLoading, data: CourseData } = useQuery(CourseQuery);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("User");
  const [userPic, setUserPic] = useState(
    "https://source.unsplash.com/500x500/?face"
  );
  let count = 0;
  const openLogin = () => {
    dispatch(openModal());
  };
  // const fetchData = async () => {
  //   try {
  //     const result = await axios.get("https://randomuser.me/api/");
  //     setUserName(result.data.results[0].name.first);
  //     setUserPic(result.data.results[0].picture.thumbnail);
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);
  useEffect(() => {
    setUserName(nameReducer);
  }, [nameReducer]);
  return (
    <>
      <Container>
        <Menu userName={userName} />
        <SafeAreaView>
          <ScrollView style={{ height: "100%" }}>
            <TitleBar>
              <TouchableOpacity onPress={openLogin}>
                <Avatar userPic={userPic} />
              </TouchableOpacity>
              <View>
                <Title>Welcome back,</Title>
                <Name>{userName}</Name>
              </View>
              <NotificationIcon
                style={{ position: "absolute", right: 20, top: 5 }}
              />
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
            <Subtitle>Continue learning</Subtitle>
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
            <Subtitle>Popular Courses</Subtitle>
            {CourseData &&
              CourseData.courseCollection.items.map(
                (
                  { title, subTitle, image, logo, author, avatar, caption },
                  i
                ) => (
                  <Course
                    key={`${i}-${title}`}
                    title={title}
                    subtitle={subTitle}
                    author={author}
                    image={image.url}
                    logo={logo.url}
                    avatar={avatar.url}
                    caption={caption}
                  />
                )
              )}
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
