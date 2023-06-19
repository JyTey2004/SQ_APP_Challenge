import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './homeScreen/HomeScreen';
import NotificationsScreen from './homeScreen/NotificationsScreen';
import LoginScreen from './homeScreen/LoginScreen';
import CountrySelectionScreen from './homeScreen/CountrySelectionScreen';
import SearchScreen from './homeScreen/SearchScreen';
import FlightDeals from './homeScreen/FlightDeals';
import FreeFlights from './homeScreen/FreeFlights';
import LocalHighlights from './homeScreen/LocalHighlights';
import MerchantPage from './merchantScreen/MerchantScreen';
import MerchantItemScreen from './merchantScreen/MerchantItemScreen';
import BuyItemScreen from './cartScreen/BuyItemScreen';
import ItemCart from './cartScreen/ItemCart';

export default function HomeStackScreen() {
    const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Group>
        <HomeStack.Screen name="HomeScreen" component={HomeScreen}  options={{headerShown: false}}/>    
        <HomeStack.Screen name="Notifications" component={NotificationsScreen}/>
        <HomeStack.Screen name='Search' component={SearchScreen}/>
        <HomeStack.Screen name='FlightDeals' component={FlightDeals} options={{headerShown: false}}/>
        <HomeStack.Screen name='FreeFlights' component={FreeFlights} options={{headerShown: false}}/>
        <HomeStack.Screen name='LocalHighlights' component={LocalHighlights} options={{headerShown: false}}/>
        <HomeStack.Screen name='MerchantPage' component={MerchantPage} options={{headerShown: false}}/>
        <HomeStack.Screen name='MerchantItemScreen' component={MerchantItemScreen} options={{headerShown: false}}/>
        <HomeStack.Screen name='BuyItemScreen' component={BuyItemScreen} options={{headerShown: false}}/>
        <HomeStack.Screen name='ItemCart' component={ItemCart} options={{headerShown: false}}/> 
      </HomeStack.Group>
      <HomeStack.Group screenOptions={{ presentation: 'modal' }}>
        <HomeStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}}/>
        <HomeStack.Screen name="CountrySelection" component={CountrySelectionScreen} options={{headerShown: false}}/>
      </HomeStack.Group>
        
    </HomeStack.Navigator>
  )
}