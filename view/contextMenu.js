import React, {Component} from 'react';
import downArrow from '../assets/right.webp'

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
} from 'react-native';

//details my existingEmail.js component. creates some buttons that use methods embedded in props from the profile page. Choice will update the backend.
class ContextMenu extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }

    };
 
    

    render() {
        let app=this.props.app;
        let state=app.state;
        let dispatch=app.dispatch;
        let styles= state.styles;
        let formStyles= state.formStyles;

        const backgroundStyle = {
          backgroundColor: styles.colors.White1,//isDarkMode ? Colors.darker : Colors.lighter,
          height:190,
          marginBottom:-110,
          width:'100%',
          borderRadius:25,
          display:'flex',
          borderWidth:2,
          borderColor:styles.colors.Color2,
          alignItems:'flex-start',
          padding:styles.margins.marginMd,
          zindex:500
          
        };
        return ( 
            
                <View style={backgroundStyle}>
                <TouchableOpacity onPress={()=>{app.dispatch({fog:false, contextBottom:-500, context:false})}} style={{  zIndex:600, position:"absolute", right:10, top:10 }}>
                  <Image style={{...formStyles.buttonClose, transform: [{ rotate: '90deg' }],}} resizeMode="contain" source={downArrow}/>
                  </TouchableOpacity>
                <TouchableOpacity style={{fontSize:20, fontFamily:styles.fonts.fontBold, }} onPress={()=>{
                    
                    this.props.user.block({userID: this.props.content.getJson().owner, contentID: this.props.content.getJson()._id});
                    dispatch({popupSwitch:"blocked"})

                }}>
                     <Text style={{fontSize:20, fontFamily:styles.fonts.fontBold, }}>Block </Text>
                     </TouchableOpacity>

                 <TouchableOpacity  style={{marginTop:20}} onPress={()=>{
                    
                    this.props.user.hide({contentID: this.props.content.getJson()._id, content: this.props.content.getJson()[this.props.name]});
                    dispatch({popupSwitch:"hide"})

                }}><Text style={{fontSize:20, fontFamily:styles.fonts.fontBold, }}>Hide</Text></TouchableOpacity>

                <TouchableOpacity  style={{marginTop:20}}  onPress={async ()=>{
                  this.props.user.report({userReported:this.props.reportUser, contentID: this.props.content.getJson()._id});
                  dispatch({popupSwitch:"report"})
                }}><Text style={{fontSize:20, fontFamily:styles.fonts.fontBold, }}>Report</Text></TouchableOpacity>
               

                    

                </View>
                
        

            )
    }
};
export default ContextMenu;