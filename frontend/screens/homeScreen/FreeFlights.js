import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { SearchBarFreeFlight } from '../../components/SearchBar'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import FreeFlightsBundle from '../../components/FreeFlightsBundle';

const FreeFlights = () => {
    const [searchItems, setSearchItems] = useState("");

  return (
    <SafeAreaView  className='bg-indigo-800'>

        {/* SearchBar */}
        <View className='m-3'>
            <View className='flex-row items items-center mb-1'>
                <Text  className='text-white text-lg font-bold'>Search Items</Text>
                <Ionicons name="chevron-forward-outline" size={20} color='white'/>
            </View>
            <SearchBarFreeFlight 
                    placeholderInfo='Search for free flights'
                    searchPhrase={searchItems}
                    setSearchPhrase={setSearchItems}
            />
        </View>

  
        <ScrollView className='bg-white'>

          {/* Items selection */}
          <View className='ml-3 mt-2'>
            <Text className='text-lg font-bold'>
              Less than $1000
            </Text>
            <TouchableOpacity className='flex-row items-center'>
              <Text className='font-light text-base'>
                Spend less than $1000 to win a free flight
              </Text>
              <Ionicons name="chevron-forward-outline" size={20}/>
            </TouchableOpacity>
            <FreeFlightsBundle/>
          </View>

          {/* Items selection */}
          <View className='ml-3 mt-2'>
            <Text className='text-lg font-bold'>
              Less than $2000
            </Text>
            <TouchableOpacity className='flex-row items-center'>
              <Text className='font-light text-base'>
                Spend less than $2000 to win a free flight
              </Text>
              <Ionicons name="chevron-forward-outline" size={20}/>
            </TouchableOpacity>
            <FreeFlightsBundle/>
          </View>
          
          {/* Items selection */}
          <View className='ml-3 mt-2'>
            <Text className='text-lg font-bold'>
              Less than $3000
            </Text>
            <TouchableOpacity className='flex-row items-center'>
              <Text className='font-light text-base'>
                Spend less than $3000 to win a free flight
              </Text>
              <Ionicons name="chevron-forward-outline" size={20}/>
            </TouchableOpacity>
            <FreeFlightsBundle/>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default FreeFlights