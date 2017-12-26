import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Circle from "react-native-vector-icons/Entypo";
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';

export default class ProfileForm extends Component {
  render(){
    return(
      <View id='overall' style={{flex: 1}}>
        <View id='header' style={{height: '8%', width: '100%', backgroundColor: '#e57202', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
          <TouchableOpacity style={{marginLeft: 5}}>
            <Circle name="chevron-thin-left" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{fontSize: 15, color: 'white'}}> REQUEST </Text>
          <View/>
        </View>

        <View id='body' style={{backgroundColor:'#E6E2E1', height: '84%', width: '100%', alignItems:'center'}}>
          <View id='progressBar' style={{width:'90%', height:'10%',borderRadius:7, marginVertical: 10,backgroundColor:'white',justifyContent:'space-between',flexDirection:'row',alignItems:'center', paddingHorizontal: 10}}>
            <View style={{borderBottomWidth: 3, borderColor: '#00bb00',flex:0.2, height:20, alignItems:'center', justifyContent:'center'}}>
              <Text style={{color: '#00bb00', fontSize:10}}> Profile </Text>
            </View>
            <View style={{borderBottomWidth: 2, flex:0.2, height:20, alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:10}}> Travel </Text>
            </View>
            <View style={{borderBottomWidth: 2, flex:0.2, height:20, alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:10}}> Cost </Text>
            </View>
            <View style={{borderBottomWidth: 2,  flex:0.2, height:20, alignItems:'center', justifyContent:'center'}}>
              <Text style={{fontSize:10}}> Approver </Text>
            </View>
          </View>

          <View id='profile' style={{height: '20%', width: '90%',backgroundColor:'white', borderRadius:7, justifyContent: 'space-between', flexDirection:'row', margin:10}}>
            <View style={{flex: 0.3}}>
              <Image source={require('./img/pp.jpeg')} style={{marginLeft:20,marginVertical: 20,width: '62%', height: '65%',borderRadius: 120}}/>
            </View>
            <View style={{flex: 0.7,paddingVertical: 20}} >
              <Text> Ali Muhd Wasil </Text>
              <Text> TM36668 </Text>
              <Text> Group Digital Centre </Text>
            </View>
            <View style={{flex: 0}}/>
          </View>

          <View id='addTravellers' style={{borderRadius:7, width:'90%', height: '7%', backgroundColor:'#c0c0c0', justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity>
              <Text style={{color: 'white'}}> + ADD TRAVELLER </Text>
            </TouchableOpacity>
          </View>

        </View>

        <View id={'footer'} style={{height:'8%', width:'100%', backgroundColor:'white', flexDirection: 'row', justifyContent:'space-between', alignItems:'center', borderColor: '#E57202',borderTopWidth: 0.5}}>
          <TouchableOpacity style={{alignItems: 'center', paddingLeft: 50, paddingTop: 5}}>
            <Icon name="home" size={24} color="orange" />
            <Text style={{fontSize:12, color: 'orange'}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center',paddingTop: 5}}>
            <Icon name="plane" size={24} color="black" />
            <Text style={{fontSize:12}}>Request</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{paddingRight: 50,alignItems:'center',paddingTop: 5}}>
            <Icon2 name="file-text-o" size={24} color="black" />
            <Text style={{fontSize:12}}>Approval</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
