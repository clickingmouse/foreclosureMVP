import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Button} from 'react-native';
import Explore from "../screens/Explore";
import ExploreFilter from "../screens/ExploreFilter";
import ExploreDetails from "../screens/ExploreDetails";
import Favourites from "../screens/Favourites";
import MyBids from "../screens/MyBids";
import Profile from "../screens/Profile";
import BackCircleButton from '../components/BackCircleButton'
import FavoriteCircleButton from '../components/FavoriteCircleButton'
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
      <Stack.Navigator initialRouteName="Explore"  screenOptions={screenOptionStyle}>
        <Stack.Screen name="Explore" component={Explore} options={{
    //headerShown: true,
    headerTransparent: false,
    title:'',
    headerLeft: () => (
      <BackCircleButton  onPress={()=>console.log('pressed')}/>
    ),
    headerRight: () => (
      <Button title='x'/>
    ),
  }}/>

        <Stack.Screen name="ExploreFilter" component={ExploreFilter} />
        <Stack.Screen name="ExploreDetails" component={ExploreDetails} options={{
    //headerShown: true,
    headerTransparent: true,
    title:'',
    headerLeft: () => (
      <BackCircleButton  onPress={()=>console.log('pressed')}/>
    ),
    headerRight: () => (
      <FavoriteCircleButton/>
    ),
  }}/>
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
  
  const ProfileStackNavigator = ()=>{
    return (
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Profile" component={Profile} />
        

      </Stack.Navigator>
    );
  }
export { MainStackNavigator , ExploreStackNavigator, ProfileStackNavigator };