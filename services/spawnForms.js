
import styleService from './styleService';

// ANYTHING forms, buttons, etc

class FormService {
    getformstyles() {
let styles = styleService.getstyles();

let formstyles ={
///BUTTONS
            buttonPositive: {
                width: "100%",
                backgroundColor: styles.colors.Color1,
                padding: 6,
                borderRadius: 12,
                color: styles.colors.White1,
                borderWidth:2,
                textAlign: "center",
                textAlignVertical: "center",
                fontFamily: "Bold",
                fontSize:18

            },

///FIELDS
            textField: {
                width:270, height:38, backgroundColor: styles.colors.White1, borderWidth: 1, paddingLeft:2,
             textAlignVertical:"center", marginTop: 22, 
             borderTopColor: styles.colors.White1,
             borderRightColor: styles.colors.White1,
             borderLeftColor: styles.colors.White1,
            borderRadius:7, fontSize:16, color: styles.colors.Grey3, fontFamily: "Regular"
            }

        

        }
        return formstyles;
    }
}

export default new FormService();