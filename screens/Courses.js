import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Courses = () => {
  return (
    <Container style={{ marginTop: 30 }}>
      <Text> Courses Screen </Text>
    </Container>
  );
};
export default Courses;
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
