import React from 'react';
import { StyleSheet, Text, View, Image,Button,TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
//import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

const CapsuleButton = (props)=>{
    let [fontsLoaded] = useFonts({
        'helvetica':require( '../assets/fonts/Helvetica.ttc'),
      });
const propStyles={
    backgroundColor:props.backgroundColor
}
    const { backgroundColor, color} = props;
    const {capsuleButtonText, capsuleButtonContainer} = styles;
//    const combineStyles = StyleSheet.combine([capsuleButtonContainer, backgroundColor])


    return(
        <TouchableOpacity onPress={props.onPress} style={[styles.capsuleButtonContainer, propStyles]}
        >
        <Text style={styles.capsuleButtonText}>{props.title}</Text>
      </TouchableOpacity>
    )
}

export default CapsuleButton

const styles = StyleSheet.create({
    capsuleButtonContainer: {
    elevation: 8,
    backgroundColor: "#009688",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 160.00,
    height: 37.11,
  },
  capsuleButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: 300,
    alignSelf: "center",
    //textTransform: "uppercase",
  },
})