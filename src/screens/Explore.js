import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropertyCard from '../components/PropertyCard'
export default function Explore({ navigation }) {
    return (
      <View >
    <PropertyCard/>
        <StatusBar style="auto" />
      </View>
    );
  }