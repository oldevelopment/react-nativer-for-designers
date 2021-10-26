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
     {CourseData &&
        CourseData.courseCollection.items.map((course,index) => (
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



export default Courses;
