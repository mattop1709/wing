import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Circle from "react-native-vector-icons/Entypo";
import Check from "react-native-vector-icons/MaterialCommunityIcons";
import Cancel from "react-native-vector-icons/MaterialIcons";

import { Divider } from 'react-native-elements';


export default class HomeClass extends Component {
  render() {
    const { status } = this.props;
    return(
      <View id='overall' style= {{backgroundColor: 'white', flex: 1}}>
        <View id= 'header' style={{height: '8%', backgroundColor: '#E57202', width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
          <TouchableOpacity style={{marginLeft: 5}}>
            <Circle name="chevron-thin-left" size={24} color="white" />
          </TouchableOpacity>
            <Text style={{fontSize: 15, color: 'white'}}> REQUEST </Text>
          <View/>
        </View>

        <View id='body' style={{backgroundColor:'#E6E2E1', height: '84%', width: '100%', alignItems:'center'}}>
          <View id='editDelete' style={{flexDirection: 'row', height:'5%', width:'90%', alignItems:'center', justifyContent:'flex-end'}}>
            <TouchableOpacity>
              <Text style={{fontSize: 10, color: 'red'}}>EDIT</Text>
            </TouchableOpacity>
              <Text style={{fontSize: 10, color: 'red'}}> | </Text>
            <TouchableOpacity>
              <Text style={{fontSize: 10, color: 'red'}}>DELETE</Text>
            </TouchableOpacity>
          </View>
          <View id='requestSummary' style={{height: '45%', width: '90%', backgroundColor: 'white', borderRadius: 7}}>
            <View style={{height: '50%'}}>
              <Text id='destination' style={{justifyContent:'flex-start', fontWeight:'bold',fontSize: 16}}> LONDON, ENGLAND </Text>
              <Text id='travelType' style={{fontSize: 16}}> UX London 2017 Conference </Text>
              <Text id='travelJustification' style={{paddingLeft: 5, fontSize: 12}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu </Text>
            </View>
            <View id='itinerary' style={{height: '48%', alignItems: 'center', flexDirection:'row', justifyContent:'center'}}>
              <View id='itineraryLeft' style={{width:'45%'}}>
                <View id='itineraryLeftHeader' style={{height:'25%',backgroundColor: '#f5ba32',borderTopLeftRadius: 7, alignItems:'center', justifyContent:'center'}}>
                  <Text style= {{fontSize: 12, color: 'white'}}> DEPARTURE </Text>
                </View>
                <View id='itineraryLeftBody' style={{height:'75%',backgroundColor:'#f7cf6f',borderBottomLeftRadius: 7, justifyContent: 'center', alignItems: 'center'}}>
                  <Text style={{fontSize: 38, color: 'white', position: 'absolute', paddingBottom: 30}}> 20 </Text>
                  <Text style={{fontSize: 18, color: 'white', paddingTop: 30}}> OCT 2017 </Text>
                </View>
              </View>
              <View id= 'itineraryDivider' style={{width: 2}}>
                  <View id='itineraryDividerTop' style={{height:'10%', backgroundColor: '#f5ba32'}}>
                  </View>
                  <View id='itineraryDividerMid' style={{height:'80%', backgroundColor: 'white', borderRadius: 100}}>
                  </View>
                  <View id='itineraryDividerBottom' style={{height:'10%', backgroundColor: '#f7cf6f'}}>
                  </View>
              </View>
              <View id='itineraryRight' style={{width:'45%'}}>
                <View id='itineraryRightHeader' style={{height:'25%',backgroundColor: '#f5ba32', borderTopRightRadius: 7, justifyContent:'center', alignItems:'center'}}>
                  <Text style= {{fontSize: 12, color: 'white'}}> ARRIVAL </Text>
                </View>
                <View id='itineraryRightBody' style={{height:'75%',backgroundColor:'#f7cf6f', borderBottomRightRadius: 7, justifyContent: 'center', alignItems:'center'}}>
                  <Text style={{fontSize: 38, color: 'white', position: 'absolute', paddingBottom: 30}}> 28 </Text>
                  <Text style={{fontSize: 18, color: 'white', paddingTop: 30}}> OCT 2017 </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{height: '5%', width: '90%', paddingVertical:2}}>
            <Text style={{fontSize: 12}}> REQUEST STATUS </Text>
          </View>
          <View id='trackBar' style={{height:'12%', width: '90%',backgroundColor:'white', borderRadius:7, justifyContent:'center',alignItems:'center'}}>
            <View id='trackBarBody' style={{flexDirection: "row", justifyContent: "center", paddingVertical: 1, width:'90%'}}>
              <Check name="check-circle" size={24} color="green" style={{ paddingHorizontal: 4 }}/>
              <View style={{ flex: 0.28, borderWidth:1, height: '2%', marginTop: 10, borderColor: 'grey' }}/>
              <Check name="check-circle" size={24} color="green" style={{ paddingHorizontal: 4 }}/>
              <View style={{ flex: 0.28, borderWidth:1, height: '2%', marginTop: 10, borderColor: 'grey'  }}/>
              <Check name="check-circle" size={24} color="green" style={{ paddingHorizontal: 4 }}/>
              <View style={{ flex: 0.28, borderWidth:1, height: '2%', marginTop: 10, borderColor: 'grey'  }}/>
              <Check name="check-circle" size={24} color="green" style={{ paddingHorizontal: 4 }}/>
            </View>
            <View id='trackBarLabel' style={{flexDirection: "row", justifyContent: "space-between", paddingVertical: 1, width:'90%'}}>
              <Text style={{fontSize:10}}> Submission </Text>
              <Text style={{fontSize:10, marginLeft: 2}}> Nomination </Text>
              <Text style={{fontSize:10, marginRight:6}}> Endorsement </Text>
              <Text style={{fontSize:10,marginRight:7}}> Approval </Text>
            </View>
          </View>
          <View style={{height: '5%', width: '90%', paddingVertical: 2}}>
            <Text style={{fontSize: 12}}> REQUEST PROFILE </Text>
          </View>
          <View style={{height:'28%', width:'90%', backgroundColor: 'white',borderRadius: 7}}>
            <View style={{height:'33%', width:'100%',justifyContent:'center', flexDirection:'row', marginTop: 7}}>
              <Image source={require('./img/pp.jpeg')} style={{width: '12%', height: '90%',borderRadius: 50, marginBottom: 4,marginLeft:10}}/>
              <View style={{width:'88%'}}>
                <Text style={{fontWeight:'bold'}}> Ali Muhd Wasil </Text>
                <Text> Group Digital Centre </Text>
              </View>
            </View>
            <Divider style={{ marginHorizontal: 10, height: 0.5,backgroundColor: 'grey' }} />
            <View style={{height:'33%', width:'100%',justifyContent:'center', flexDirection:'row', marginTop: 7}}>
              <Image source={require('./img/pp.jpeg')} style={{width: '12%', height: '90%',borderRadius: 50, marginBottom: 4,marginLeft:10}}/>
              <View style={{width:'68%'}}>
                <Text style={{fontWeight:'bold'}}> Ali Muhd Wasil </Text>
                <Text> Group Digital Centre </Text>
              </View>
              <Text style={{width: '20%', color: 'blue', fontSize: 10}}> Additional</Text>
            </View>
            <Divider style={{ marginHorizontal: 10, height: 0.5,backgroundColor: 'grey' }} />
            <View style={{height:'33%', width:'100%',justifyContent:'center', flexDirection:'row', marginTop: 7}}>
              <Image source={require('./img/pp.jpeg')} style={{width: '12%', height: '90%',borderRadius: 50, marginBottom: 4,marginLeft:10}}/>
              <View style={{width:'68%'}}>
                <Text style={{fontWeight:'bold'}}> Ali Muhd Wasil </Text>
                <Text> Group Digital Centre </Text>
              </View>
              <Text style={{width: '20%', color: 'blue', fontSize: 10}}> Additional</Text>
            </View>
            <Divider style={{ marginHorizontal: 10, height: 0.5,backgroundColor: 'grey' }} />
          </View>
        </View>

        <Divider style={{ marginHorizontal: 20, height: 1,backgroundColor: '#E57202' }} />

        <View id='footer' style={{backgroundColor: 'white', height:'8%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row'}}>
          <TouchableOpacity style={{alignItems: 'center', paddingLeft: 50, paddingTop: 5}}>
            <Icon name="home" size={24} color="black" />
            <Text style={{fontSize:12}}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignItems:'center',paddingTop: 5}}>
            <Icon name="plane" size={24} color="orange" />
            <Text style={{fontSize:12, color: 'orange'}}>Request</Text>
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
