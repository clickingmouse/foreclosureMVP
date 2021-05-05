import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Explore from "../screens/Explore";
import ExploreFilter from "../screens/ExploreFilter";

import Favourites from "../screens/Favourites";
import MyBids from "../screens/MyBids";
import Profile from "../screens/Profile";


//import About from "../screens/About";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle} >
      <Stack.Screen name="Explore" component={Explore} />
      <Stack.Screen name="Favourites" component={Favourites} />
      <Stack.Screen name="MyBids" component={MyBids} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

const ExploreStackNavigator = () => {
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="ExploreFilter" component={ExploreFilter} />

      </Stack.Navigator>
    );
  }
  const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };
  
export { MainStackNavigator , ExploreStackNavigator };