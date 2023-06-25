import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'; 
import { useState, useEffect } from 'react';
import { getAllMerchantMembers } from '../../components/api/MerchantMembershipApi';
import { Divider } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


const MembershipSelectionScreen = ({route}) => {
  const navigation = useNavigation();
  const membershipDetails = route.params.krisMembership;
  // console.log('Membership Details:', membershipDetails);

  const [merchantMembership, setMerchantMembership] = useState([]);
    // const [userMembership, setUserMembership] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const merchantResponse = await getAllMerchantMembers();
    
            if (merchantResponse.isSuccess) {
              setMerchantMembership(merchantResponse.message);
            } else {
              console.log('Failed to get merchantMembership:', merchantResponse.message);
            }
          } catch (error) {
            console.error('Error occurred while getting memberships:', error);
          }
        };
    
        fetchData();
      }, []);

      if (membershipDetails === undefined || merchantMembership === undefined) {
        return (
          <View>
            <Text>Loading...</Text>
          </View>
        );
      }

        const userMembership = membershipDetails.map((user) => {
        // Find the corresponding merchant membership based on merchantName
        const merchantMembership_ = merchantMembership.find(
        (merchant) => merchant.merchantName === user.merchantName
        );
        
        // Find the corresponding membership level based on membershipLevel
        let membershipLevel;
        if (merchantMembership_) {
            membershipLevel = merchantMembership_.membershiplevels.find(
            (level) => level.membershipLevel === user.membershipLevel
            );
        }

        // Extract the desired properties and return the updated user membership
        return {
        membershipLevel: user.membershipLevel,
        merchantName: user.merchantName,
        membershipBenefits: membershipLevel ? membershipLevel.Benefits : null,
        };
    });
    const filteredUserMembership = userMembership.filter((user) => user.membershipBenefits !== null);

    const handleSignUp = () => {
        alert('Sign Up Successful!');
        navigation.goBack();
    }

  return (
    <SafeAreaView className='bg-indigo-800'>
      <View className='mt-2 ml-3 mr-3 mb-1 flex-row items-center'>
        <Text className='flex-1 text-white text-2xl font-semibold'>Memberships</Text>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
        >
            <Ionicons name="close-circle-outline" size={35} color='white'/> 
        </TouchableOpacity>
      </View>
      <View className='bg-white'>
        <View className='ml-3 mr-3 mt-1'>
          <ScrollView className='bg-gray-200 p-2 rounded-lg mt-2'>
            {filteredUserMembership.map((user, index) => (
              <View key={index} className='p-1'>
                  <Text className='text-lg font-semibold'>Merchant Name: {user.merchantName}</Text>
                  <Text className='text-base font-medium'>Membership Level: {user.membershipLevel}</Text>
                  <View className='bg-white p-1 mt-1 rounded-lg'>
                      <Text className='text-base font-medium flex-1'>Membership Benefits:</Text>
                      <View className='justify-center ml-1'>
                          {user.membershipBenefits.map((benefit, benefitIndex) => (
                          <Text className='mt-1' key={benefitIndex}>
                              {`${benefitIndex + 1}. ${benefit.benefit}`}
                          </Text>
                          ))}
                      </View>
                  </View>
                  <TouchableOpacity 
                    className='bg-indigo-800 rounded-lg items-center justify-center mt-2 p-1'
                    onPress={handleSignUp}
                  >
                    <Text className='text-base font-medium text-white mt-1'>Sign Up</Text>
                  </TouchableOpacity>
                <Divider style={{ backgroundColor: 'black', marginTop: 10, borderBottomWidth: 2}} />
              </View>
            ))}
          </ScrollView>
        </View>

      </View>
      
    </SafeAreaView>
  )
}

export default MembershipSelectionScreen