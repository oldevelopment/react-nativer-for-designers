import React from "react";
import AllReducers from "./Redux/reducers/AllReducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AppNavigator from "./navigator/AppNavigator";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { StatusBar } from "react-native";

const myStore = createStore(AllReducers);
console.reportErrorsAsExceptions = false;
const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://graphql.contentful.com/content/v1/spaces/1gnle2li4xhx",
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer Lv0MYqJi6VQD2BAvXUYJafa3LoxFHEd0uOkoqbu6lfI`,
  },
});

export default function App() {
  StatusBar.setBackgroundColor("#f0f3f5");
  return (
    <Provider store={myStore}>
      <ApolloProvider client={client}>
        <StatusBar barStyle="dark-content" />
        <AppNavigator />
      </ApolloProvider>
    </Provider>
  );
}
