import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const BundledDealsCards = ({imgUrl, title, Offer, id}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity 
      className='w-52 rounded-lg p-3 bg-gray-300 mr-3 items-center'
      onPress={() => navigation.navigate('MerchantPage', {merchantId: id})}
      >
        <Image
            source={{
                uri: imgUrl,
            }}
            className='object-cover h-24 w-48 rounded-lg'
        />
    <View>
        <Text className='text-black font-medium mt-1 text-lg' numberOfLines={1} ellipsizeMode="tail">{title}</Text>
          <Text className='mt-1'>{Offer}!</Text>
          <View className='mt-1 flex-row items-center'>
              <Text>Compare prices and more!</Text>
              <Ionicons name="chevron-forward-outline" size={18}/>
          </View>
      </View>
    
    </TouchableOpacity>
  )
}

export default BundledDealsCards