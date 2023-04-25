import topbar from "../assets/spawnLogo.png"
import React, {Component} from 'react';
import Menu1 from '../assets/menu.png';

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
import styleService from "../services/styleService";



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

  let app=this.props.app;
  let state=app?.state;
  let styles=state.styles;

  
  return (

    <View style={{width:"108%", height:117 , position: "absolute", top: 0, flexDirection:"row", alignSelf:"flex-start",
     backgroundColor:styles.colors.Color2, }}>
       <TouchableOpacity style={{width:"100%", height:"100%", marginTop:35, paddingRight:60, }} onPress={this.props.app.dispatch.bind(this, {myswitch: "feed"})}>
        <Image resizeMode="contain" 
      style={{width:"60%" , height:"60%", aspectRatio: 4.61, 
      backgroundColor:styles.colors.Color2, alignSelf:"center"
      
      }} source={topbar}></Image>
        </TouchableOpacity>
              <TouchableOpacity onPress={this.props.menu} 
              style={{position:"absolute", width:50, height:50, right:30, zIndex:600, top: 53}}>
                <Image style={{width:40, height:undefined, aspectRatio:1}} resizeMode="contain" source={Menu1} />
                </TouchableOpacity>

     
    </View>

);
}

};
