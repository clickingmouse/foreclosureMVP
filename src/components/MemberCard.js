import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
//import ImagesExample from './../assets/img/memberCard.png'
const MemberCard = ()=>{

return (
    <View style = {styles.membershipCardContainer}>
    <ImageBackground source={require('../assets/img/memberCard.png')}  style={{
    flex:1,
    height:168,
      width:344.5,
//      justifyContent: "center"
  }}/>
    
    </View>
)

}

const styles = StyleSheet.create({
    membershipCardContainer: {
      flex: 1,

      
      
      

    },
    image:{
        //flex:1,
        height:168,
      width:344.5,
      //position: 'absolute', zIndex: -1, 
      //padding:'19',
      //postion:'absoolute'
      //marginHorizontal:'19'
       
    }
  });

export default MemberCard


