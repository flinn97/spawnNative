import React, {Component} from 'react';
import downArrow from '../assets/right.webp' 
// import Slider from 'react-native-slider';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Switch
} from 'react-native';

export default class DropDownComponent extends Component{
  constructor(props){
    super(props);
        this.state={
          list: this.props.list,
          currentItem: undefined,
          placeHolder: this.props.placeHolder,
          showList: false,
          obj: undefined,
          value: "",
          

    }
  }
  async componentDidMount(){
    if(this.props.obj){
      await this.setState({obj:this.props.obj, value: this.props.obj.getJson()[this.props.name], currentItem:this.props.obj.getJson()[this.props.name]})
    }
  }



render(){
 
  return (
    <View style={{ 
      zIndex:1000
      }}>
      <TouchableOpacity onPress={()=>{this.setState({showList:!this.state.showList})}} style={{borderWidth:1, width:200, height:35, display:'flex', flexDirection:'row', alignItems:"center"}} >
        <Text style={{fontSize:20, marginLeft:10}}>{this.state.currentItem===undefined?this.props.placeHolder:this.state.currentItem}</Text>
      <Image source={downArrow} style={{position:"absolute", right:0, height: 90, transform: [{ rotate: '90deg' }],}}/></TouchableOpacity>
      <View style={{position:"absolute", shadowColor: '#171717', top:35, backgroundColor:'white', width:200, 
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,}}>
      {this.state.showList&&(
        <View style={{backgroundColor:'white', width:"100%"}}>
          {this.state.list.map((item, index)=>
          <TouchableOpacity onPress={()=>{
            this.setState({currentItem:item, showList:false});
            if(this.state.obj){
              this.props.obj.setJson({...this.state.obj.getJson(), [this.props.name]: item})
            }
            if(this.props.handleChange){
              
              this.props.handleChange(item)
            }
          }} key={index}><Text style={{fontSize:20}}>{item}</Text></TouchableOpacity>
          )}
        </View>
      )}
      </View>
 </View>
  );
}
  
};

