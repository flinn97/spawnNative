
import React from 'react';
import Swiper from 'react-native-swiper'
import Swipeable from 'react-native-gesture-handler/Swipeable';
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
  Animated
  
} from 'react-native';




const ListItem = (props) => {
  let app = props.props.app;
  let state= app.state;
  let comp = state.componentList;
  let component = comp.getComponentForSwipe("monsters");

  
  const rightSwipeActions = () => {
    let c = comp.getComponentForSwipe("monsters");
    return (
      // <View
      // style={{
      //   paddingHorizontal: 100,
      //   paddingVertical: 100,
      //   backgroundColor: 'pink',
      // }}
      // >
      // </View>
      <Image style={{width:500, height:450 }} source={{uri:c?.getJson().picURL}}/>
    );
  };
  
  const LeftSwipeActions  = () => {
    return (
      <View
      style={{
        paddingHorizontal: 100,
        paddingVertical: 100,
        backgroundColor: 'pink',
      }}
      >
      </View>
    );
  };
  return(

    
  <Swipeable
    renderLeftActions={LeftSwipeActions}
    renderRightActions={rightSwipeActions}
    // onSwipeableRightOpen={swipeFromRightOpen}
    // onSwipeableLeftOpen={swipeFromLeftOpen}
  >
    <Image style={{width:500, height:450 }} source={{uri:component.getJson().picURL}}/>
  </Swipeable>
  )
};

export default  MappedPics=(props)=>{
 

  return (

    <View style={{width:"100%", height:"100%", background:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
       <ListItem props={props} />      
       </View>

    
    

);
}

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
//<Swiper 
//       style={styles.wrapper}
//       showsPagination={false}
//       // renderPagination={renderPagination}
//       loop={true}
//     >
//       {state.componentList.getList('monsters').map((picc, index)=>
//       <View><Image style={{width:'100%', height:450 }} source={{uri:picc.getJson().picURL}}/>
// <View>
//   <TouchableOpacity onPress={picc.keep.bind(this, state.user)}>
//       <Text>{picc.getJson().keep}Keep</Text>
//       </TouchableOpacity>

    

//        <TouchableOpacity onPress={picc.like.bind(this, state.user)}>
//            <Text>{picc.getJson().like}Like</Text>
//            </TouchableOpacity>
//            </View>
//            </View>
           
//       )}
     
      
//     </Swiper>
    
        
            
         
    //     <TouchableOpacity onPress={()=>{
    //      let monsters= state.componentList.getList('monsters');
    //      let index = state.index+1;
    //      let monster = monsters[index];
    //      let nextMonster = monsters[index+1]
    //      app.dispatch({pic:monster, index:index, nextPic:nextMonster})

    //     }} >
    //       <View style={{background:"teal", height: "60%", width: "80%", marginRight:this.state.marginRight}}>
    //       

    // </View>
    // </TouchableOpacity>

// const renderPagination = (index, total, context) => {
//   return (
//     <View style={styles.paginationStyle}>
//       <Text style={{ color: 'grey' }}>
//         <Text style={styles.paginationText}>{index + 1}</Text>/{total}
//       </Text>
//     </View>
//   )
// }