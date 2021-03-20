import React from "react";

import allReducers from "./Redux/reducers/reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
const myStore = createStore(allReducers);

import AppNavigator from "./navigator/AppNavigator";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StatusBar } from "react-native";
// import { StatusBar } from "expo-status-bar";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql.contentful.com/content/v1/spaces/yk83xashtump",
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer lRWeme1lzT5dbssBx0_IH9Z6vF0-0guflEslRcFsjL0`,
  },
});

export default function App() {
  StatusBar.setBackgroundColor("#f0f3f5");
  return (
    <ApolloProvider client={client}>
      <Provider store={myStore}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </Provider>
    </ApolloProvider>
  );
}
