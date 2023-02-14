
import React, { Component } from 'react';
import {
  SafeAreaView,
  ScrollView,Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

class Menu extends Component{
  constructor(props) {
    //create state
    super(props);
    this.state = {
        
    };
}
render(){
  let app=this.props.app;
  let state=app.state;
  let dispatch=app.dispatch;
  return(
    
    <View style={{ height:'100%', backgroundColor:'white', width:300, zIndex:700, top:60,left:state.positionSideBar, position:'absolute', paddingTop:50, display:'flex', alignItems:'center' }}>

      
      <View style={{display:'flex', justifyContent:'center',width:235, height:50, borderRadius:8, paddingLeft:20, backgroundColor:state.switchCase==="dash"?'#F4F5F7':'white'}}>
        <TouchableOpacity  onPress={()=>{dispatch({fog:false, positionSideBar:-300, switchCase:"monsters", myswitch:"feed"})}}  style={{  }}><Text style={{color:"black", fontSize:20,}}>Monsters</Text></TouchableOpacity></View>
      <View style={{display:'flex', justifyContent:'center',width:235, height:50, borderRadius:8, paddingLeft:20,  backgroundColor:state.switchCase==="goals"?'#F4F5F7':'white'}}>
        <TouchableOpacity  onPress={()=>{dispatch({fog:false, positionSideBar:-300, switchCase:"heroes",myswitch:"feed"})}}  style={{  }}><Text style={{color:"black", fontSize:20,}}>Heroes</Text></TouchableOpacity></View>
      <View style={{display:'flex', justifyContent:'center',width:235, height:50, borderRadius:8, paddingLeft:20,  backgroundColor:state.switchCase==="practice"?'#F4F5F7':'white'}}>
        <TouchableOpacity  onPress={()=>{dispatch({fog:false, positionSideBar:-300, switchCase:"worlds",myswitch:"feed"})}}  style={{ }}><Text style={{color:"black", fontSize:20,}}>Worlds</Text></TouchableOpacity></View>
      <View style={{display:'flex', justifyContent:'center',width:235, height:50, borderRadius:8, paddingLeft:20,  backgroundColor:state.switchCase==="chat"?'#F4F5F7':'white'}}>
        <TouchableOpacity  onPress={()=>{dispatch({fog:false, positionSideBar:-300, switchCase:"maps",myswitch:"feed"})}}  style={{   }}><Text style={{color:"black", fontSize:20,}}>Maps</Text></TouchableOpacity></View>
      <View style={{wdisplay:'flex', justifyContent:'center',width:235, height:50, borderRadius:8, paddingLeft:20,  backgroundColor:state.switchCase==="tools"?'#F4F5F7':'white'}}>
        <TouchableOpacity  onPress={()=>{dispatch({fog:false, positionSideBar:-300, switchCase:"statblocks",myswitch:"feed"})}}  style={{   }}><Text style={{color:"black", fontSize:20,}}>Statblocks</Text></TouchableOpacity></View>
     
      </View>
  )
}
}
export default Menu;
