import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


const MerchantItemCard = ({imgUrl, itemName, prices}) => {
    const navigation = useNavigation();
    
    const getLowestPrice = (prices) => {
      if (prices.length === 0) return null;
      let lowestPrice = prices[0];
      for (let i = 1; i < prices.length; i++) {
        if (prices[i].price < lowestPrice.price) {
          lowestPrice = prices[i];
        }
      }
      return lowestPrice;
    };

    const lowestPrice = getLowestPrice(prices);

  return (
    <TouchableOpacity 
      className='w-56 rounded-lg p-3 bg-gray-300 mr-3'
      // onPress={() => navigation.navigate('MerchantPage', {merchantId: id})}
      >
        <Image
            source={{
                uri: imgUrl,
            }}
            className='object-cover h-36 w-50 rounded-lg'
        />
    <Text className='text-black font-bold mt-1 text-base' numberOfLines={1} ellipsizeMode='tail'>{itemName}</Text>
    <Text className='mt-1'>${lowestPrice.price} - {lowestPrice.location}*</Text>
    {/* <Text className='mt-1'>{Offer}</Text> */}
    <View className='mt-1 flex-row items-center'>
        <Text>Compare prices and more!</Text>
        <Ionicons name="chevron-forward-outline" size={18}/>
    </View>
    
    </TouchableOpacity>
  )
}

export default MerchantItemCard