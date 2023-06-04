import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './homeScreen/HomeScreen';
import NotificationsScreen from './homeScreen/NotificationsScreen';

export default function HomeStackScreen() {
    const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
        <HomeStack.Screen name="Notifications" component={NotificationsScreen} 
          options={{
            tabBarStyle: { display: "none" },
          }}
        />
    </HomeStack.Navigator>
  )
}