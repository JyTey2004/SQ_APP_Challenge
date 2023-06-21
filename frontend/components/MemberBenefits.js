import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react'
import { getAllMerchantMembers } from './api/MerchantMembershipApi';
import { Divider } from 'react-native-elements';

const MemberBenefits = ({membershipDetails}) => {
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

  return (
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
          <Divider style={{ backgroundColor: 'black', marginTop: 10, borderBottomWidth: 2}} />
        </View>
      ))}
    </ScrollView>
  )
}

export default MemberBenefits