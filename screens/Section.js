import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import Markdown from "react-native-showdown";
import styled from "styled-components/native";
import { vh } from "react-native-expo-viewport-units";
import * as Icon from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

const Section = ({ route, handleTabbarVisibility }) => {
  const navigation = useNavigation();
  const EnablehandleTabbarVisibility = () => {
    handleTabbarVisibility(true);
  };
  useEffect(() => {
    if (route.name === "section") {
      handleTabbarVisibility(false);
    }
  }, []);
  const sectionData = route.params.section;
  return (
    <ScrollView>
      <Container>
        <Cover>
          <Image source={{ uri: sectionData.image.url }} />
          <Wrapper>
            <Logo source={{ uri: sectionData.logo.url }} />
            <Subtitle>{sectionData.subTitle}</Subtitle>
          </Wrapper>
          <Title>{sectionData.title}</Title>
          <Caption>{sectionData.caption}</Caption>
        </Cover>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("home");
            EnablehandleTabbarVisibility();
          }}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
          }}
        >
          <CloseView style={{ elevation: 8 }}>
            <Icon.Ionicons name="ios-close" size={32} color="#546bfb" />
          </CloseView>
        </TouchableOpacity>
        <Content>
          <Markdown
            style={{ borderRadius: 15 }}
            body={sectionData.content}
            pureCSS={htmlStyle}
            scalesPageToFit={false}
            scrollEnabled={false}
          />
        </Content>
      </Container>
    </ScrollView>
  );
};
export default Section;

const Content = styled.View`
  flex: 1;
  border-radius: 15px;
  background: #f0f3f5;
  padding: 20px;
  height: 850px;
`;

const htmlStyle = `
  *{
    font-family:--apple-system,Roboto;
    font-size:17px;
    font-weight:normal;
    color:#3c4560;
    line-height:240px
    margin:0;
    padding:0;
    user-select: none;
  }
  body{
    background-color:#f0f3f5;
  }
  h2{
    font-sze:20px;
    text-transform:uppercase;
    color:#b8bece;
    font-weight:600;
    margin-top:50px;
  }
  
  p{
    margin-top:20px;
  }
  a{
    color:#4775f2;
    font-weight:600;
    text-decoration :none;
  }
  strong{
    font-wight:700;
  }
  img{
    width:100%;
    border-radius:10px;
    margin-top:20px;
  }
  pre{
    padding:20px;
    background:#212c4f;
    overflow:hidden;
    word-wrap:break-word;
    border-radius:10px;
    margin-top:20px;
  }
  code{
    color:#fff;
  }

`;
const Container = styled.View`
  flex: 1;
`;
const Cover = styled.View`
  height: ${vh(45)}px;
`;
const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  top: 40px;
  left: 20px;
`;
const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;
const Subtitle = styled.Text`
  font-size: 15px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 29px;
`;
const Caption = styled.Text`
  color: #fff;
  font-size: 17px;
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 300px;
`;
const CloseView = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;
