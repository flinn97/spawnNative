
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
  TouchableOpacity,
  Image,
} from 'react-native';
import InputComponent from './inputComponent';



export default class Keep extends Component {
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
        <TouchableOpacity onPress={dispatch.bind(this,{myswitch:"follow"})}><Text>Follow</Text></TouchableOpacity>
        {pics.map((pic, index)=><View>

        {pic.getJson().type.includes("keepmonsters")&&(
        <View>
          
          <TouchableOpacity onPress={()=>{
          let list = state.componentList.getList(pic.getJson().type.substring(4));
          let i = 0
          for(i;i<list.length;i++){
            if(list[i].getJson()._id===pic.getJson().ogref){
              break;
            }
          }
        dispatch({index: i, switchcase:pic.getJson().type.substring(4), myswitch:"feed"})
      }}>
                         <ViewMedia scale={5} media={this.getPic(pic)} />

        {/* <Image source={{uri:pic.getJson().picURL}} style={{width:200, height:200}}/>*/}
        </TouchableOpacity> 
      <View>
        <InputComponent obj={pic} name="note" app={app} />
        <TouchableOpacity
        onPress={()=>{
          state.componentList.getOperationsFactory().cleanPrepareRun({update:pic})
        }}><Text>Submit</Text></TouchableOpacity>
        </View>

          </View>
           )} 
           </View>)}</ScrollView>
    </SafeAreaView>

);
}

};
