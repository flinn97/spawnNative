import keep from "../assets/keep.png"
import spawn from "../assets/spawnLogo.png"
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
  return (

    <View style={{width:"100%",borderWidth:1, borderColor:'black',  height:100, background:"white", position: "absolute", bottom: 0, display: 'flex', flexDirection:'row', justifyContent: "space-between"}}>
      <TouchableOpacity onPress={async ()=>{
        await this.props.app.state.componentList.getOperationsFactory().cleanJsonPrepare({addpic:{owner:this.props.app.state.user.getJson()._id}});
        let r =await this.props.app.state.componentList.getOperationsFactory().getUpdater("add");
        
        this.props.app.dispatch({myswitch: "createspawns", currentComponent:r[0]})}}>
        <Image source={spawn}></Image>
      </TouchableOpacity>
       <TouchableOpacity onPress={this.props.app.dispatch.bind(this, {myswitch: "myspawns"})}><Text>Profile</Text></TouchableOpacity>
        <TouchableOpacity onPress={this.props.app.dispatch.bind(this, {myswitch: "keep"})}>
        
          <Image source={keep} />
        </TouchableOpacity>
    </View>

);
}

};
