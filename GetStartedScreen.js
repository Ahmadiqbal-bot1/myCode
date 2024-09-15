
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { View, Text, Button, ImageBackground, StyleSheet,Image } from 'react-native';

const App = () => {
  return (
    <View>
    <Image source={require('./assets/images/pic7.png')} style={styles.box1}/>
    <Text style={styles.box2}>Cooking</Text>
    <Text style={styles.box3}>Delicious </Text>
    <Text style={styles.box3}>Like a chief</Text>
    
    <TouchableOpacity style={styles.box4}>
      <Text style={styles.textpage1}>Get Started</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  box1:{
height:320,
width:340,
margin:10,
marginTop:40,
borderRadius:10,
  },
  box2:{
    fontSize:50,
marginLeft:30,marginTop:50,
fontWeight:'500'
    
  },
  box3:{
    fontSize:50,
marginLeft:30,
fontWeight:'500',
color:'#a9a9a9'
  },
  box4:{
    height:60,
    width:350,
    backgroundColor:'#696969',
    marginLeft:20,
    marginTop:80,
    borderRadius:30,
  
  },
  textpage1:{
    color:'white',
    textAlign:'center',
    textAlignVertical:'center',
    marginTop:15,
    fontSize:20
  }
 });

export default App;
