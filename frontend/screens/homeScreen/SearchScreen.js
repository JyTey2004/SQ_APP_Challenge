import axios from 'axios';
import { View, Text, SafeAreaView, TouchableWithoutFeedback, Keyboard, TextInput, FlatList, Pressable } from 'react-native'
import {React, useState} from 'react';
// import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';
import { Divider } from 'react-native-elements';


const apiUrl = 'https://www.air-port-codes.com/api/v1/autocomplete';

const SearchScreen = ({route}) => {
  const navigation = useNavigation();

  const searchType = route.params.searchType;

  const [input, setInput] = useState();
  const [data, setData] = useState();

  const [searchDataDepart, setSearchDataDepart] = useState("");
  const [searchDataDestination, setSearchDataDestination] = useState("");

  const handleSearchDepart = (value) => {
    setSearchDataDepart(value);
    navigation.goBack(); // Go back to the HomeScreen
  };

  const handleSearchDestination = (value) => {
    setSearchDataDestination(value);
    navigation.goBack(); // Go back to the HomeScreen
  };

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
          // console.log(response.data.airports);
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
//                 onPress={() => {
//                   if (searchType == 'Departure') {
//                     handleSearchDepart(item.item.iata); Keyboard.dismiss();
//                   } else if (searchType == 'Destination') {
//                     handleSearchDestination(item.item.iata); Keyboard.dismiss();
//                   }}}
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