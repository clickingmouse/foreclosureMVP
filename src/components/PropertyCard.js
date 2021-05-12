import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements'
//import PropertyCard from '../components/PropertyCard'
import CardCaption from './CardCaption'
const PropertyCard = ()=>{
    return(<View>
       <Card style={styles.card}>
             
  <Card.Image source={require('../assets/img/placeholders/property.png')} style={styles.img} containerStyle={styles.container}  >
    <Text style={{marginBottom: 10, alignSelf: 'flex-end'}}>
      Residential
    </Text>

  </Card.Image>
<CardCaption props={placeholder} />
       </Card >
       </View>
    )
}

export default PropertyCard

const placeholder ={
    valuation:'8,600,000',
    location:'Tseung Kwan O'

}

const styles=StyleSheet.create({
    img:{
        flex:1,
        resizeMode:'cover',
        width:'100%',
        //height:null, 
        aspectRatio: 1,
        justifyContent: 'flex-end' 
    },
    container:{
        flexDirection:'row',
        flex:1,
        backgroundColor:'grey'
    },
    children:{
        //flex:1,
        //resizeMode:'cover',
        //height:200,
        //backgroundColor:'yellow'
    },
    card:{
        height:205,
        width:356,
        flex:1,
        flexDirection:'column',
        marginRight:0,
        backgroundColor:'yellow'
    }
})