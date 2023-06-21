import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getKrisMemberByName } from '../../components/api/KrisMembershipApi';
import { Divider } from 'react-native-elements';
import MemberBenefits from '../../components/MemberBenefits';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const MembershipScreen = () => {
  const navigation = useNavigation();
  const [krisMembership, setKrisMembership] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const krisResponse = await getKrisMemberByName('Halp');
        if (krisResponse.isSuccess) {
          setKrisMembership(krisResponse.message[0]);
        } else {
          console.log('Failed to get krisMembership:', krisResponse.message);
        }
      } catch (error) {
        console.error('Error occurred while getting memberships:', error);
      }
    };

    fetchData();
  }, []);

  // console.log('Kris Membership:', krisMembership.memberships);


  return (
    <View className='bg-indigo-800'>
      <View className='mt-2 ml-3 mr-3 mb-1 flex-row items-center'>
        <Text className='flex-1 text-white text-2xl font-semibold'>KRIS {krisMembership.krisMembershipLevel} Member</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
            <Ionicons name="close-circle-outline" size={35} color='white'/> 
        </TouchableOpacity>
      </View>
      <View className='bg-white'>
        <View className='mt-2 ml-3 mr-3 mb-1'>
          <TouchableOpacity 
            className='flex-row items-center'
            onPress={() => navigation.navigate('Account')}
            >
              <Image className='h-20 w-20 border-2 rounded-full'
                source={{
                  uri: krisMembership.mainImg,
                }}
              />
              <View className='p-2 flex-1'>
                <Text className='text-black text-2xl font-semibold ml-3 pb-1'>{krisMembership.name}</Text>
                <Text className='text-black text-xl font-base ml-3'>KRIS {krisMembership.krisMembershipLevel} Member</Text>
              </View>
              <View className='mr-3'>
                <Ionicons name='caret-forward-outline' size={30}/>  
              </View>
          </TouchableOpacity>
          <Divider style={{ backgroundColor: 'black', marginTop: 10, marginBottom: 10, borderBottomWidth: 2}} />
          <Text className='text-black text-xl font-semibold'>Loyalty Programs</Text>
          <MemberBenefits
            membershipDetails={krisMembership.memberships}
          />
          <TouchableOpacity 
            className='bg-indigo-800 rounded-lg p-2 mt-3 mb-2 items-center justify-center'
          >
            <Text className='text-white text-xl font-semibold'>View Other Programs</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MembershipScreen;
