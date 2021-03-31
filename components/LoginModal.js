import React, { useState, useEffect } from "react";
import { vh, vw } from "react-native-expo-viewport-units";
import styled from "styled-components/native";
import * as Icon from "@expo/vector-icons";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { BlurView } from "expo-blur";
import Success from "./Success";
import Loading from "./Loading";

const LoginModal = () => {
  const [shownPassowrd, setShownPassowrd] = useState(false);
  const [email, setEmail] = useState("");
  const [passowrd, setPassowrd] = useState("");
  const [emailUrl, setEmailUrl] = useState(require("../assets/icon-email.png"));
  const [passwordUrl, setPasswordUrl] = useState(
    require("../assets/icon-password.png")
  );
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const focusPassowrd = () => {
    setPasswordUrl(require("../assets/icon-password-animated.gif"));
    setEmailUrl(require("../assets/icon-email.png"));
  };
  const focusEmail = () => {
    setPasswordUrl(require("../assets/icon-password.png"));
    setEmailUrl(require("../assets/icon-email-animated.gif"));
  };

  const handleLogin = () => {
    console.log(email, passowrd);
    setIsLoading(() => true);
    setTimeout(() => {
      setIsLoading(() => false);
      setIsSuccessful(() => true);
    }, 2000);
  };

  const tabBackground = () => {
    Keyboard.dismiss();
  };
  return (
    <>
      <Container>
        <TouchableWithoutFeedback onPress={tabBackground}>
          <BlurView
            tint="default"
            intensity={100}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          />
        </TouchableWithoutFeedback>
        <Modal style={{ elevation: 15 }}>
          <Logo source={require("../assets/logo-dc.png")} />
          <Text>Hehehehe you can login now</Text>
          <InputWrappr>
            <IconContainer
              style={{ width: 24, height: 16 }}
              source={emailUrl}
            />
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={(email) => setEmail(email)}
              value={email}
              onFocus={focusEmail}
            />
          </InputWrappr>

          <InputWrappr>
            <IconContainer
              style={{ width: 18, height: 24 }}
              source={passwordUrl}
            />
            <TextInput
              placeholder="Password"
              secureTextEntry={!shownPassowrd}
              onChangeText={(passowrd) => setPassowrd(passowrd)}
              value={passowrd}
              onFocus={focusPassowrd}
            />
            <Icon.Ionicons
              onPress={() => setShownPassowrd((state) => !state)}
              name={`${shownPassowrd ? "eye" : "eye-off"}`}
              size={25}
              style={{ marginRight: 5 }}
              color={`${shownPassowrd ? "#546bfb" : "#b8bece"}`}
            />
          </InputWrappr>
          <TouchableOpacity onPress={() => handleLogin()}>
            <Button style={{ elevation: 10 }}>
              <ButtonText>Login</ButtonText>
            </Button>
          </TouchableOpacity>
        </Modal>
      </Container>

      <Success isActive={isSuccessful} />
      <Loading isActive={isLoading} />
    </>
  );
};

export default LoginModal;
const Container = styled.View`
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Modal = styled.View`
  width: ${vw(90)}px;
  height: ${vw(100)}px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;
const Logo = styled.Image`
  width: 44px;
  height: 44px;
  margin-top: 50px;
`;
const Text = styled.Text`
  margin-top: 20px;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  width: 160px;
  text-align: center;
  color: #b8bece;
`;
const InputWrappr = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #dbdfea;
  width: ${vw(75)}px;
  height: 44px;
  border-radius: 10px;
  margin-top: 20px;
`;
const IconContainer = styled.Image`
  margin: 0 10px;
`;
const TextInput = styled.TextInput`
  font-size: 17px;
  color: #3c4560;
  height: 44px;
  flex: 1 1 auto;
`;
const Button = styled.View`
  margin-top: 20px;
  background: #5263ff;
  height: 50px;
  width: ${vw(75)}px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 10px 20px #c2cbff;
  border-radius: 10px;
`;
const ButtonText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  text-transform: uppercase;
`;

// const IconPassword = styled.Image`
//   width: 18px;
//   height: 24px;
//   position: absolute;
//   left: ${vw(12.5)}px;
//   top: ${vw(61)}px;
// `;
