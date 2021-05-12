import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PropertyCard from '../components/PropertyCard'
import PropertyListCard from '../components/PropertyListCard'
export default function Explore({ navigation }) {
    return (
      <View style={styles.container}>
    <PropertyListCard/>
        <StatusBar style="auto" />
      </View>
    );
  }

  const styles=StyleSheet.create({
    container:{
        paddingRight:0,
        paddingLeft:"5%",
        backgroundColor:"blue",
        //justifyContent:'flex-end'

    }

})

//375 - 356 = 19
//5%