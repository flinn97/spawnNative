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
  let formStyles= state.formStyles;
  return (
        <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width:"100%"
        }}>
          {this.state.register?(<>{state?.currentComponent?.getJson()?.type==="user"&&(<Register app={app}/>)}</>):(<Login app={app}/>)}
          <TouchableOpacity
          onPress={async ()=>{
            if(!this.state.register){
              await state.opps.cleanPrepare({adduser:1});
              let user = state.opps.getUpdater("add")[0];
              this.setState({register:true, })
              app.dispatch({currentComponent:user})
            }
            else{
              this.setState({
                register:false
              })
            }
            
          }}
          ><Text style={{...formStyles.buttonPositive, marginTop: styles.margins.marginSm, alignSelf:"center", 
          backgroundColor:styles.colors.White1, color:styles.colors.Color2, width:102, fontSize:16
          }}>{this.state.register?"Login":"Register"}</Text></TouchableOpacity>
        </View>
  );
}
  
};

