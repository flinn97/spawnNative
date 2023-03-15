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
  let styles=state.styles;

  return (
        <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
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
          ><Text style={{...styles.buttonPositive, marginTop: styles.margins.marginSm, alignSelf:"center", 
          backgroundColor:styles.colors.White1, color:styles.colors.Red2, width:84, fontSize:16
          }}>{this.state.register?"Login":"Register"}</Text></TouchableOpacity>
        </View>
  );
}
  
};

