import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, ExploreStackNavigator, ProfileStackNavigator } from "./StackNavigator";
import Favourites from "../screens/Favourites";
                                 //Favourites
import MyBids from "../screens/MyBids";
import Profile from "../screens/Profile";
import Explore from "../screens/Explore"
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Explore" headerMode="screen">
      <Tab.Screen name="Explore" component={ExploreStackNavigator} />
      <Tab.Screen name="Favourites" component={Favourites} />
      <Tab.Screen name="MyBids" component={MyBids} />
      <Tab.Screen name="Profile" component={ProfileStackNavigator}/>

    </Tab.Navigator>
  );
};

export default BottomTabNavigator;