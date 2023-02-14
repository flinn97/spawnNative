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
import auth from '../services/auth';


export default class Login extends Component{
  constructor(props){
    super(props);
    
   this.handleSubmission=this.handleSubmission.bind(this);
        this.state={
          email: this.props.email,
          password: this.props.password
          

    }
  }

async handleSubmission(){
  let user= await auth.login(this.state.email, this.state.password, this.props.app.state.componentList);
  if(user){
    this.props.app.dispatch({
      user:user, email:this.state.email
    })
  }
}

render(){
  let app=this.props.app;
  let state=app?.state;

  return (
    <View>
      <Text>Spawn Login</Text>
        <TextInput
      style={{width:this.props.width? this.props.width:200, height:30, backgroundColor:this.props.backgroundColor, borderWidth: !this.props.border?1:0, borderRadius:7,  marginLeft:this.props.center?10:0, fontSize:this.props.fontSize, color:this.props.color}}
        onChangeText={(text)=>{
          this.setState({
            email:text
          });
        }}
      />
      <TextInput
        secureTextEntry={true}
          style={{borderColor:"black", borderWidth :1, borderRadius:7, width:250, height:40, marginTop:7}}
            onChangeText={(text)=>{
              this.setState({password:text})
            }}
            type="password"
          />
          <TouchableOpacity onPress={this.handleSubmission}><Text>Login</Text></TouchableOpacity>
      </View>
  );
}
  
};

