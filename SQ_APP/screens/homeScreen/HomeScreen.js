import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView className="bg-blue-800">
      <View className='flex-row space-x-4 mb-2 mt-1'>
        <Text className="text-white text-4xl font-bold ml-3 flex-1">KRIS+</Text>
        <TouchableOpacity className='flex-row items-center mr-3'>
            <Text className="text-white text-medium font-medium">LOG IN OR SIGN UP</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="white"/>
        </TouchableOpacity>
      </View>
      <Divider orientation='horizontal' color='gray' className="ml-4 mr-4"/>
      <View className='flex-row mt-3 ml-3' >
        <TouchableOpacity
          onPress={() => navigation.navigate('Notifications')}
        >
          <Ionicons name="notifications-outline" size={33} color="white"/>
        </TouchableOpacity>
        
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen