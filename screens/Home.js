import React from "react";
import { ScrollView, View, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { CardsQuery, CourseQuery, LogoQuery } from "../Queries";
import { useQuery } from "@apollo/client";
import styled from "styled-components/native";
import Card from "./../components/Card";
import Logo from "./../components/Logo";
import Course from "./../components/Course";
import Menu from "./../components/Menu";
import Avatar from "../components/Avatar";
import Notifications from "../components/Notifications";
import * as Linking from 'expo-linking';

const Home = () => {
  const { loading: CardLoading, data: CardData } = useQuery(CardsQuery);
  const { loading: LogoLoading, data: LogoData } = useQuery(LogoQuery);
  const { loading: CourseLoading, data: CourseData } = useQuery(CourseQuery);
  const navigation = useNavigation();

  return (
      <Container>
        <Menu />
        <Notifications />
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <TitleBar>
                <Avatar />
              <View>
                <Title>Client portal</Title>
                <Name>Flatine Agency</Name>
              </View>
            </TitleBar>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{
                paddingTop: 30,
                paddingBottom: 20,
                height: 110,
              }}
            >
              {LogoData &&
                LogoData.logoCollection.items.map((logo, index) => (
                  <TouchableOpacity key={`${logo.name}-${index}`} onPress={()=>{Linking.openURL(`mailto:${logo.phone}`);}}>  
                  <Logo image={logo.logo.url} name={logo.name} />
                  </TouchableOpacity>
                ))}
            </ScrollView>
            <Subtitle>News</Subtitle>
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
            <Subtitle>Thinking</Subtitle>
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
                      includeUri={false}
                    />
                  </TouchableOpacity>
                ))}
          </ScrollView>
        </SafeAreaView>
      </Container>
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
