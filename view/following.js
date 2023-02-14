
import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Touchable
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class Followin extends Component {
  constructor(props){
    super(props);
    this.state={
      center:{
        display:"flex", justifyContent:"center", alignItems:"center"
      }

    };
  }
render(){
  let app = this.props.app
  let pics = app.state.componentList?.getComponents();
  let switchcase = app.state.switchcase;
  let dispatch = app.dispatch;
  let state = app.state;
  let styles =state.styles;
return (

  <SafeAreaView style={{width:"100%", height:"60%", background:"white", display:"flex", justifyContent:"center", alignItems:"center", marginTop:70}}>
    <ScrollView>
      {pics.map((pic, index)=><View>

      {(pic.getJson().owner===state.currentFollowing.getJson()._id && !pic.getJson().type.includes("keep")) &&(
      <View>
       
        <TouchableOpacity onPress={()=>{
          let list = state.componentList.getList(pic.getJson().type);
          let i = 0
          for(i;i<list.length;i++){
            if(list[i].getJson()._id===pic.getJson()._id){
              break;
            }
          }
        dispatch({index: i, switchcase:pic.getJson().type, myswitch:"feed"})
        }}><Image source={{uri:pic.getJson().picURL}} style={{width:200, height:200}}/></TouchableOpacity>
        </View>
         )} 
         </View>)}</ScrollView>
  </SafeAreaView>

);
}

};