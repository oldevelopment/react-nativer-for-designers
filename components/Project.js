import React from "react";
import { vh, vw } from "react-native-expo-viewport-units";
import styled from "styled-components";
const Project = ({ image, title, author, text }) => {
  return (
    <Container style={{ elevation: 10 }}>
      <Cover>
        <Image source={image} />
        <Title>{title}</Title>
        <Author>{author}</Author>
      </Cover>
      <Text>{text}</Text>
    </Container>
  );
};
const Container = styled.View`
  margin: 0 auto;
  width: ${vw(80)}px;
  height: ${vh(60)}px;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;
const Cover = styled.View`
  height: ${vh(40)}px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
const Image = styled.Image`
  width: 100%;

  height: ${vh(45)}px;
`;
const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;
const Text = styled.Text`
  font-size: 17px;
  margin: 20px;
  line-height: 24px;
  color: #3c4560;
`;

export default Project;
