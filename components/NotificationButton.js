import React from "react";
import styled from "styled-components";
import { NotificationIcon } from "../components/Icons";

const NotificationButton = () => (
  <Container>
    <NotificationIcon />
    {/* <Bubble>
      <Text>NEW</Text>
    </Bubble> */}
  </Container>
);

export default NotificationButton;

const Container = styled.View`
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
`;

const Bubble = styled.View`
  width: 40px;
  height: 16px;
  background: #3c4560;
  position: absolute;
  top: 45px;
  right: 0px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
`;

const Text = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: 700;
`;
