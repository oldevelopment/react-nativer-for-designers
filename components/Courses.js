import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import Course from "./Course";
import { useDispatch, useSelector } from "react-redux";
import { CourseQuery } from "../Queries";
import { gql, useQuery, ApolloClient } from "@apollo/client";

const Courses = () => {
  const AllReducers = useSelector((state) => state);
  const { loading: CourseLoading, data: CourseData } = useQuery(CourseQuery);
  const dispatch = useDispatch();

  return (
  <Container>
     {CourseData.courseCollection.items.map((course,index) => (
                        <Course
                        key={index}
                        image={course.image}
                        title={course.title}
                        subtitle={course.subtitle}
                        logo={course.logo}
                        author={course.author}
                        avatar={course.avatar}
                        caption={course.caption}
                        includeUri={false}
                        content={course.content}
                      />
                    ))}
  </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding-left: 10px;
`;

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Design an interactive prototype using Auto-Animate",
  },
  {
    title: "React for Designers",
    subtitle: "12 sections",
    image: require("../assets/background11.jpg"),
    logo: require("../assets/logo-react.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Learn to design and code a React site",
  },
  {
    title: "Design and Code with Framer X",
    subtitle: "10 sections",
    image: require("../assets/background14.jpg"),
    logo: require("../assets/logo-framerx.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Create powerful design and code components for your app",
  },
  {
    title: "Design System in Figma",
    subtitle: "10 sections",
    image: require("../assets/background6.jpg"),
    logo: require("../assets/logo-figma.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption:
      "Complete guide to designing a site using a collaborative design tool",
  },
];

export default Courses;
