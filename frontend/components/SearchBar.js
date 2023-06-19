// SearchBar.js
import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const SearchBarDepart = ({clicked, searchPhrase, setSearchPhrase, placeholderInfo}) => {
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
};

const SearchBarDestination = ({clicked, searchPhrase, setSearchPhrase, placeholderInfo}) => {
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