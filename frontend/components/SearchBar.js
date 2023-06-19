// SearchBar.js
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, TouchableOpacity, Text } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SearchFlightContext } from '../context/SearchFlightContext.js';

const SearchBarDepart = ({ searchPhrase, setSearchPhrase, placeholderInfo}) => {
  const navigation = useNavigation();

  const { departureAirportCode, departureCity} = useContext(SearchFlightContext);
  const textValue = departureAirportCode != "" ? departureAirportCode + ", " + departureCity : departureAirportCode
  return (
    <TouchableOpacity 
    onPress={() => navigation.navigate('Search', {headerTitle:'Departure City'})}
    className='bg-white flex-1 items-center rounded-full h-8 flex-row space-x-2'
  >
    <View className="bg-white rounded-md h-8 flex-1 justify-center">
        {/* Input field */}
        <TextInput
          className='text-black text-medium font-medium ml-2'
          editable={false}
          placeholder={placeholderInfo}
          value={textValue}
          onChangeText={setSearchPhrase}
        />
    </View>

    </TouchableOpacity>

  );
};

const SearchBarDestination = ({ searchPhrase, setSearchPhrase, placeholderInfo}) => {
  const navigation = useNavigation();
  const { destinationAirportCode, destinationCity } = useContext(SearchFlightContext);
  const textValue = destinationAirportCode != "" ? destinationAirportCode + ", " + destinationCity : destinationAirportCode
  return (

    <TouchableOpacity 
    onPress={() => navigation.navigate('Search', {headerTitle:'Destination City'})}
    className='bg-white flex-1 items-center rounded-full h-8 flex-row space-x-2'
  >
    <View className="bg-white rounded-md h-8 flex-1 justify-center">
        {/* Input field */}
        <TextInput
          className='text-black text-medium font-medium ml-2'
          editable={false}
          placeholder={placeholderInfo}
          value={textValue}
          onChangeText={setSearchPhrase}
        />
    </View>

    </TouchableOpacity>
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