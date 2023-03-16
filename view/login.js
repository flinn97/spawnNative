import React, {Component} from 'react';
import Logo from '../assets/spawnLogo.png';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  TextInput,
  Text, Dimensions,
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
  let styles=state.styles;
  let formStyles= state.formStyles;

  return (
    
    <View style={{ width: styles.width,}}>
      <Image
      source={Logo}
      resizeMode="contain"
      style={{width: styles.width,
       height: undefined, aspectRatio: 1.7, 
      backgroundColor:styles.colors.Color2, alignSelf:"center",
      
      }}
      />
      {/* <Text style={{
      color: styles.colors.Color1, zIndex:2,
      fontFamily:"Title", fontSize:43, marginBottom:22,
      alignSelf:"center", textAlign: "center", resizeMode:"center",
      textAlignVertical: "center",
    }}
    >Login</Text> */}
    <>
      <>
        
        <TextInput placeholder='  Email'
      style={{
        ...formStyles.textField, alignSelf:"center",
         }}
        onChangeText={(text)=>{
          this.setState({
            email:text
          });
        }}
      />
      </>
      <>
      
      <TextInput placeholder='  Password'
        secureTextEntry={true}
          style={{
            ...formStyles.textField,
            alignSelf:"center",}}
            onChangeText={(text)=>{
              this.setState({password:text})
            }}
            type="password"
          />
          </></>
          <TouchableOpacity onPress={this.handleSubmission} 
          style={{ alignSelf:"center", }}>
            <Text style={{...formStyles.buttonPositive, justifySelf:"center", fontSize:20,
            alignSelf:"center", marginTop:styles.margins.marginLg, width:102, 
          }}>Login</Text>
            </TouchableOpacity>
      </View>
  );
}
  
};

