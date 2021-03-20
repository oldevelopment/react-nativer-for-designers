import React, { useRef } from "react";
import { vh, vw } from "react-native-expo-viewport-units";
import {
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";

import styled from "styled-components";
import * as Icon from "@expo/vector-icons";

const Project = ({ image, title, author, text, shouldOpen }) => {
  const cardWidth = useRef(new Animated.Value(vw(80))).current;
  const cardHeight = useRef(new Animated.Value(vh(60))).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const openCard = () => {
    if (shouldOpen) {
      Animated.spring(cardWidth, {
        toValue: vw(100),
        useNativeDriver: false,
      }).start();
      Animated.spring(cardHeight, {
        toValue: vh(100),
        useNativeDriver: false,
      }).start();
      Animated.timing(opacity, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }
  };

  const closeCard = () => {
    Animated.spring(cardWidth, {
      toValue: vw(80),
      useNativeDriver: false,
    }).start();
    Animated.spring(cardHeight, {
      toValue: vh(60),
      useNativeDriver: false,
    }).start();
    Animated.timing(opacity, {
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };
  return (
    <>
      <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
        <TouchableWithoutFeedback onPress={openCard}>
          <AnimatedContainer
            style={{ width: cardWidth, height: cardHeight, elevation: 10 }}
          >
            <Cover>
              <Image source={image} />
              <Title>{title}</Title>
              <Author>{author}</Author>
            </Cover>
            <Text>{text}</Text>
            <AnimatedCloseView
              style={{
                opacity: opacity,
                position: "absolute",
                top: 20,
                right: 20,
              }}
            >
              <TouchableOpacity onPress={closeCard}>
                <Icon.Ionicons name="ios-close" size={32} color="#546bfb" />
              </TouchableOpacity>
            </AnimatedCloseView>
          </AnimatedContainer>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </>
  );
};

const Container = styled.View`
  margin: 0 auto;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
  height: ${vh(40)}px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;
const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

const AnimatedCloseView = Animated.createAnimatedComponent(CloseView);
const Image = styled.Image`
  width: 100%;

  height: ${vh(45)}px;
`;
const Title = styled.Text`
  width: ${vw(70)}px;
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
