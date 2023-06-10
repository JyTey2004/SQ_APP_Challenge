import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const LocalHightlightsCards = ({imgUrl, title, Offer}) => {
  return (
    <TouchableOpacity className='flex-1 rounded-lg p-3 bg-gray-300 mr-3'>
        <Image
            source={{
                uri: imgUrl,
            }}
            className='object-cover h-24 w-48 rounded-lg'
        />
        <Text className='text-black font-medium mt-1 text-lg'>{title}</Text>
        <Text className='mt-1'>{Offer}</Text>
        <View className='mt-1 flex-row items-center'>
            <Text>Compare prices and more!</Text>
            <Ionicons name="chevron-forward-outline" size={18}/>
        </View>
    </TouchableOpacity>
  )
}

export default LocalHightlightsCards