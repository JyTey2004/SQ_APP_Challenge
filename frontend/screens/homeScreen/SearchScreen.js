import axios from 'axios';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, FlatList, Pressable } from 'react-native'
import {React, useState, useContext} from 'react';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { SearchFlightContext } from '../../context/SearchFlightContext.js';

const apiUrl = 'https://www.air-port-codes.com/api/v1/autocomplete';

const SearchScreen = ({route}) => {
  const navigation = useNavigation();
  const [input, setInput] = useState();
  const [data, setData] = useState();
  const { setDepartureAirportCode, setDestinationAirportCode, setDepartureCity, setDestinationCity } = useContext(SearchFlightContext);

  const onPress = (code, city) => {
    if (route.params.headerTitle == 'Departure City') {
      setDepartureAirportCode(code);
      setDepartureCity(city);
    } else {
      setDestinationAirportCode(code);
      setDestinationCity(city);
    }
    navigation.navigate('HomeScreen');
  }
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
      <View>
      <View className='flex-row px-2 '>
        <View className='ml-4'>
          <Text className='font-bold mb-1 text-lg'>{cityCountry}</Text>
          <Text>{airport}</Text>
        </View>
      </View>
      </View>
    );
  };

  return (
    <View className='flex-1 mt-4'>
      {/* <Text className='ml-2 my-3 font-bold text-lg'>
        Depart from
      </Text> */}
      <View className='mb-4'>
      <TextInput
        className='bg-zinc-100 mx-4 px-4 h-12 rounded-md'
        autoFocus={true}
        onChangeText={onChangeText}
        fontSize= '16px'
        value={input}
        placeholder="Search by city, country or airport code"
      />
      </View>
        {input && data && data.length > 0 ? (
          <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={(item) => (
              <View>
                <Pressable
                  className='active:opacity-25'
                  onPress={() => onPress(item.item.iata, item.item.city)}
                >
                  {getItemText(item.item)}
                </Pressable>
                <Divider style={{backgroundColor:'black', margin:16}} />
              </View>
            )}
            keyExtractor={(item) => item.iata}
          />        
          ) : null}
    </View>
  )
}

export default SearchScreen