import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { SearchBarFreeFlight } from '../../components/SearchBar'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

const FreeFlights = () => {
    const [searchItems, setSearchItems] = useState("");

  return (
    <SafeAreaView  className='bg-indigo-800'>
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
        
        
    </SafeAreaView>
  )
}

export default FreeFlights