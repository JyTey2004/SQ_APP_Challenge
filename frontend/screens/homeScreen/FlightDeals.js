import { View, Text, FlatList, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import BundledDeals from '../../components/BundledDeals';
import CountryExclusiveDeals from '../../components/CountryExclusiveDeals';

const FlightDeals = ({route}) => {
  const { responseData } = route.params;

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView>
      <View className='flex-row items-center mt-3 ml-3 space-x-3'>
        <Text className='text-2xl font-bold'>Flight Details</Text>
        <Ionicons name="airplane-outline" color='black' size={30}/>
      </View>
      <View>
        <ScrollView 
          className='flex-row mr-2 ml-2 mt-2'
          horizontal
          showsHorizontalScrollIndicator={false}
          >
          {responseData?.response?.airports.map((item, index) => (
            <View 
              key={index}
              className='rounded-lg bg-indigo-800 p-3 flex-1 m-1'
            >
                <Text className='text-white text-xl font-bold'>{item.airportCode}</Text>
                <Text className='text-white text-sm'>Airport Name: {item.airportName}</Text>
                <Text className='text-white text-sm'>Country: {item.countryName}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      
      <View className='ml-3 mt-3 mr-3'>
          <Text className='text-xl font-bold'>Bundled Deals!</Text>
          <TouchableOpacity className='flex-row items-center'>
            <Text className="text-base">Bundle Items with your flight for more reward</Text>
            <Ionicons name="chevron-forward-outline" size={20}/>
          </TouchableOpacity>
          <BundledDeals/>
      </View>

      <View className='ml-3 mt-3 mr-3'>
          <Text className='text-xl font-bold'>Explore Foodies!</Text>
          <TouchableOpacity className='flex-row items-center'>
            <Text className="text-base">Bundle Items with your flight for more reward</Text>
            <Ionicons name="chevron-forward-outline" size={20}/>
          </TouchableOpacity>
          <CountryExclusiveDeals 
            Category='Tours and Activities'
          />
      </View>

      <View className='ml-3 mt-3 mr-3'>
          <Text className='text-xl font-bold'>Explore Foodies!</Text>
          <TouchableOpacity className='flex-row items-center'>
            <Text className="text-base">Bundle Items with your flight for more reward</Text>
            <Ionicons name="chevron-forward-outline" size={20}/>
          </TouchableOpacity>
          <CountryExclusiveDeals 
            Category='Food and Beverages'
          />
      </View>

      <View className='ml-3 mt-3 mr-3'>
          <Text className='text-xl font-bold'>Enjoy Life!</Text>
          <TouchableOpacity className='flex-row items-center'>
            <Text className="text-base">Bundle Items with your flight for more reward</Text>
            <Ionicons name="chevron-forward-outline" size={20}/>
          </TouchableOpacity>
          <CountryExclusiveDeals 
            Category='Health and Beauty'
          />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FlightDeals