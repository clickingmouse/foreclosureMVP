import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Explore({ navigation }) {
    return (
      <View >
        <Text>Explore Screen</Text>
        <Button
        title="Go to Filter Screen"
        onPress={() => navigation.navigate("ExploreFilter")} // We added an onPress event which would navigate to the About screen
      />
        <StatusBar style="auto" />
      </View>
    );
  }