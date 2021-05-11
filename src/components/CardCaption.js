import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager, Icon} from "react-native";
import { useFonts } from 'expo-font';
import { StatusBar } from 'react-native';
import { Ionicons, FontAwesome5, AntDesign } from '@expo/vector-icons';

const CardCaption = (props={placeholder})=>{
props = placeholder
let [fontsLoaded] = useFonts({
    'helvetica':require( '../assets/fonts/Helvetica.ttc'),
  });


    return(
        <View style={{flexDirection:'row'}}>



            <View>
            <View style={{flexDirection:'row'}}>
<Text style={styles.price}>{props.valuation} </Text><Text style={styles.hkd}>HKD </Text><Text style={styles.valuation}>(Valuation)</Text>
</View>
<Text style={styles.location}>{props.location}</Text>


</View>

<View style={{flex:1}}>

<View style={{ flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end'}}>
<Ionicons name="ios-bed" size={18} color="#A88663" /> <Text style={ styles.info}>2 </Text>
<FontAwesome5 name="bath"  size={16} color="#A88663" />
    <Text style={ styles.info}>2 </Text>
    <AntDesign name='arrowsalt' size = {16} color = "#A88663"/>
    <Text style={ styles.info}>680sqft </Text>
    </View>






    </View>

        </View>
    )
}

export default CardCaption
const placeholder ={
    valuation:'8,600,000',
    location:'Tseung Kwan O'
}

const styles=StyleSheet.create({
    price:{
        fontSize: 18,
        fontFamily:'helvetica',
        color:'#3C3C3C',
        fontWeight:700,
        
    
    },
    hkd:{
        fontSize: 11,
        fontFamily:'helvetica',
        color:'#3C3C3C',
        fontWeight:700,
        
    },
    valuation:{
        fontSize: 8,
        fontFamily:'helvetica',
        color:'#A88663',
        fontWeight:400,
        
    },
    location:{
        fontSize: 10,
        fontFamily:'helvetica',
        color:'#3C3C3C',
        fontWeight:400,
    },

    info:{
        flexDirection:'row',
        fontSize: 10,
        fontFamily:'helvetica',
        color:'#A88663',
        fontWeight:400,
        
    },
    bedroom:{

    },
    bathroom:{

    },
    sqft:{}

})