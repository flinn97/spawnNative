
import React, {Component} from 'react';
import auth from '../services/auth';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  useColorScheme,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default class Following extends Component {
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
    let state = app.state;
    let styles =state.styles;
    let following = app.state.componentList?.getList("follow");
    let switchcase = app.state.switchcase;
    let dispatch= app.dispatch
  return (

    <View style={{width:"100%", height:"80%", background:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
       {following?.map((f, index)=>
       <View>
        <TouchableOpacity
        onPress={async ()=>{
          let user = await auth.getPicOwner(app.state.componentList, f.getJson().followID);
          dispatch({currentFollowing: user, myswitch: "following"})
        }}><Text>{f.getJson().owner}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={f.unFollow?.bind(this, app.state.componentList)} ><Text>unFollow</Text></TouchableOpacity>
       </View>
       )}
    </View>

);
}

};
