
import React, {Component} from 'react';
import SwipeRender from "react-native-swipe-render";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import auth from '../services/auth';
import ViewMedia from './viewMedia';
import LikeHeart from '../assets/like_grey.png';
import Keep from '../assets/keep_grey.png';

const { width } = Dimensions.get('window')
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,Dimensions,
  View,
  
  
} from 'react-native';
import MappedPics from './mappedPics';



export default class Feed extends Component {
  constructor(props){
    super(props);
    this.getPic=this.getPic.bind(this);
    this.state={
      center:{
        display:"flex", justifyContent:"center", alignItems:"center"
      },
      marginRight:0

    };
  }

  getPic(c){
    let app = this.props.app;
    let state=app?.state;
    
    let pic = c;
    let arr =[]
    if(pic.getJson().picURLs!==undefined){

    
    if(Object.keys(pic.getJson().picURLs)[0]){
      
      for (const key in pic?.getJson().picURLs){
        arr.push(pic?.getJson().picURLs[key]);
      }
    }
    else{
      arr=[pic.getJson().picURL]
    }
  }
    else{
      arr=[pic.getJson().picURL]
    }
    return arr
  }
  
render(){
  let app = this.props.app;
  let state=app.state;
  let styles=state.styles;
    let formStyles= state.formStyles;
  let dispatch=app.dispatch
  let pic = state?.pic?.getJson().picURL;
  let comps = state.componentList.getList("monsters");
  
  return (
    <View style={{width:"100%", height:"80%", padding: 8,
    background:styles.colors.White1, display:"flex", justifyContent:"center", 
    alignItems:"center", marginTop:77,}}>
      {state.pic&&(
        <View style={{width:"100%", height:600,}}>
        <SwipeRender style={{ backgroundColor:'#00000000'}} 

      index={state.index}
      
      enableAndroidViewPager={false}
      
      horizontal={true}
        >

          
            {state.componentList.getList(state.switchCase).map((c, index)=>

            <View key={"SwipeRender-slide#" + index} style={ {backgroundColor: "#00000000", width:"100%", }}>
              {!Object.keys(state.user.getJson().blocked).includes(c.getJson().owner) && !Object.keys(state.user.getJson().hidden).includes(c.getJson()._id)&&(
              <View style={{width:"100%", height:"100%",}}>
              <TouchableOpacity  resizeMode="contain" style = {{height:400, width:"100%", }} onLongPress={async ()=>{
                let reportUser = await state.componentList.getComponent("user", c.getJson().owner);

                app.dispatch({contextContent:c, reportUser: reportUser, context: true});
              }}>
                 <ViewMedia  resizeMode="contain" scale={10} media={this.getPic(c)} />
            {/* <Image style={{ width:"100%", height:450 }} source={{uri:c?.getJson().picURL}}/> */}
            </TouchableOpacity>
<View style={{height:44}}></View>

             <View style={{backgroundColor:styles.colors.Grey1, borderTopWidth:2,
              borderColor:styles.colors.Color2, flexDirection:"row", width:"100%", alignSelf:"center", 
              padding:11, borderLeft:'#00000000', borderRadius:6, borderRightColor:'#00000000'
               }}>
              

      <TouchableOpacity onPress={c.keep.bind(this, state.user)} style={{display: "flex", flexDirection:"row", height: 52,}}>
       <Text style={{
       fontFamily: styles.fonts.fontBold, fontSize:20,
                       backgroundColor: "", marginRight: -5, 
          }}>{c.getJson().keep} </Text>
       <Image source={Keep}  resizeMode="contain" style={{...styles.icon2, }} />
       </TouchableOpacity>


       <TouchableOpacity onPress={c.like.bind(this, state.user)} style={{display: "flex", flexDirection:"row", height: 52,}}>
           <Text style={{fontFamily: styles.fonts.fontBold,
                         backgroundColor: "", fontSize:20,
          }}>{c.getJson().like} </Text>
           <Image source={LikeHeart} resizeMode="contain" style={{...styles.icon2}} />
           </TouchableOpacity>

           <TouchableOpacity
           style={{flex:2, marginLeft:64, alignSelf:"center"}}
              onPress={async() => {
                let complist = app.state.componentList.getList("follow");
              let arr = [];
               for(const key in complist){
                arr.push(complist[key]?.getJson().followID);
               }
               if(!arr.includes(app.state.picOwner?.getJson()._id)){
                let picOwner= await auth.getPicOwner(state.componentList, c.getJson().owner);

                app.state.user?.follow(picOwner)
               }
               }}
              ><Text 
              style={{...formStyles.buttonPositive, fontFamily: styles.fonts.fontBold, width:"100%", alignSelf:"flex-end"}}
              >Follow</Text>
              </TouchableOpacity>


           </View>
           </View>)}
        </View>
    
            )}
            
        </SwipeRender>
        </View>

    )}
    
    </View>

);
}

};

const styles = {
  wrapper: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:270,
     height:500
  },
  slide: {
    flex: 1,
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width,
    flex: 1
  },
  paginationStyle: {
    display:'flex',
    justifyContent: 'center',
    alignItems:'center',
    // position: 'absolute',
    
  },
  paginationText: {
    color: 'white',
    fontSize: 20
  }
}