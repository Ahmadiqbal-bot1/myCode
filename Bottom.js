
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { View, Text, Button, ImageBackground, StyleSheet,Image } from 'react-native';
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (

    <Tab.Navigator>

      <Tab.Screen name="Home" component={HomeScreen} 
     options={{
      headerShown:false,
      tabBarLabel: () => null,
      tabBarIcon: ({ color }) => (
        <Ionicons name="compass" size={24} color={color} />
    
      ),
    headerTitle:()=><Text>home</Text>
    }}
       
  
  />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
