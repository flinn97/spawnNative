import React, {Component} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Login from './login';
import Register from './register';

// import Animated, {
//   useSharedValue,
//   withTiming,
//   useAnimatedStyle,
//   Easing,
// } from 'react-native-reanimated';
// import CircularProgress from 'react-native-circular-progress-indicator';

export default class SignInUp extends Component{
  constructor(props){
    super(props);

        this.state={
          register: false,
          

    }
  }


render(){
  let app=this.props.app;
  let state=app?.state;

  return (
        <View>
          {this.state.register?(<Register app={app}/>):(<Login app={app}/>)}
          <TouchableOpacity
          onPress={()=>{
            if(!this.state.register){
              app.dispatch({operate:"adduser", operatation:"cleanPrepare", object:undefined});
              this.setState({register:true})
            }
            else{
              this.setState({
                register:false
              })
            }
            
          }}
          ><Text>{this.state.register?"Login":"register"}</Text></TouchableOpacity>
        </View>
  );
}
  
};

