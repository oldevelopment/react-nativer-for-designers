import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import Course from "./Course";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { LatestQuery } from "../Queries";
import { gql, useQuery, ApolloClient } from "@apollo/client";
import { TouchableOpacity } from "react-native-gesture-handler";

const Courses = () => {
  const AllReducers = useSelector((state) => state);
  const { loading: LatestLoading, data: LatestData } = useQuery(LatestQuery);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
  <Container>
     {LatestData &&
        LatestData.latestCollection.items.map((latest,index) => (
                        <TouchableOpacity 
                          onPress={() =>
                          navigation.push("section", { section: latest })
                        }
                        key={`${index}${latest.title}`}> 
                        <Course
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
                      </TouchableOpacity>
                    ))}
  </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  flex-wrap: wrap;
`;



export default Courses;
