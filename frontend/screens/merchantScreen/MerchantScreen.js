import { View, Text, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import { useState, useEffect } from 'react';
import { getMerchantById } from '../../components/api/MerchantsApi';
import MerchantItemCard from '../../components/MerchantItemCard';
import { Divider } from 'react-native-elements';


const MerchantPage = ({route}) => {
  const { merchantId } = route.params;
  const [merchants, setMerchants] = useState([]);
  const [merchantItems, setMerchantItems] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getMerchantById(merchantId); // Call the getMerchantById API
          if (response.isSuccess) {
            console.log('Merchant:', response.message);
            // Handle the successful response here, e.g., update component state with the fetched merchants
            setMerchants(response.message);
            setMerchantItems(response.message.items);
          } else {
            console.log('Failed to get merchants:', response.message);
            // Handle the error response here
          }
        } catch (error) {
          console.error('Error occurred while getting merchants:', error);
          // Handle any unexpected errors here
        }
      };
      fetchData();
  }, []);

  return (
    <SafeAreaView className='bg-white '>
      <View className='flex-1 ml-3 mr-3'>
        <Image
          source={{
            uri: merchants.mainImg,
          }}
          className='w-full h-1/3 object-cover rounded-xl'
        />
        <View className='mt-2'>
           <Text className='font-bold text-2xl'>{merchants.name}</Text>
           <Text className='text-lg font-medium'>{merchants.category}</Text>
           <Text className='text-base font-medium'>{merchants.offer} On All Items Purchased!</Text>
        </View>

        <Divider style={{ backgroundColor: 'black', marginTop: 10 }} />

        <View>
          <Text className='mt-1 text-lg font-bold'>Featured</Text>
          <Text className='mt-1 text-sm font-medium'>*Location with lowest price!</Text>
          <ScrollView 
            contentContainerStyle={{
              paddingTop: 10,
            }}
            horizontal={true} 
            showsHorizontalScrollIndicator={false}>
            {merchantItems.map((item) => (
              <MerchantItemCard
                key={item._id}
                id = {item._id}
                imgUrl={item.image}
                itemName={item.name}
                prices={item.prices}
                description={item.description}
                  />
              ))}
          </ScrollView>
        </View>
        <Divider style={{ backgroundColor: 'black', marginTop: 20 }} />
        <View>
          <Text className='mt-2 text-lg font-bold'>Explore Other Merchants!</Text>

        </View>
      </View>
    </SafeAreaView>
    
  )
}

export default MerchantPage