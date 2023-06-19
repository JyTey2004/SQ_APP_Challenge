import { View, Text, SafeAreaView, Image, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native'
import React,{ useState, useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import MiniMenu from '../../components/MiniMenu';
import {SearchBarDepart, SearchBarDestination} from '../../components/SearchBar';
import FlightSearchButton from '../../components/api/FlightSearchApi';
import FreeFlightsBundle from '../../components/FreeFlightsBundle';
import LocalHighlightsComp from '../../components/LocalHighlightsComp';

const apiUrl = 'https://apigw.singaporeair.com/api/uat/v1/commercial/flightavailability/get';


const HomeScreen = (route) => {
  const navigation = useNavigation();

  const [searchPhraseDepart, setSearchPhraseDepart] = useState("");
  const [searchPhraseDestination, setSearchPhraseDestination] = useState("");

  return (
    <SafeAreaView className="bg-indigo-800">
      {/* Logo and Login/Signup */}
      <View className='flex-row space-x-4 mb-2 mt-1'>
        <Text className="text-white text-4xl font-bold ml-3 flex-1">KRIS+</Text>
        <TouchableOpacity 
          className='flex-row items-center mr-3'
          onPress={() => navigation.navigate('Login')}
        >
            <Text className="text-white text-medium font-medium">LOG IN OR SIGN UP</Text>
            <Ionicons name="chevron-forward-outline" size={20} color="white"/>
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <Divider orientation='horizontal' color='gray' className="ml-4 mr-4"/>

      <ScrollView className='bg-white'>
          <View className='bg-indigo-800'>
              {/* Notifications, Country/Area and SearchBar */}
              <View className='flex-row mt-4 ml-3 items-center' >

                {/* Notifications */}
                <TouchableOpacity
                  onPress={() => navigation.navigate('Notifications')}
                >
                  <Ionicons name="notifications-outline" size={28} color="white"/>
                </TouchableOpacity>

                {/* Country Selection VERY IMPORTANT -> key feartures here */}
                <TouchableOpacity 
                  className='flex-row items-center ml-6'
                  onPress={() => navigation.navigate('CountrySelection')}
                >
                  <Image
                    source={require('../../assets/images/SG_Flag.png')}
                    className='w-11 h-11 outline-4 outline-white'
                  />
                  <Ionicons name="caret-down-outline" color='white' size={20}/>
                </TouchableOpacity>

                {/* SearchBar */}
                <TouchableOpacity 
                  onPress={() => {}}
                  className='bg-white flex-1 items-center rounded-full ml-4 mr-4 h-8 flex-row space-x-2'
                >
                    <View className='ml-2'>
                      <Ionicons name="search" size={18} color="gray"/>
                    </View>
                    <Text className='text-sm text-gray-400'>Dining, retail, activities...</Text>
                </TouchableOpacity>
              </View>

              {/* Mini Menu */}
              <MiniMenu/>

              {/* Flight Details Input*/}
              <View className='mt-3 ml-3' >
                <Text className='text-white text-lg font-bold'>Flying?</Text>
                <Text className='text-white text-m font-light'>Check out Bundled deals now!</Text>

                <View className='flex-1 mt-2 mr-3'>
                  <View className='flex-row items-center space-x-3'>
                    <View className='flex-1'>
                      <SearchBarDepart
                      searchPhrase={searchPhraseDepart}
                      setSearchPhrase={setSearchPhraseDepart}
                      placeholderInfo="Depart From"
                      />
                    </View>
                    <Ionicons name="airplane-outline" color='white' size={30}/>
                    <View className='flex-1'>
                      <SearchBarDestination
                        setSearchPhrase={setSearchPhraseDestination}
                        placeholderInfo = 'Destination'
                        searchPhrase = {searchPhraseDestination}
                      />
                    </View>
                      
                  </View>
                  <FlightSearchButton originAirportCode={searchPhraseDepart} destinationAirportCode={searchPhraseDestination}/>
                </View>
              </View>

              {/* Free Flights */}
              <View className='bg-white mt-3 pt-2'>
                <View className='ml-3'>
                  <Text className='text-xl font-bold'>Free Flights!</Text>
                  <TouchableOpacity 
                    className='flex-row items-center'
                    onPress={() => navigation.navigate('FreeFlights')}
                    >
                    <Text className='text-base font-medium'>Spend for a free flight!</Text>
                    <Ionicons name="chevron-forward-outline" size={20}/>
                  </TouchableOpacity>
                  <FreeFlightsBundle/>
                </View>

                {/* Airport Highlights */}
                <View className='ml-3 mt-3'>
                    <Text className=' text-xl font-bold'>Local Highlights!</Text>
                    <TouchableOpacity 
                      className='flex-row items-center mt-1'
                      onPress={() => navigation.navigate('FreeFlights')}
                      >
                      <Text className='text-base font-medium'>Find Stores and Deals in your Local Business!</Text>
                      <Ionicons name="chevron-forward-outline" size={20}/>
                    </TouchableOpacity>
                    <LocalHighlightsComp/>
                </View>
              </View>
                  
              

          </View>
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen