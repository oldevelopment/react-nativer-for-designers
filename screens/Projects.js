import React from "react";
import { Text } from "react-native";
import styled from "styled-components";

const Projects = () => {
  return (
    <Container style={{ marginTop: 30 }}>
      <Text> Projects Screen </Text>
    </Container>
  );
};
export default Projects;
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
