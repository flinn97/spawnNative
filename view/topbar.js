import topbar from "../assets/icon.png"
import React, {Component} from 'react';
import Menu1 from '../assets/menu-1.png';

import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';



export default class Topbar extends Component {
  constructor(props){
    super(props);
    this.state={
      center:{
        display:"flex", justifyContent:"center", alignItems:"center"
      }

    };
  }
render(){
  return (

    <View style={{width:"100%", height: 85 , position: "absolute", top: 40, ...this.state.center,}}>
              <TouchableOpacity onPress={this.props.menu} style={{position:"absolute", width:50, height:50, right:10, zIndex:100000}}><Image style={{width:40, height:40}} source={Menu1} /></TouchableOpacity>

      <TouchableOpacity style={{width:"100%", height:"100%", ...this.state.center}} onPress={this.props.app.dispatch.bind(this, {myswitch: "feed"})}>
        <Image style={{width:"50%", height: "100%", }} source={topbar}></Image>
        </TouchableOpacity>
    </View>

);
}

};
