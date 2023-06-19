// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, TouchableOpacity, Text } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SearchBarDepart = ({ searchPhrase, setSearchPhrase, placeholderInfo}) => {
  const navigation = useNavigation();
  return (
    <View className="bg-white rounded-md h-8 flex-1 justify-center">
        {/* Input field */}
        <TextInput
          className='text-black text-medium font-medium ml-2'
          placeholder={placeholderInfo}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
    </View>
  //   <TouchableOpacity 
  //   onPress={() => navigation.navigate('Search', {searchType: 'Departure'})}
  //   className='bg-white flex-1 items-center rounded-full h-8 flex-row space-x-2'
  // >
  //     <View className='ml-2'>
  //       <Ionicons name="search" size={18} color="gray"/>
  //     </View>
  //     <Text className='text-sm text-gray-400'>Departure</Text>
  // </TouchableOpacity>
  );
};

const SearchBarDestination = ({ searchPhrase, setSearchPhrase, placeholderInfo}) => {
  const navigation = useNavigation();
  return (
    <View className="bg-white rounded-md h-8 flex-1 justify-center">
        {/* Input field */}
        <TextInput
          className='text-black text-medium font-medium ml-2'
          placeholder={placeholderInfo}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
    </View>
//     <TouchableOpacity 
//     onPress={() => navigation.navigate('Search', 'Destination City')}
//     className='bg-white flex-1 items-center rounded-full h-8 flex-row space-x-2'
//   >
//       <View className='ml-2'>
//         <Ionicons name="search" size={18} color="gray"/>
//       </View>
//       <Text className='text-sm text-gray-400'>Destination</Text>
//   </TouchableOpacity>
  );
};

const SearchBarFreeFlight = ({clicked, searchPhrase, setSearchPhrase, placeholderInfo}) => {
  return (
    <View className="bg-white rounded-md h-8 flex-1 justify-center">
        {/* Input field */}
        <TextInput
          className='text-black text-medium font-medium ml-2'
          placeholder={placeholderInfo}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
    </View>
  );
}

const SearchBarFlightDetails = ({clicked, searchPhrase, setSearchPhrase, placeholderInfo}) => {
  return (
    <View className="bg-white rounded-md h-8 flex-1 justify-center">
        {/* Input field */}
        <TextInput
          className='text-black text-medium font-medium ml-2'
          placeholder={placeholderInfo}
          value={searchPhrase}
          onChangeText={setSearchPhrase}
        />
    </View>
  );
}

export {SearchBarDepart, SearchBarDestination, SearchBarFreeFlight, SearchBarFlightDetails};