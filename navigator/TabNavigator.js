import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Section from "../screens/Section";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Projects from "../screens/Projects";

import VideoScreen from "../screens/VideoScreen";
import CourseScreen from "../screens/CoursesScreen";

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = ({ handleTabbarVisibility }) => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="home"
      component={CourseScreen}
      options={{
        tabBarLabel: "Home",
        tabBarIcon: ({ focused }) => (
          <Ionicons
            name="ios-home"
            size={26}
            color={focused ? "#4775f2" : "#b8bece"}
          />
        ),
      }}
    />

    <Stack.Screen name="video">
      {(props) => (
        <VideoScreen
          handleTabbarVisibility={handleTabbarVisibility}
          {...props}
        />
      )}
    </Stack.Screen>
    <Stack.Screen name="section">
      {(props) => (
        <Section handleTabbarVisibility={handleTabbarVisibility} {...props} />
      )}
    </Stack.Screen>
  </Stack.Navigator>
);

export default function TabNavigator() {
  const [tabbarvisibility, setTabbarvisibility] = useState(true);
  const handleTabbarVisibility = (bool) => {
    setTabbarvisibility(bool);
  };
  return (
    <Navigator>
      <Screen
        name="home"
        options={{
          tabBarLabel: "Cases",
          tabBarVisible: tabbarvisibility,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-flame"
              size={26}
              color={focused ? "#4775f2" : "#b8bece"}
            />
          ),
        }}
      >
        {(props) => (
          <HomeStack
            handleTabbarVisibility={handleTabbarVisibility}
            {...props}
          />
        )}
      </Screen>

      <Screen
        name="course"
        component={Projects}
        options={{
          tabBarLabel: "Showreels",
          tabBarVisible: tabbarvisibility,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-albums"
              size={26}
              color={focused ? "#4775f2" : "#b8bece"}
            />
          ),
        }}
      />
      <Screen
        name="projects"
        component={Home}
        options={{
          tabBarLabel: "Contact",
          tabBarVisible: tabbarvisibility,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-person"
              size={26}
              color={focused ? "#4775f2" : "#b8bece"}
            />
          ),
        }}
      />
    </Navigator>
  );
}
