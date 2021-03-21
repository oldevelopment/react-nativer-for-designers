import React, { useEffect, useRef } from "react";
import styled from "styled-components/native";
import { Animated, TouchableOpacity } from "react-native";
import * as Icon from "@expo/vector-icons";
import { vh } from "react-native-expo-viewport-units";
import MenuItem from "./MenuItem";

import { useSelector, useDispatch } from "react-redux";
import { closeMenu } from "../Redux/actions/actions";

const menItems = [
  { icon: "ios-settings", title: "Account", text: "settings" },
  { icon: "ios-card", title: "Billing", text: "payments" },
  { icon: "ios-exit", title: "Log out", text: "see you soon" },
];

const Menu = ({ userName }) => {
  const dispatch = useDispatch();
  const menuState = useSelector((state) => state.isOpened);
  const fadeAnim = useRef(new Animated.Value(vh(110))).current;

  const fadeIn = () => {
    Animated.spring(fadeAnim, {
      toValue: vh(10),
      useNativeDriver: false,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: vh(110),
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleMenu = () => {
    if (menuState == "openMenu") {
      fadeIn();
    } else if (menuState == "closeMenu") {
      fadeOut();
    }
  };
  useEffect(() => {
    handleMenu();
  }, [menuState]);

  return (
    <AnimatedContainer style={{ top: fadeAnim }}>
      <Cover>
        <Image source={require("../assets/background2.jpg")} />
        <Title>{userName}</Title>
        <Subtitle>Freelancer at home</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={() => dispatch(closeMenu())}
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          marginLeft: -22,
          zIndex: 101,
        }}
      >
        <CloseView style={{ elevation: 8 }}>
          <Icon.Ionicons name="ios-close" size={36} color="#4775f2" />
        </CloseView>
      </TouchableOpacity>
      <Content>
        {menItems.map(({ icon, text, title }, i) => (
          <MenuItem
            key={`${i}-${text}`}
            iconName={icon}
            title={title}
            text={text}
          />
        ))}
      </Content>
    </AnimatedContainer>
  );
};

export default Menu;

const Container = styled.View`
  position: absolute;
  background: #fff;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  width: 100%;
  height: 100%;
  z-index: 100;
`;
const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Cover = styled.View`
  height: 142px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background: #000;
  justify-content: center;
  align-items: center;
`;
const Content = styled.View`
  height: ${vh(100)}px;
  background: #f0f3f5;
  padding: 50px;
`;
const CloseView = styled.View`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;
const Image = styled.Image`
  position: absolute;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  width: 100%;
  height: 100%;
`;
const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: 600;
`;
const Subtitle = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  margin-top: 8px;
`;
