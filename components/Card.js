import React from "react";
import { vw } from "react-native-expo-viewport-units";

import styled from "styled-components/native";

const Card = ({ coverImg, title, logo, caption, subtitle }) => {
  return (
    <Container style={{ elevation: 8 }}>
      <Cover>
        <CoverImage source={{ uri: coverImg }} />
        <Title>{title}</Title>
      </Cover>
      <Content>
        <Logo source={{ uri: logo }} />
        <Wrapper>
          <Caption>{caption}</Caption>
          <Subtitle>{subtitle}</Subtitle>
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Card;

const Container = styled.View`
  background: white;
  width: ${vw(80)}px;
  height: 280px;
  border-radius: 15px;
  margin-left: 11px;
  margin-right: 11px;
  margin-top: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 200px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  overflow: hidden;
`;
const CoverImage = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 20px;
  width: 170px;
`;
const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 80px;
`;
const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;
const Caption = styled.Text`
  color: #3c4560;
  font-size: 20px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
`;
const Wrapper = styled.View`
  align-items: center;
`;
