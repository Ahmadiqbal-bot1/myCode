
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet,Image, ImageBackground, TouchableOpacity,TextInput ,ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Ionicons, MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';
import destination2 from './assets/Component/Destination2';
import destination3 from './assets/Component/Destination3';

const HomeScreen = (props) => {

  
  const[selectedIndex,setreadio]= useState(null); 
  const handleSelect = (option) => {
    setreadio(option);
  }; 
  return (
    <View>
      <View style={{flexDirection:'row',marginLeft:20,marginTop:40}}>
<MaterialCommunityIcons name='menu' size={25}/>
<FontAwesome name='map-marker' style={{marginLeft:100,marginRight:5,marginTop:7}} color={'orange'} size={20}/>
<Text style={{fontSize:17,marginTop:7}}>172 Grand St</Text>
<MaterialCommunityIcons name='bell-outline' size={26} style={{marginLeft:90}}/>
      </View>
<View style={{marginTop:25}}>
<ImageBackground source={require('./assets/images/pic13.png')} style={styles.box11}>
<Text style={styles.box12}>New recipe</Text>
<Text style={styles.box13}>Chicken karahi $20</Text>
<TouchableOpacity style={styles.box14} onPress={()=>props.navigation.navigate('Food')}>
  <Text style={{textAlign:'center',textAlignVertical:'center',marginTop:5}}>
    Order Now
  </Text>
</TouchableOpacity>

</ImageBackground>
</View>

<View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', height: 45, width: 290, backgroundColor: '#f5f5dc', margin: 20, borderRadius: 4,marginTop:30 }}>
            <FontAwesome name='search' size={25} color={'#a9a9a9'} style={{ padding: 10 }} />
            <TextInput placeholder='search place' style={{ padding: 10 }} />
          </View>
          <Ionicons name='options' size={30} style={{ marginTop: 30 }} />
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:20,marginBottom:10,paddingVertical:10}}>
        {destination2.map((item,index)=>(
          <TouchableOpacity key={index} 
          style={[
            styles.box7,
            { backgroundColor: selectedIndex === index ? 'orange' : 'white' }
          ]}
          onPress={() => handleSelect(index)} >
           <Image source={item.image} style={styles.image}/>
            <Text style={{marginLeft:5}}>{item.title}</Text>
          </TouchableOpacity>
      
      
      
        ))
        }
        </ScrollView>
      <FlatList
        data={destination3}
        horizontal
        contentContainerStyle={{gap:20,marginBottom:10,paddingVertical:10}}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ImageBackground source={item.image} style={styles.background}>
          <View style={{backgroundColor:'rgba(0, 1, 0.5,0.6)',height:70,marginTop:180}} >
            <Text style={styles.recipeTitle}>{item.title}</Text>
            <Text style={{marginLeft:10,color:'white'}}>{item.title2}</Text>
            <Image />
            <Text style={{marginLeft:10,color:'white'}}>{item.time} - {item.ingredients}</Text>
          </View>
          </ImageBackground>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  recipeCard: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    marginVertical: 8,
    borderRadius: 8,
  },
  recipeTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color:'white',
    marginLeft:5
  },
  box11:{
    height:150,
    width:340,
    marginLeft:20,
    borderRadius:50,
    marginTop:10
  },
  box12:{
    color:'white',
    fontSize:20,
    marginLeft:10,
    marginTop:20
  },
  box13:{
    color:'white',
    marginLeft:10
  },
  box14:{
    backgroundColor:'white',
    height:36,width:110,
    marginLeft:10,
    marginTop:20,
    borderRadius:20
  },
  image:{
   height:50,
   width:70,
   borderRadius:10,
   marginLeft:5
  },
  background:{
    height:250,
    width:220,
    marginLeft:10
  }
});

export default HomeScreen;
