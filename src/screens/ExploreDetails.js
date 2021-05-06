import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';



const GalleryPlaceholder = ()=>{
  return(<View >
<Image source = {require('../assets/img/placeholders/property.png')}
style={{resizeMode:'cover', height:287, width:'100%'}}/>
  </View>)
}



export default function ExploreDetails(data={data}) {
    return (
      <View style={{flex:1}}>
        <View style={{height:287}}>
        <GalleryPlaceholder/>
        </View>
        <Text>PropertyDetails</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  const data={
    propertyID:'001',
    propertyAddress:'',
    saleableArea:'',
    grossArea:'',
    buildingAge:'',
    floorLevel:'',
    propertyDirection:'',
    view:'',
    facilities:'',
    startingBid:'',
    auctionDate:''


  }