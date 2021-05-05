import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
//import { MainStackNavigator } from "./navigation/StackNavigator"; 
import BottomTabNavigator from "./src/navigation/TabNavigator";
import Landing from './src/screens/Landing'

import Amplify, { API, graphqlOperation, Storage } from 'aws-amplify';
import awsconfig from './src/aws-exports'
import {AmplifySignOut, withAuthenticator}  from 'aws-amplify-react-native'
import { useFonts } from 'expo-font';

//import AppLoading from 'expo-app-loading';

//Amplify.configure(awsconfig)
Amplify.configure({
  ...awsconfig,
  Analytics: {
    disabled: true,
  },
});


 function App() {


  let [fontsLoaded] = useFonts({
    'helvatica':require( './src/assets/fonts/Helvetica.ttc'),
  });

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // } else {

  return (
    <View style={styles.container}>
      <NavigationContainer>
      <BottomTabNavigator />
      </NavigationContainer>
      {/*
      <StatusBar style="auto" /> 
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});

export default withAuthenticator(App, {signUpConfig: {defaultCountryCode: 852,
  signUpFields: [{ label: 'Name',
key: 'name',
required: true,
displayOrder: 1,
type: 'string',
}]
}})
