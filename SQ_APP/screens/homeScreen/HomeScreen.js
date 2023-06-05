import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import MiniMenu from '../../components/MiniMenu';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView className="bg-indigo-800">

      {/* Logo and Login/Signup */}
      <View className='flex-row space-x-4 mb-2 mt-1'>
        <Text className="text-white text-4xl font-bold ml-3 flex-1">KRIS+</Text>
        <TouchableOpacity 
          className='flex-row items-center mr-3'
          onPress={() => navigation.navigate('Login')}
        >
            <Text className="text-white text-medium font-medium">LOG IN OR SIGN UP</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="white"/>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <Divider orientation='horizontal' color='gray' className="ml-4 mr-4"/>

      {/* Notifications, Country/Area and SearchBar */}
      <View className='flex-row mt-4 ml-3 items-center' >

        {/* Notifications */}
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
        >
          <Ionicons name="notifications-outline" size={28} color="white"/>
        </TouchableOpacity>

        {/* Country Selection VERY IMPORTANT -> key feartures here */}
        <TouchableOpacity 
          className='flex-row items-center ml-6'
          onPress={() => navigation.navigate('CountrySelection')}
        >
          <Image
            source={require('../../assets/images/SG_Flag.png')}
            className='w-11 h-11 outline-4 outline-white'
          />
          <Ionicons name="caret-down-outline" color='white' size={20}/>
        </TouchableOpacity>

        {/* SearchBar */}
        <TouchableOpacity 
          onPress={() => navigation.navigate('Search')}
          className='bg-white flex-1 items-center rounded-full ml-4 mr-4 h-8 flex-row space-x-2'
        >
            <View className='ml-2'>
              <Ionicons name="search" size={18} color="gray"/>
            </View>
            <Text className='text-sm text-gray-400'>Dining, retail, activities...</Text>
        </TouchableOpacity>
      </View>
      <MiniMenu/>
    </SafeAreaView>
  )
}

export default HomeScreen