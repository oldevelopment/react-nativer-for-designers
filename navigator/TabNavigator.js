import React, { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Section from "../screens/Section";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import Projects from "../screens/Projects";
import Courses from "../screens/Courses";

const { Navigator, Screen } = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = ({ handleTabbarVisibility }) => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen
      name="home"
      component={Home}
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
    <Stack.Screen
      name="section"
      options={{
        tabBarVisible: false,
      }}
    >
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
        name="projects"
        component={Projects}
        options={{
          tabBarLabel: "Projects",
          tabBarVisible: tabbarvisibility,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-folder"
              size={26}
              color={focused ? "#4775f2" : "#b8bece"}
            />
          ),
        }}
      />
      <Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarVisible: tabbarvisibility,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="ios-home"
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
        component={Courses}
        options={{
          tabBarLabel: "Courses",
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
    </Navigator>
  );
}
