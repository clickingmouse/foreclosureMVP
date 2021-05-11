import React from 'react';
import { StyleSheet, Text, View, Image,Button,TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
//import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

import { Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';

const BackCircleButton = (props)=>{

//    const combineStyles = StyleSheet.combine([capsuleButtonContainer, backgroundColor])


    return(
        <TouchableOpacity onPress={props.onPress} style={styles.capsuleButtonContainer}
        >
        <Ionicons name="chevron-back-circle" style={{fontSize: 50}}/>
      </TouchableOpacity>
    )
}

export default BackCircleButton

const styles = StyleSheet.create({
    capsuleButtonContainer: {
        //flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    //elevation: 8,
    backgroundColor: "grey",
    borderRadius: 100,
    //padding:10,

    width: 39,
    height: 39,
  },
  capsuleButtonText: {
   
    //textTransform: "uppercase",
  },
})