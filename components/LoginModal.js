import React, { useState, useRef, useEffect } from "react";
import { vh, vw } from "react-native-expo-viewport-units";
import styled from "styled-components/native";
import * as Icon from "@expo/vector-icons";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Animated,
} from "react-native";
import { BlurView } from "expo-blur";
import Success from "./Success";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, updateAvatar, updateName } from "../Redux/actions/actions";
import firebase from "./firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { saveState } from "./Storage";

const LoginModal = () => {
  const [shownPassowrd, setShownPassowrd] = useState(false);
  const [email, setEmail] = useState("");
  const [passowrd, setPassowrd] = useState("");
  const [emailUrl, setEmailUrl] = useState(require("../assets/icon-email.png"));
  const top = useRef(new Animated.Value(vh(100))).current;
  const scale = useRef(new Animated.Value(1.3)).current;
  const translateY = useRef(new Animated.Value(0)).current;
  const AllReducers = useSelector((state) => state);
  const dispatch = useDispatch();
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

  const fetchUser = () => {
    const name = "Hewr";
    const avatar = require("../assets/happy-avatar.png");
    dispatch(updateName(name));
    dispatch(updateAvatar(avatar));
    saveState({ name, avatar });
  };

  const handleLogin = () => {
    Keyboard.dismiss();

    setIsLoading(() => true);

    const Email = email;
    const Pass = passowrd;
    firebase
      .auth()
      .signInWithEmailAndPassword(Email, Pass)
      .catch((err) => {
        Alert.alert("Error", err.message);
      })
      .then((resp) => {
        setIsLoading(false);
        if (resp) {
          fetchUser();
          setIsLoading(() => false);
          setIsSuccessful(() => true);
          setTimeout(() => {
            setIsSuccessful(false);
            dispatch(closeModal());
          }, 1000);
        }
      });
  };

  const tapBackground = () => {
    Keyboard.dismiss();
    dispatch(closeModal());
  };

  useEffect(() => {
    if (AllReducers.action) {
      if (AllReducers.action === "openModal") {
        Animated.timing(top, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start();
        Animated.spring(scale, {
          toValue: 1,
          duration: 600,
          useNativeDriver: false,
        }).start();
        Animated.timing(translateY, {
          toValue: 0,
          duration: 0,
          useNativeDriver: false,
        }).start();
      }

      if (AllReducers.action === "closeModal") {
        setTimeout(() => {
          Animated.timing(top, {
            toValue: vh(100),
            duration: 0,
            useNativeDriver: false,
          }).start();
          Animated.spring(scale, {
            toValue: 1.3,
            useNativeDriver: false,
          }).start();
        }, 500);
        Animated.timing(translateY, {
          toValue: 1000,
          duration: 400,
          useNativeDriver: false,
        }).start();
      }
    }
  }, [AllReducers.action]);
  return (
    <>
      <AnimatedContainer style={{ top: top }}>
        <TouchableWithoutFeedback onPress={tapBackground}>
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
        <AnimatedModal
          style={{
            elevation: 15,
            transform: [
              {
                scale: scale,
              },
              {
                translateY: translateY,
              },
            ],
          }}
        >
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
              defaultValue=""
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
        </AnimatedModal>
      </AnimatedContainer>
      <Success isActive={isSuccessful} />
      <Loading isActive={isLoading} />
    </>
  );
};

export default LoginModal;
const Container = styled.View`
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);
const Modal = styled.View`
  width: ${vw(90)}px;
  height: ${vw(100)}px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  align-items: center;
`;
const AnimatedModal = Animated.createAnimatedComponent(Modal);
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
