import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
//import PropertyCard from '../components/PropertyCard'
import CardCaption from './CardCaption'
const PropertyListCard = ()=>{


return(
    <View style={styles.container}>

    <View style={styles.imgContainer}>
    <Image source={require('../assets/img/placeholders/image7.png')} style={styles.img} />
    <Text style={styles.text}>
      Residential
    </Text>
    </View>


<View style={styles.captionContainer}>
<CardCaption/>
</View>

    </View>
)


}

const styles=StyleSheet.create({
    //375
    container:{
        height:205,
        width:'100%',
        //flex:1,
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-end',
        marginRight:0,
        backgroundColor:'red'

    },
    imgContainer:{
        flex:3,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    img:{
        flex:1,
        resizeMode:'cover',
        //width:'100%',
        //height:'auto%'
    },
    text:{
        position:'absolute',
        marginBottom: 10, 
        alignSelf: 'flex-end'
    },
    captionContainer:{
        flex:1
    }



})




export default PropertyListCard