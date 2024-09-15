
import React, { useState ,useRef } from 'react';
import { View, Text, FlatList, StyleSheet,Image, ImageBackground, TouchableOpacity,TextInput ,ScrollView,Dimensions} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import destination4 from './assets/Component/Destination4';


const { width } = Dimensions.get('window'); // Screen width

const Food = () => {
   
    const [activeIndex, setActiveIndex] = useState(0); // Keep track of the active image
    const scrollViewRef = useRef();
    const onScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const activePage = Math.floor(scrollPosition / width);
        setActiveIndex(activePage); // Update the active dot based on the scroll position
      };
  return (
    <View>
         <ScrollView    ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll} // Trigger the scroll handler
        scrollEventThrottle={16}  contentContainerStyle={{gap:20,marginBottom:10,paddingVertical:10}}>

 {destination4.map((item,index)=>(
    
<Image source={item.image} style={styles.box1}/>

 ))}
 </ScrollView>

 <View style={styles.dotContainer}>
        {destination4.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              activeIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
      <Text style={styles.box2}>Savor the Aromas:Equisite Exotic spicic Infusin Rice Bowl</Text>
      <View style={{marginLeft:20,flexDirection:'row'}}>
        <Text style={{color:'#a9a9a9',fontSize:15,marginTop:6}}>By</Text>
        <Text style={{fontSize:15,marginLeft:4,marginTop:6}}>Ahmad mughal</Text>
      </View>
      <View style={{flexDirection:"row",marginTop:20,marginLeft:10}}>
        <MaterialCommunityIcons name='clock-outline' size={23} style={{marginLeft:10}}/>
        <Text style={{fontSize:17,fontWeight:'500'}}>Time</Text>
        <MaterialCommunityIcons name='stadium' size={20} style={{marginLeft:40}}/>
        <Text style={{marginLeft:5}}>Ingredemnts</Text>
        <FontAwesome name='home' size={20} style={{marginLeft:40}}/>
        <Text style={{marginLeft:5}}>Serving</Text>
      </View>
      <Text style={{fontSize:17,margin:20,color:'#a9a9a9'}}>
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English
      </Text>
      <TouchableOpacity style={styles.box3}>
        <Text style={{textAlign:'center',marginTop:17,fontSize:18,color:"white"}}>Start Cooking</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  box1:{
    height:200,
    width:240,
    marginLeft:10,
    marginTop:40
  },
  dotContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
    marginLeft:150,
    
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 5,
    margin: 5,
    
  },
  activeDot: {
    backgroundColor: 'blue',
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
  box2:{
    fontSize:24,
    marginLeft:20,
    fontWeight:'600',
   
  },
  box3:{
  height:60,
  width:280,
  backgroundColor:'#696969',
  marginLeft:40,
  borderRadius:60
  }
});

export default Food;
