import {
     Dimensions
  } from 'react-native';


class styleService {
    getstyles() {

        let stylecolor = {
            
                ///colors
                colorRed: "#EF3E23",
                colorRed2: "#A80303",
                colorBlue: "#491778",
                colorPurple: "#491778",
                ///greyscales
                colorWhite: "#FBFFFF",
                colorBlack: "#161616",
                colorLightG: "#F2F2F2",
                colorMidG: "#D8D9DA",
                colorDarkG: "#2e2e2e",
        
    };
        let styles = {
            
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height,

            colors: {
            ///colors
                Red1: stylecolor.colorRed,
                Red2: stylecolor.colorRed2,
            ///greyscales
                White1:stylecolor.colorWhite,
                Black1: stylecolor.colorBlack,
                Grey1: stylecolor.colorLightG,
                Grey2: stylecolor.colorMidG,
                Grey3: stylecolor.colorDarkG,
            ///font settings
                darkFontColor: stylecolor.colorBlack,
                lightFontColor: stylecolor.colorDarkG,
                linkFontColor: stylecolor.colorPurple,
                linkVisitedColor: stylecolor.colorPurple,
            },

            shadows: {
            /// h-offset v-offset blur spread color
                sideShadow: "1px 10px 30px -2px "+ stylecolor.colorLightG,
                homeShadow: "0px 0px 30px white",
            },

            margins: {
                marginSm: 12,
                marginMd: 18,
                marginLg: 22,
                marginXl: 30,
            },

            fonts:{
                fontNormal: "Inria",
                fontBold: "Bold",
                fontItalic: "Italic",
                fontLight: "Light",
                fontTitle: "Title",

            },

///BUTTONS
            buttonPositive: {
                width: "100%",
                backgroundColor: stylecolor.colorRed,
                padding: 6,
                borderRadius: 12,
                color: stylecolor.colorWhite,
                borderWidth:2,
                textAlign: "center",
                textAlignVertical: "center",
                fontFamily: "Bold",
                fontSize:18

            },

///FIELDS
            textField: {
                width:270, height:38, backgroundColor: stylecolor.colorWhite, borderWidth: 1, paddingLeft:2,
             textAlignVertical:"center", marginTop: 22, 
             borderTopColor: stylecolor.colorWhite,
             borderRightColor: stylecolor.colorWhite,
             borderLeftColor: stylecolor.colorWhite,
            borderRadius:7, fontSize:16, color: stylecolor.colorDarkG, fontFamily: "Regular"
            }

        }
        return styles;
    }
}

export default new styleService();