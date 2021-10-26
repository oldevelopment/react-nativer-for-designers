import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import Course from "./Course";
import { useDispatch, useSelector } from "react-redux";
import { LatestQuery } from "../Queries";
import { gql, useQuery, ApolloClient } from "@apollo/client";

const Courses = () => {
  const AllReducers = useSelector((state) => state);
  const { loading: LatestLoading, data: LatestData } = useQuery(LatestQuery);
  const dispatch = useDispatch();

  return (
  <Container>
     {LatestData &&
        LatestData.latestCollection.items.map((latest,index) => (
                        <Course
                        key={index}
                        image={latest.image}
                        title={latest.title}
                        subtitle={latest.subtitle}
                        logo={latest.logo}
                        author={latest.author}
                        avatar={latest.avatar}
                        caption={latest.caption}
                        includeUri={false}
                        content={latest.content}
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
