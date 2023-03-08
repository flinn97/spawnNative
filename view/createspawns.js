import React, {Component} from 'react';
import ViewMedia from './viewMedia';
import auth from '../services/auth';
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

// import Animated, {
//   useSharedValue,
//   withTiming,
//   useAnimatedStyle,
//   Easing,
// } from 'react-native-reanimated';
// import CircularProgress from 'react-native-circular-progress-indicator';

// import SelectFileComponent from './selectFileComponent';
import DropDownComponent from './dropdownComponent';
import InputComponent from './inputComponent';
export default class Createspawns extends Component{
  
  constructor(props){
    super(props);
    this.setPic=this.setPic.bind(this);
    this.handleSubmission=this.handleSubmission.bind(this);
    this.handleChange = this.handleChange.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.wrapperRef = React.createRef();
        this.setWrapperRef = this.setWrapperRef;
        this.state={
          percent: "",
          currentPic: undefined,
          blob: undefined,
          loading:"Save",
          paths: [],
          newPics:[],
          list:[],
          
          loaded: "",
          name: "",
          type: ""
          

    }
  }

  async setPic(pic, blob){
    
    await this.setState({
      currentPic:pic,
      blob:blob,
    })
    this.changeHandler();
  }
  changeHandler = async () => {
    if(this.state.list.length<5){
    
    let list = [...this.state.newPics];
    let paths = [...this.state.paths];
    let oldList=[...this.state.list, this.state.currentPic];

   
                var fileOfBlob = this.state.blob;
                let path= "media/" + this.createUUID();
                // let path = "media/" +fileOfBlob.name;
                list.push(fileOfBlob);
                paths.push(path);
                this.setState({newPics:list, paths:paths, list:oldList, showPics:true});
        
    }
  
};
async handleSubmission()  {
    
    await this.setState({loading:true});
    let list = [...this.state.newPics];
    for(const key in list){
        await auth.uploadPics(list[key], this.state.paths[key]);

    }
   

    
    let component = this.props.app.state.currentComponent
    component.setJson({...component.getJson(), owner:this.props.app.state.user.getJson()._id})
    await component.getPicSrc([...this.state.paths]);

    if(this.props.app.state.uploadKey==="update"){
        let li = Object.values(component.getJson().picURLs);
        let obj={}
        for(const key in li){
            if(!this.state.delList.includes(li[key])){
                obj["media"+component.createUUID(3)]= li[key];

            }
        }
        component.setJson({...component.getJson(), picURLs:obj})
    }
    



    await component.getOperationsFactory().run();
    await this.setState({loading:false});


    this.props.app.dispatch({ myswitch: "feed", pic: component, newSpawn: false, switchcase:component.getJson().type })
    
    
    

};
handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
        [name]: value,
    })
}

componentDidMount() {
    
//     let name=Object.keys(this.props.app.state.currentComponent?.getJson().picURLs).length!==0? "picURLs": "picURL";
//     let obj = this.props.app.state?.currentComponent;
//     let uploads = obj.getJson()[name];
//     if(uploads!==""){
//     let items = Object.prototype.toString.call(uploads) === "[object String]"? [uploads]: Object.values(uploads);;
//     let list = []
//     for(const key in items){
//         list.push(items[key]);
//     }
//     this.setState({list:list});
// }
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

//   async handleSubmission()  {
//     await this.setState({loading:"loading..."});

//     let app=this.props.app;
//   let state=app.state;

//     await auth.uploadPics(this.state.blob, this.state.path);
//     state.currentComponent.setJson({...state.currentComponent.getJson(), picURL: this.state.currentPic});
//     await state.currentComponent.getPicSrc(this.state.path).then(async ()=>{
//       await this.props.app.dispatch({operation:"cleanPrepareRun", object: state.currentComponent, operate:state.update?"update":"add", update:false});
//       this.setState({
//         loaded:"Picture Uploaded",
//         loading: "Save"
//       })

//     })
    
    
//     // this.props.app.dispatch({myswitch:"feed"})

// };


render(){
  let app = this.props.app;
  let state=app.state;
  let dispatch= app.dispatch;
  


  // const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: "white",//isDarkMode ? Colors.darker : Colors.lighter,
    height:"100%",
    
    width:'100%',
    display:'flex',
    alignItems:"center",
    
    position:'absolute',
    top:60,
    zIndex:1000
    
    
  };
 
  return (
    <View style={backgroundStyle}>
      
      <TouchableOpacity onPress={()=>{this.props.app.dispatch({myswitch:"feed"})}} style={{position:'absolute', top:30, right:30, zIndex:1003}}><Text>X</Text></TouchableOpacity>
    <View  style={{ position:'absolute', width:'100%', height:'100%', backgroundColor:'grey', opacity:.7, zIndex:1001 }}>
 </View>
 <View style={{width:'90%', height:'85%', marginTop:20, backgroundColor:"white", zIndex:1002, display:'flex', alignItems:'center', paddingTop:75}}>
 <ViewMedia scale={3} removeMedia={(obj)=>{
  let list= [...this.state.list];
  let delList=[...this.state.delList];
  delList.push(obj.content);
  list.splice(obj.index, 1);
  this.setState({list:list, delList});
 }} editable={true} media={[...this.state.list]} />
 {/* {this.state.currentPic&&(<Image  source={{uri:this.state.currentPic}} style={{width:200, height:200,}}/>)} */}
  {/* <SelectFileComponent setPic={this.setPic} app={this.props.app} /> */}
  <DropDownComponent list={['monsters', 'heroes', 'worlds', 'maps', 'statblocks']} obj={state.currentComponent} name="type" app={app} />
  <InputComponent obj={state.currentComponent} name="name" app={app} />
  <InputComponent obj={state.currentComponent} name="destinationURL" app={app} />
   {this.state.loaded.includes('Pic')&&(<Text>Picture Uploaded</Text>)}<TouchableOpacity onPress={this.handleSubmission} style={{position:"absolute", bottom:0, width:75, height:30, backgroundColor:'#6C86F4', borderRadius:25, display:'flex', alignItems:'center', justifyContent:"center", marginTop:20, marginBottom:20}}>
    <Text style={{color:'white'}}>{this.state.loading}</Text></TouchableOpacity>
 </View>
 </View>

  );
}
  
};

