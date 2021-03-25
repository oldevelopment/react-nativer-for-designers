import React, { useRef } from "react";
import { vh, vw } from "react-native-expo-viewport-units";
import {
  Animated,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from "react-native";
// import { LinearGradient } from "expo";

import styled from "styled-components/native";
import * as Icon from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { disableGesture, enableGesture } from "../Redux/actions/actions";

const Project = ({ image, title, author, text, shouldOpen }) => {
  const dispatch = useDispatch();
  const cardWidth = useRef(new Animated.Value(vw(80))).current;
  const cardHeight = useRef(new Animated.Value(vh(60))).current;
  const opacity = useRef(new Animated.Value(0)).current;
  const textHeight = useRef(new Animated.Value(100)).current;

  const openCard = () => {
    if (!shouldOpen) return;
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

    Animated.spring(textHeight, {
      toValue: 1000,
      useNativeDriver: false,
    }).start();
    dispatch(disableGesture());
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
    Animated.spring(textHeight, {
      toValue: 100,
      useNativeDriver: false,
    }).start();
    dispatch(enableGesture());
  };
  return (
    <>
      <SafeAreaView style={{ paddingTop: StatusBar.currentHeight }}>
        <TouchableWithoutFeedback
          onPress={() => {
            openCard();
          }}
        >
          <AnimatedContainer
            style={{ width: cardWidth, height: cardHeight, elevation: 10 }}
          >
            <Cover>
              <Image source={image} />
              <Title>{title}</Title>
              <Author>{author}</Author>
            </Cover>
            <AnimatedText style={{ height: textHeight }}>{text}</AnimatedText>
            <AnimatedLinearGradientWrapper style={{ height: textHeight }}>
              <LinearGradient
                style={{
                  width: "100%",
                  height: "100%",
                }}
                colors={["rgba(255,255,255, 0)", "rgba(255,255,255, 1)"]}
              />
            </AnimatedLinearGradientWrapper>
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
  position: relative;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
const GradientWrapper = styled.View`
  border-radius: 15px;
  position: absolute;
  top: ${vh(45)}px;
  width: 100%;
`;
const AnimatedLinearGradientWrapper = Animated.createAnimatedComponent(
  GradientWrapper
);

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
const AnimatedText = Animated.createAnimatedComponent(Text);

export default Project;
