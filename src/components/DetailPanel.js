import React, {Component} from 'react';
import { View, TouchableOpacity, Text, StyleSheet, LayoutAnimation, Platform, UIManager} from "react-native";
//import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import RightSideButton from './RightSideButton'
import {FontAwesome5} from '@expo/vector-icons';



export default class DetailPanel extends Component{

    constructor(props) {
        super(props);
        this.state = { 
          data: props.data,
          expanded : false,
        }

        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
  
  render() {

    return (
       <View>
            <TouchableOpacity ref={this.accordian} style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title, styles.font]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30}  />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={styles.child}>
                    <Text>{this.props.data}</Text>

                    <Text style={styles.label}>Address</Text>
                    <Text style={styles.content}>Unit A, Tower 2, Metro Town Phase 1, 8 King LingRoad</Text>
                    <RightSideButton title='Map View' icon={<FontAwesome5 name='map-marker-alt' size={10} color='#A88663' />}/>
                    
                    
                    <View style={styles.group}>
                    <Text style={styles.label}>Scaleable area</Text><Text style={styles.content}>520 sqft ($14521/sqft)</Text>
                    </View>

                    <View style={styles.group}>
                    <Text style={styles.label}>Gross area</Text><Text style={styles.content}>680 sqft ($11,614/sqft)</Text>
                    </View>
                    <View style={styles.group}>
                    <Text style={styles.label}>Building age</Text><Text style={styles.content}>19</Text>
                    </View>
                    <View style={styles.group}>
                    <Text style={styles.label}>Floor level </Text><Text style={styles.content}>Upper floors</Text>
                    </View>

                    <View style={styles.group}>
                    <Text style={styles.label}>Property location</Text><Text style={styles.content}>South West</Text>
                    </View>

                    <View style={styles.group}>
                    <Text style={styles.label}>Views</Text><Text style={styles.content}>Sea, Open, Garden</Text>
                    </View>
                    <Text style={styles.label}>Facilities</Text><Text style={styles.content}>Outdoor swimming pool, steam, sauna, shower room, changing room, gymnasium, tennis court, squash court, basketball court, table tennis room, billiard room, function room, music room, video game room, reading lounge, children’s play area</Text>
                    <Text></Text><Text></Text>



                </View>
            }
            
       </View>
    )
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color:'#A88663',
        //color: Colors.DARKGRAY,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        //backgroundColor: Colors.CGRAY,
    },
    parentHr:{
        height:1,
        //color: Colors.WHITE,
        width:'100%'
    },
    child:{
        //backgroundColor:"#F3F3F3",
        padding:16,
    },
    label:{
        fontSize: 13,
        fontFamily:'helvetica',
        color:'#A88663',
        fontWeight:700,
        
    },
    content:{
        fontSize: 13,
        fontFamily:'helvetica',
        color:'#3C3C3C',
        fontWeight:400,
    },
    group :{
        flexDirection:'row'
    }

    
});
//export default DetailPanel