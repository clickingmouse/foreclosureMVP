import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Icon, Image } from 'react-native';

import {Auth} from 'aws-amplify';
import MemberCard from '../components/MemberCard'
//import { useEffect } from 'react';

import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { ScreenStackHeaderLeftView } from 'react-native-screens';
/*
function MemberCard({user}){
  return(<View><Text>Card</Text></View>)
}*/


function DetialItem(props){
  let [fontsLoaded] = useFonts({
    'helvetica':require( '../assets/fonts/Helvetica.ttc'),
  });
  return (
    <View >
      <Text style={{fontFamily:'helvetica', color:'#A88663', size:13, fontWeight:400}}>{props.title}</Text>
      <Text style={{fontFamily:'helvetica' ,color:'#3D3D3D', size:16, fontWeight:400}}>{props.text} </Text>
    </View>
  )
}

function ProfileDetails({user}){
  //console.log(user)
  return(<View style={{flex:1, flexDirection:'column', justifyContent:'space-around' }}>
    <DetialItem title={'Username'} text={'Kevin Ko'}></DetialItem>
    <DetialItem title={'Email'} text={'kev@ko.org'}></DetialItem>
    <DetialItem title={'Contact Number'} text={'12345678'}></DetialItem>
    <DetialItem title={'Referal Agent'} text={'dbsoba'}></DetialItem>
  </View>)
}


function ContactMailButton(){
  //console.log(prop)
return(<View>
  <TouchableOpacity 
    style={{ borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:43.62,
      height:43.62,
      backgroundColor:'#fff',
      borderRadius:100,
    }}
    >
      <Image source={require('../assets/img/menu-mail.png')} style={{width:43.62, height:43.62}}/>
  </TouchableOpacity>
  </View>)

}

function ContactWhatsAppButton(){
  //console.log(prop)
return(<View>
  <TouchableOpacity 
    style={{ borderWidth:1,
      borderColor:'rgba(0,0,0,0.2)',
      alignItems:'center',
      justifyContent:'center',
      width:43.62,
      height:43.62,
      backgroundColor:'#fff',
      borderRadius:100,
    }}
    >
      <Image source={require('../assets/img/menu-whatsapp.png')} style={{width:43.62, height:43.62}}/>
  </TouchableOpacity>
  </View>)

}

function ContactSMSButton(){
return(
  <View>
    <TouchableOpacity 
  style={{ borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:43.62,
    height:43.62,
    backgroundColor:'#fff',
    borderRadius:100,
  }}
  >
    <Image source={require('../assets/img/menu-sms.png')} style={{width:43.62, height:43.62}}/>
{/*}  <Icon name={"chevron-right"}
    size={30}
    color="#01a699" />
*/}


</TouchableOpacity>
    </View>
)
}

function ProfileContactMenu(){
  let [fontsLoaded] = useFonts({
    'helvetica':require( '../assets/fonts/Helvetica.ttc'),
  });


  return(
  <View>
    <Text style={{fontFamily:'helvetica', color:'#A88663', size:13}}>Contact Us</Text>
  <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}/>

<View style={{flexDirection:'row', paddingTop:8, paddingHorizontal:106.2, alignItems:'center', justifyContent:'space-between'}}>
<ContactSMSButton/>
<ContactMailButton/>
<ContactWhatsAppButton/>
</View>
  </View>)
}

const Profile=()=> {
  //const [user, setUser] = React.useState('')
  const user0 = {}
  const [user, setUser]= useState({})
  const  [isLoading, setIsLoading]= useState(true);

  const dummy = {}
  useEffect(()=>{
  async function checkUser() {
    let user = await Auth.currentAuthenticatedUser();
    setIsLoading(true);
    if (!!user) {  
    //console.log(user1)
    setUser(user.attributes)
    }
    setIsLoading(false)
    //console.log(user1)
    //console.log(userAttributes)
}
checkUser()

  },[])

  if (isLoading) {
    return <div>loading</div>;
  } 
    return (
      
      <View style={styles.profileContainer}>
        <Text>Profile</Text>

        <View style={styles.top}>
        <MemberCard />
        
        </View>

        <View style={styles.middle}>
        {!isLoading? <ProfileDetails user={user} /> : <Text>LoADING</Text>}
        </View>

        <View style={styles.bottom}>
        <ProfileContactMenu userAttributes={dummy} />
        </View>
        <StatusBar style="auto" />
      </View>
      
    );
  }

  const styles = StyleSheet.create({
    profileContainer:{ flex:1,
      height:'100%',
      flexDirection:'vertical',
      padding:19
      //paddingHorizontal:'19'
      //marginHorizontal:'19'
      //alignItems:'center',
      //width:'95%'

    },
    top: {
      flex: 1,
      //marginHorizontal:'19',
      height:'30%',
      backgroundColor: '#fff',
      //alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'powderblue',
      //paddingHorizontal:'19'
      
    },
    middle:{flex:1, height:'40%',backgroundColor: 'skyblue'},
    bottom:{flex:1, height: '30%', backgroundColor: 'steelblue'},

    //profileItemTitle:{fontFamily:helvatica},
    //profileItemText:{fontFamily:helvatica}

  });

  export default Profile