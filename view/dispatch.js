import Nav from './nav';
import Topbar from './topbar';
import Feed from './feed';
import React, {Component} from 'react';
import Menu from './menu';
import Eula from './eula';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Keep from './keep';
import Myspawn from './myspawn';
import Createspawns from './createspawns';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Following from './follow.js';
import ContextMenu from './contextMenu';



export default class Dispatch extends Component {
  constructor(props){
    super(props);
    this.state={
      center:{
        display:"flex", justifyContent:"center", alignItems:"center"
      }

    };
  }
  componentDidMount(){
    if(!this.props.app.state.user.getJson().eula){
      this.props.app.dispatch({popupSwitch:"eula"});
    }
  }
render(){
  let app=this.props.app;
  let state=app?.state;
  let styles=state.styles;

  
  return (
<>
    <View style={{width:styles.width, height:styles.height, backgroundColor:styles.colors.Grey1, display:"flex", padding: 2,
    justifyContent:"center", alignItems:"center"}}>
          {this.props.app.state.popupSwitch==="eula"&&(<Eula app={this.props.app}/>)}

      <Menu app={this.props.app}/>

      {(this.props.app.state.context &&this.props.app.state.contextContent )&&(
      <View style={{position:'absolute', bottom:this.props.app.state.contextBottom, backgroundColor:styles.colors.Red2, zIndex:500, width:"95%"}}>
      <ContextMenu app={this.props.app} content={this.props.app.state.contextContent} user={this.props.app.state.user} reportUser={this.props.app.state.reportUser} name={this.props.app.state.contextContent.getJson().picURL!==""? "picURL":"picURLs"}/>
    </View>
    )}
        <Topbar menu={this.props.menu} app={this.props.app}/>
        {this.props.app.state.myswitch==="feed" && (<Feed app={this.props.app}/>)} 
        {this.props.app.state.myswitch==="follow"&&(<Following app={this.props.app}/>)}
        {this.props.app.state.myswitch==="keep" && (<Keep app={this.props.app}/>)} 
        {this.props.app.state.myswitch==="myspawns" && (<Myspawn app={this.props.app}/>)}
        {this.props.app.state.myswitch==="createspawns" && (<Createspawns app={this.props.app}/>)}
        
        
        <Nav app={this.props.app}/> 
    </View>     
    </>
);
}

};
