import React from 'react';
import { StyleSheet, Text, View, Image,Button,TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
//import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

const FavoriteCircleButton = (props)=>{

//    const combineStyles = StyleSheet.combine([capsuleButtonContainer, backgroundColor])


    return(
        <TouchableOpacity onPress={props.onPress} style={styles.capsuleButtonContainer}
        >
        <FontAwesome name="heart-o" size ={15} style={{ color:'white'}}/>
      </TouchableOpacity>
    )
}

export default FavoriteCircleButton

const styles = StyleSheet.create({
    capsuleButtonContainer: {
        //flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    //elevation: 8,
    backgroundColor: "black",
    borderRadius: 100,
    //padding:10,

    width: 39,
    height: 39,
  },
  capsuleButtonText: {
   
    //textTransform: "uppercase",
  },
})