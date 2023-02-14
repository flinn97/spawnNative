
import React, {Component} from 'react';
import ViewMedia from './viewMedia';
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



export default class Myspawn extends Component {
  constructor(props){
    super(props);
    this.getPic=this.getPic.bind(this);
    this.state={
      center:{
        display:"flex", justifyContent:"center", alignItems:"center"
      }

    };
  }
  getPic(c){
    let app = this.props.app;
    let state = app.state;
    let pic = c;
    let arr =[]
    if(pic.getJson().picURLs!==undefined){

    
    if(Object.keys(pic.getJson().picURLs)[0]){
      
      for (const key in pic?.getJson().picURLs){
        arr.push(pic?.getJson().picURLs[key]);
      }
    }
    else{
      arr=[pic.getJson().picURL]
    }
  }
    else{
      arr=[pic.getJson().picURL]
    }
    return arr
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

      {(pic.getJson().owner===state.user.getJson()._id && !pic.getJson().type.includes("keep")) &&(
      <View>
        <TouchableOpacity
        onPress={async ()=>{
          await this.props.app.state.componentList.getOperationsFactory().cleanPrepare({update:pic});
          let r =await this.props.app.state.componentList.getOperationsFactory().getUpdater("update");
          
          this.props.app.dispatch({myswitch: "createspawns", currentComponent:r[0], update:true})}}
        ><Text>edit</Text></TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          let list = state.componentList.getList(pic.getJson().type);
          let i = 0
          for(i;i<list.length;i++){
            if(list[i].getJson()._id===pic.getJson()._id){
              break;
            }
          }
        dispatch({index: i, switchcase:pic.getJson().type, myswitch:"feed"})
        }}>
                 <ViewMedia scale={5} media={this.getPic(pic)} />
          {/* <Image source={{uri:pic.getJson().picURL}} style={{width:200, height:200}}/> */}
          </TouchableOpacity>
        </View>
         )} 
         </View>)}</ScrollView>
  </SafeAreaView>

);
}

};