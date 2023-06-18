import axios from 'axios';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, FlatList, Pressable } from 'react-native'
import {React, useState} from 'react';
import { Ionicons } from '@expo/vector-icons';

const apiUrl = 'https://www.air-port-codes.com/api/v1/autocomplete';

const SearchScreen = () => {
  const [input, setInput] = useState();
  const [data, setData] = useState();

  const onChangeText = async (text) => {
    setInput(text);

    if (text.length > 2) {
      const headers = {
        'APC-Auth': '8d4a2a9bad',
        'APC-Auth-Secret': 'c06c5c04c9db400'
      }

      try {
        const response = await axios.get(`https://www.air-port-codes.com/api/v1/autocomplete?term=${text}&type=a&size=3&limit=15`, { headers });
        if (response.data.airports && response.data.airports.length > 0) {
          setData(response.data.airports);
        }
        // Handle the response data or update state as needed

      } catch (error) {
        console.error(error);
        // Handle any errors
      }
    }
  }

  const getItemText = (item) => {
    let cityCountry = item.city + ", " + item.country.name
    let airport = item.iata  + " - " + item.name;

    return (
      <View className='flex-row px-2 pt-4'>
        <View className='ml-4'>
          <Text className='font-bold pb-1'>{cityCountry}</Text>
          <Text>{airport}</Text>
        </View>
      </View>

    );
  };

  return (
    <SafeAreaView className='flex-1 mt-2'>
      {/* <Text className='ml-2 my-3 font-bold text-lg'>
        Depart from
      </Text> */}
      <TextInput
        className='bg-white mx-4 px-2 h-12 rounded-md'
        autoFocus={true}
        onChangeText={onChangeText}
        value={input}
        placeholder="Search by city, country or airport code"
      />
        {input && data && data.length > 0 ? (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => (
              <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}
                onPress={()=>{}
                }
              >
                {getItemText(item.item)}
              </Pressable>
            )}
            keyExtractor={(item) => item.iata}
          />
        ) : null}
    </SafeAreaView>
  )
}

export default SearchScreen