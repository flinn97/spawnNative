import React, {Component} from 'react';
import {Button, SafeAreaView, StatusBar, StyleSheet, Text,TouchableOpacity} from 'react-native';
// import DocumentPicker, {types} from 'react-native-document-picker';
import * as ImagePicker from 'expo-image-picker';

export default class SelectFileComponent extends Component {
constructor(props){
  super(props);
  this.addImage=this.addImage.bind(this);
  this.handleImagePicked = this.handleImagePicked.bind(this);
  this.uploadImageAsync=this.uploadImageAsync.bind(this);
  this.state={
    uploading:false
  }
}

  addImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });
    this.handleImagePicked(pickerResult);
  };

  handleImagePicked = async (pickerResult) => {
    try {

      if (!pickerResult.cancelled) {
        
        const uploadUrl = await this.uploadImageAsync(pickerResult.uri);
        
      }
    } catch (e) {
      console.log(e);
    }
    
  };

async uploadImageAsync(uri) {
  
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662
  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  // console.log("blob", blob);
  this.setState({ uploading: false });
  const fileReaderInstance = new FileReader();
  fileReaderInstance.readAsDataURL(blob); 
  fileReaderInstance.onload = async () => {
      base64data = fileReaderInstance.result;   
      this.props.setPic(base64data, blob);        
  }
  
  // const fileRef = ref(getStorage(), uuid.v4());
  // const result = await uploadBytes(fileRef, blob);

  // // We're done with the blob, close and release it
  

  // return await getDownloadURL(fileRef);
}

render(){
  let app=this.props.app;
  let state=app.state;
  let currentstudent=state.currentstudent;

 
  return (
    <TouchableOpacity style={{marginTop:100, width:200, height:50, backgroundColor:'#6C86F4', borderRadius:25, display:'flex', alignItems:'center', justifyContent:"center", }} onPress={this.addImage}><Text style={{color:'white', fontSize:28}}>Upload Photo</Text></TouchableOpacity>
  );
}
}