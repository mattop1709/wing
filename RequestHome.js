import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import { Divider } from 'react-native-elements';


export default class HomeClass extends Component {
  render () {
    return (
      <View id='overall' style= {{backgroundColor: 'white', flex: 1}}>
        <View id= 'header' style={{height: '8%', backgroundColor: '#E57202', width: '100%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'}}>
        <TouchableOpacity style={{marginLeft: 5}}>
          <Icon name="menu" size={18} color="white" />
        </TouchableOpacity>
          <Text style={{fontSize: 15, color: 'white'}}> REQUEST </Text>
          <View></View>
        </View>
        <View id='body' style={{backgroundColor:'#E6E2E1', height: '84%', width: '100%'}}>
          <Text style={{padding: 10}}> PENDING REQUEST </Text>
          <View id='pendingReqBody' style={{height: '30%', width: '100%', alignItems: 'center'}}>
            <View id={'firstReqCard'} style={{ backgroundColor: 'white', width: '90%', flexDirection: 'row', height: '45%', borderRadius: 7, alignItems:'center'}}>
              <View id='status' style={{height:'100%', width: '2%',backgroundColor: 'blue',borderTopLeftRadius: 7, borderBottomLeftRadius: 7}}>
              </View>
              <View id='cardBody' style={{width:'75.6%', height: '100%', backgroundColor: 'white', paddingRight: 15, justifyContent:'center'}}>
                <Text style={{fontWeight: 'bold', paddingLeft: 1}}> London, United Kingdom </Text>
                <Text style={{paddingLeft: 1}}> UI/UX Conference </Text>
                <View id='cardInfo' style={{paddingLeft: 2,width: '100%',marginTop: 3, alignItems:'center',height:'30%', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name="calendar" size={14} color="black" />
                    <Text style={{fontSize: 12}}> 5 days</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name="user" size={14} color="black" />
                    <Text style={{fontSize: 12}}> 1 person</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name="check" size={14} color="black"/>
                    <Text style={{fontSize: 12}}> Nomination</Text>
                  </View>
                </View>
              </View>
              <View id='divider' style={{height:'80%',width:'0.4%',backgroundColor:'grey'}}>
              </View>
              <View id='cardDate' style={{width:'22%', height: '100%',borderTopRightRadius: 7, borderBottomRightRadius: 7,  backgroundColor:'white', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>20</Text>
                <Text style={{fontSize: 10}}>OCTOBER</Text>
                <Text style={{fontSize: 10}}>2017</Text>
              </View>
            </View>
            <View id={'secondReqCard'} style={{ marginTop:10 ,backgroundColor: 'white', width: '90%', flexDirection: 'row', height: '45%', borderRadius: 7, alignItems:'center'}}>
              <View id='status' style={{height:'100%', width: '2%',backgroundColor: 'blue',borderTopLeftRadius: 7, borderBottomLeftRadius: 7}}>
              </View>
              <View id='cardBody' style={{width:'75.6%', height: '100%', backgroundColor: 'white', paddingRight: 15, justifyContent:'center'}}>
                <Text style={{fontWeight: 'bold', paddingLeft: 1}}> London, United Kingdom </Text>
                <Text style={{paddingLeft: 1}}> UI/UX Conference </Text>
                <View id='cardInfo' style={{paddingLeft: 2,width: '100%',marginTop: 3, alignItems:'center',height:'30%', flexDirection: 'row', justifyContent: 'space-between'}}>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name="calendar" size={14} color="black" />
                    <Text style={{fontSize: 12}}> 5 days</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name="user" size={14} color="black" />
                    <Text style={{fontSize: 12}}> 1 person</Text>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Icon name="check" size={14} color="black"/>
                    <Text style={{fontSize: 12}}> Nomination</Text>
                  </View>
                </View>
              </View>
              <View id='divider' style={{height:'80%',width:'0.4%',backgroundColor:'grey'}}>
              </View>
              <View id='cardDate' style={{width:'22%', height: '100%',borderTopRightRadius: 7, borderBottomRightRadius: 7,  backgroundColor:'white', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 20}}>20</Text>
                <Text style={{fontSize: 10}}>OCTOBER</Text>
                <Text style={{fontSize: 10}}>2017</Text>
              </View>
            </View>
          </View>
          <Text style={{padding: 10}}> REQUEST HISTORY </Text>
          <View id='requestHistoryBody' style={{height: '70%', width: '100%', alignItems: 'center'}}>
          <View id={'firstHistoryCard'} style={{ backgroundColor: 'white', width: '90%', flexDirection: 'row', height: '20%', borderRadius: 7, alignItems:'center'}}>
            <View id='status' style={{height:'100%', width: '2%',backgroundColor: 'blue',borderTopLeftRadius: 7, borderBottomLeftRadius: 7}}>
            </View>
            <View id='cardBody' style={{width:'75.6%', height: '100%', backgroundColor: 'white', paddingRight: 15, justifyContent:'center'}}>
              <Text style={{fontWeight: 'bold', paddingLeft: 1}}> London, United Kingdom </Text>
              <Text style={{paddingLeft: 1}}> UI/UX Conference </Text>
              <View id='cardInfo' style={{paddingLeft: 2,width: '100%',marginTop: 3, alignItems:'center',height:'30%', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="calendar" size={14} color="black" />
                  <Text style={{fontSize: 12}}> 5 days</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="user" size={14} color="black" />
                  <Text style={{fontSize: 12}}> 1 person</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="check" size={14} color="black"/>
                  <Text style={{fontSize: 12}}> Nomination</Text>
                </View>
              </View>
            </View>
            <View id='divider' style={{height:'80%',width:'0.4%',backgroundColor:'grey'}}>
            </View>
            <View id='cardDate' style={{width:'22%', height: '100%',borderTopRightRadius: 7, borderBottomRightRadius: 7,  backgroundColor:'white', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>20</Text>
              <Text style={{fontSize: 10}}>OCTOBER</Text>
              <Text style={{fontSize: 10}}>2017</Text>
            </View>
          </View>
          <View id={'secondHistoryCard'} style={{marginTop:10, backgroundColor: 'white', width: '90%', flexDirection: 'row', height: '20%', borderRadius: 7, alignItems:'center'}}>
            <View id='status' style={{height:'100%', width: '2%',backgroundColor: 'blue',borderTopLeftRadius: 7, borderBottomLeftRadius: 7}}>
            </View>
            <View id='cardBody' style={{width:'75.6%', height: '100%', backgroundColor: 'white', paddingRight: 15, justifyContent:'center'}}>
              <Text style={{fontWeight: 'bold', paddingLeft: 1}}> London, United Kingdom </Text>
              <Text style={{paddingLeft: 1}}> UI/UX Conference </Text>
              <View id='cardInfo' style={{paddingLeft: 2,width: '100%',marginTop: 3, alignItems:'center',height:'30%', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="calendar" size={14} color="black" />
                  <Text style={{fontSize: 12}}> 5 days</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="user" size={14} color="black" />
                  <Text style={{fontSize: 12}}> 1 person</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="check" size={14} color="black"/>
                  <Text style={{fontSize: 12}}> Nomination</Text>
                </View>
              </View>
            </View>
            <View id='divider' style={{height:'80%',width:'0.4%',backgroundColor:'grey'}}>
            </View>
            <View id='cardDate' style={{width:'22%', height: '100%',borderTopRightRadius: 7, borderBottomRightRadius: 7,  backgroundColor:'white', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>20</Text>
              <Text style={{fontSize: 10}}>OCTOBER</Text>
              <Text style={{fontSize: 10}}>2017</Text>
            </View>
          </View>
          <View id={'thirdHistoryCard'} style={{marginTop:10, backgroundColor: 'white', width: '90%', flexDirection: 'row', height: '20%', borderRadius: 7, alignItems:'center'}}>
            <View id='status' style={{height:'100%', width: '2%',backgroundColor: 'blue',borderTopLeftRadius: 7, borderBottomLeftRadius: 7}}>
            </View>
            <View id='cardBody' style={{width:'75.6%', height: '100%', backgroundColor: 'white', paddingRight: 15, justifyContent:'center'}}>
              <Text style={{fontWeight: 'bold', paddingLeft: 1}}> London, United Kingdom </Text>
              <Text style={{paddingLeft: 1}}> UI/UX Conference </Text>
              <View id='cardInfo' style={{paddingLeft: 2,width: '100%',marginTop: 3, alignItems:'center',height:'30%', flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="calendar" size={14} color="black" />
                  <Text style={{fontSize: 12}}> 5 days</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="user" size={14} color="black" />
                  <Text style={{fontSize: 12}}> 1 person</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Icon name="check" size={14} color="black"/>
                  <Text style={{fontSize: 12}}> Nomination</Text>
                </View>
              </View>
            </View>
            <View id='divider' style={{height:'80%',width:'0.4%',backgroundColor:'grey'}}>
            </View>
            <View id='cardDate' style={{width:'22%', height: '100%',borderTopRightRadius: 7, borderBottomRightRadius: 7,  backgroundColor:'white', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>20</Text>
              <Text style={{fontSize: 10}}>OCTOBER</Text>
              <Text style={{fontSize: 10}}>2017</Text>
            </View>
          </View>
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
