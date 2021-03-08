import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";

const Course = ({ image, logo, subtitle, title, avatar, caption, author }) => {
  return (
    <Container style={{ elevation: 8 }}>
      <Cover>
        <Image source={{ uri: image }} />
        <FlexContainer>
          <Logo resizeMode="contain" source={{ uri: logo }} />
        </FlexContainer>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
      </Cover>
      <Content>
        <Avatar source={{ uri: avatar }} />
        <Caption>{caption}</Caption>
        <Author>Taught by {author}</Author>
      </Content>
    </Container>
  );
};

export default Course;

const Container = styled.View`
  width: 335px;
  height: 335px;
  background-color: #fff;
  margin: 10px auto;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  height: 260px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
  justify-content: flex-end;
`;
const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;
const FlexContainer = styled.View`
  position: absolute;
  width: 100%;
  top: 50%;
  align-items: center;
`;
const Logo = styled.Image`
  width: 48px;
  height: 48px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-weight: 600;
  margin-top: 4px;
  margin-bottom: 20px;
  margin-left: 20px;
  width: 170px;
`;
const Subtitle = styled.Text`
  font-size: 15px;
  margin-left: 20px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.8);
`;

const Content = styled.View`
  padding-left: 62px;
  justify-content: center;
  height: 75px;
`;
const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 20px;
  left: 20px;
  border-radius: 16px;
`;
const Caption = styled.Text`
  font-size: 14px;
  color: #3c4560;
`;
const Author = styled.Text`
  font-size: 13px;
  color: #b8bece;
  font-weight: 500;
  margin-top: 4px;
`;
