import keep from "../assets/keep.png";
import spawn from "../assets/spawnPic.png";
import profile from "../assets/HeroSpawn.png";
import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import styleService from "../services/styleService";



export default class Nav extends Component {
  constructor(props){
    super(props);
    this.state={
      center:{
        display:"flex", justifyContent:"center", alignItems:"center"
      }

    };
  }
render(){
  let app = this.props.app;
    let state=app.state;
    let styles=state.styles;
      let formStyles= state.formStyles;
  return (
    <View style={{position: "absolute", width:styles.width, borderTopWidth:2, borderTopColor:styles.colors.Grey2,  height:110, 
    backgroundColor:styles.colors.Color2, bottom: 0, display: 'flex', paddingLeft:"10%", paddingRight:"10%",
    flexDirection:'row', justifyContent: "space-between"}}>
      
       <TouchableOpacity onPress={this.props.app.dispatch.bind(this, {myswitch: "myspawns"})}
       style={{flexDirection: "column", justifyContent:"center", alignItems:"center"}}>
       <Image source={profile} resizeMode="contain" style={{...styles.icon}}/>
       <Text style={{fontFamily:styles.fonts.fontBold, fontSize:18, color:styles.colors.Grey1}}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={async ()=>{
        await this.props.app.state.componentList.getOperationsFactory().cleanJsonPrepare({addpic:{owner:this.props.app.state.user.getJson()._id}});
        let r =await this.props.app.state.componentList.getOperationsFactory().getUpdater("add");
        
        this.props.app.dispatch({myswitch: "createspawns", currentComponent:r[0]})}}
        style={{flexDirection: "column", justifyContent:"center", alignItems:"center"}}>
        <Image source={spawn} resizeMode="contain" style={{...styles.icon, width:51}}></Image>
        <Text style={{fontSize:19, fontFamily: styles.fonts.fontTitle, position: "absolute", bottom: 31, left: 66, color: styles.colors.White1}}>+</Text>
        <Text style={{fontFamily:styles.fonts.fontBold, fontSize:18, color:styles.colors.Grey1}}>New Spawn</Text>
      </TouchableOpacity>

        <TouchableOpacity onPress={this.props.app.dispatch.bind(this, {myswitch: "keep"})}
        style={{flexDirection: "column", justifyContent:"center", alignItems:"center"}}>
        
          <Image source={keep} resizeMode="contain" style={{...styles.icon}}/>
          <Text style={{fontFamily:styles.fonts.fontBold, fontSize:18, color:styles.colors.Grey1}}>Keep</Text>
        </TouchableOpacity>
    </View>

);
}

};
