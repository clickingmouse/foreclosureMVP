import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image,Button,TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
//import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import CapsuleButton from '../components/CapsuleButton'
import RightSideButton from '../components/RightSideButton'

import DetailPanel from '../components/DetailPanel'

import PropertyHeader from '../components/PropertyHeader'

const GalleryPlaceholder = ()=>{
  return(<View >
<Image source = {require('../assets/img/placeholders/property.png')}
style={{resizeMode:'cover', height:287, width:'100%'}}/>
  </View>)
}

const MenuBar = ()=>{
  return(
    <View style={{flexDirection:'row'}}>
      <Button/><Button/><Button/><Button/>
    </View>
  )
}

const PropertyDetailLeft =()=>{
  return (
    <View>
      <PropertyHeader/>    



    </View>

    
    )
}
const PropertyDetailRight =()=>{
  return (
  <View>
  <Text>Residential</Text>
  <RightSideButton title='Floorplan' />
  {/*<Button title='Floor-plan'/>*/}
  </View>
  )
}

const PropertyDetailContentTop=()=>{
  return(
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
<PropertyDetailLeft/>
<PropertyDetailRight/>
    </View>
  )
}

const PropertyDetailModal=()=>{
  return(<DetailPanel title='Property Details'/>)
}
const PropertyDetailCurrentBid=()=>{  
  return(<Text>CurrentBid</Text>)
}

const EnquireButton =({ onPress, title })=>{
  return(
  <TouchableOpacity onPress={onPress} style={styles.enquireButtonContainer}>
  <Text style={styles.enquireButtonText}>{title}</Text>
</TouchableOpacity>
  )
}

const PropertyDetailContent =()=>{
  return(
    <View>
      <PropertyDetailContentTop/>
      <PropertyDetailModal/>
      <PropertyDetailCurrentBid/>
      <View style={{flexDirection:'row'}}>
        <EnquireButton onPress = {()=>console.log('enquire')} title='Enquire'/>
        <CapsuleButton title='Place your bid' backgroundColor='#A88663'/>
        {/*<Button title='Enquire' style={styles.enquire}/>
        <Button title='Place your bid' />*/}
      </View>
    </View>
  )

}



export default function ExploreDetails(data={data}) {

  let [fontsLoaded] = useFonts({
    'helvetica':require( '../assets/fonts/Helvetica.ttc'),
  });

  if (fontsLoaded){ 
    return (
      <View style={{flex:1}}>
        <View style={{height:287}}>
        <GalleryPlaceholder/>
        </View>
        <MenuBar/>
        <Text>PropertyDetails</Text>
        <PropertyDetailContent/>
        
        <StatusBar style="auto" />
      </View>
    );
  }else { return(<Text>loading</Text>)}
 } 

  const styles = StyleSheet.create({
      appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: 160.00,
      height: 37.11,
    },
    appButtonText: {
      fontSize: 16,
      fontFamily:'helvetica',
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    enquireButtonContainer: {

      elevation: 8,
      backgroundColor: "#000",
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: 160.00,
      height: 37.11,
  
    },
    enquireButtonText: {
      fontSize: 16,
      color: "#fff",
      fontWeight: 300,
      alignSelf: "center",
      //textTransform: "uppercase"
    },
  });


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