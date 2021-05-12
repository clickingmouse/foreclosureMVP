import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PropertyCard from '../components/PropertyCard'

const ExploreListings = ()=>{
    return(
        <View style={styles.container}>
        <PropertyCard/>
        </View>

    )
}

export default ExploreListings

const styles=StyleSheet.create({
    container:{
        paddingRight:0,
        paddingLeft:"5%",
        backgroundColor:"blue"
    }

})

//375 - 356 = 19
//5%