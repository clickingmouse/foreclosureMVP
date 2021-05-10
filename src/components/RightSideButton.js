import React from 'react';
import { StyleSheet, Text, View, Image,Button,TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
//import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

const RightSideButton = (props)=>{
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
        <TouchableOpacity onPress={props.onPress} style={[styles.RSButtonContainer, propStyles]}
        >

         {props.icon} 
        <Text style={styles.RSButtonText}>{props.title}</Text>
      </TouchableOpacity>
    )
}

export default RightSideButton

const styles = StyleSheet.create({
    
    RSButtonContainer: {
    flexDirection:'row',
        elevation: 8,
    //backgroundColor: "#009688",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 94.00,
    height: 27.20,
    //opacity: 0,
    borderColor: "#A88663",
    borderWidth:1
  },
  RSButtonText: {
    fontSize: 12,
    color: "#A88663",
    fontWeight: 300,
    alignSelf: "center",
    //textTransform: "uppercase",
  },
})