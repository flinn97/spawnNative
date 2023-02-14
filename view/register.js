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
import InputComponent from './inputComponent';
// import Animated, {
//   useSharedValue,
//   withTiming,
//   useAnimatedStyle,
//   Easing,
// } from 'react-native-reanimated';
// import CircularProgress from 'react-native-circular-progress-indicator';

export default class Register extends Component{
  constructor(props){
    super(props);
    this.setPic=this.setPic.bind(this);
    this.createUUID=this.createUUID.bind(this);
    this.handleSubmission=this.handleSubmission.bind(this);
        this.state={
          

    }
  }
  createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substring(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substring((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}

  async setPic(pic, blob){
    let path= "images/" + this.createUUID();
    await this.setState({
      currentPic:pic,
      blob:blob,
      path:path
    })
  }
  
  async handleSubmission()  {
    await this.setState({loading:"loading..."});

    let app=this.props.app;
  let state=app.state;
  let user= await auth.register(this.state.email, this.state.password);
  if(user){

    await auth.uploadPics(this.state.blob, this.state.path);
    state.currentComponent.setJson({...state.currentComponent.getJson(), picURL: this.state.currentPic});
    await state.currentComponent.getPicSrc(this.state.path).then(async ()=>{
      await this.props.app.dispatch({operation:"run", });
      this.setState({
        loaded:"Picture Uploaded",
        loading: "Save"
      })

    })
  }
};


render(){
  let app=this.props.app;
  let state=app?.state;

  return (
    <View>
        <Text>Register</Text>
        {this.state.currentPic&&(<Image  source={{uri:this.state.currentPic}} style={{width:200, height:200,}}/>)}
        <SelectFileComponent setPic={this.setPic} app={this.props.app} />
        <Text>FirstName</Text>
        <InputComponent obj={state.currentComponent} name="firstName" app={app}/>
        <Text>Last Name</Text>
        <InputComponent obj={state.currentComponent} name="lastName" app={app}/>
        <Text>Spawner Handle</Text>

        <InputComponent obj={state.currentComponent} name="spawnerHandle" app={app}/>
        <Text>Bio</Text>

        <InputComponent obj={state.currentComponent} name="bio" app={app}/>
        <Text>Website</Text>

        <InputComponent obj={state.currentComponent} name="website" app={app}/>
        <Text>Social Link URL</Text>

        <InputComponent obj={state.currentComponent} name="socialHandle" app={app}/>
        <Text>Email</Text>

        <InputComponent obj={state.currentComponent} name="email" app={app}/>
        <Text>Password</Text>

        <InputComponent obj={state.currentComponent} name="password" type="password" app={app}/>
        <TouchableOpacity onPress={this.handleSubmission}>
          <Text>Submit</Text>
        </TouchableOpacity>
        

        </View>
  );
}
  
};

