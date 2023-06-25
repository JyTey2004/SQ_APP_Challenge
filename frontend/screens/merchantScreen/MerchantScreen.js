import { View, Text, SafeAreaView, Image, ScrollView, Button } from 'react-native';
import React, { useState, useEffect } from 'react';
import { getMerchantById } from '../../components/api/MerchantsApi';
import MerchantItemCard from '../../components/MerchantItemCard';
import { Divider } from 'react-native-elements';
import CountryExclusiveDeals from '../../components/CountryExclusiveDeals';

const MerchantPage = ({ route }) => {
  const merchantId = route.params.merchantId;
  const merchantCategory = route.params.merchantCategory;
  const [merchant, setMerchant] = useState(null);
  const [merchantItems, setMerchantItems] = useState([]);

  const fetchMerchantById = async (id) => {
    try {
      const response = await getMerchantById(id);
      if (response.isSuccess) {
        setMerchant(response.message);
        setMerchantItems(response.message.items);
      } else {
        console.log('Failed to get merchant:', response.message);
      }
    } catch (error) {
      console.error('Error occurred while getting merchant:', error);
    }
  };

  useEffect(() => {
    fetchMerchantById(merchantId);
  }, []);

  // const handleFetchDifferentMerchant = () => {
  //   // Fetch a different merchant by changing the merchantId
  //   const newMerchantId = 'your_new_merchant_id';
  //   fetchMerchantById(newMerchantId);
  // };

  return (
    <SafeAreaView className='flex-1 bg-white'>
        <ScrollView 
            className='ml-3 mr-3'
            contentContainerStyle={{ flexGrow:1, justifyContent: 'space-between' }}
            showsVerticalScrollIndicator={false}
        >
        <Image
          source={{
            uri: merchant?.mainImg,
          }}
          className='w-full h-1/3 object-cover rounded-xl'
        />
        <View className='mt-2'>
          <Text className='font-bold text-2xl'>{merchant?.name}</Text>
          <Text className='text-lg font-medium'>{merchant?.category}</Text>
          <Text className='text-base font-medium'>{merchant?.offer} On All Items Purchased!</Text>
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
            showsHorizontalScrollIndicator={false}
          >
            {merchantItems.map((item) => (
              <MerchantItemCard
                key={item._id}
                id={item._id}
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
          <Text className='mt-2 text-lg font-bold'>Explore Similar Merchants!</Text>
          <CountryExclusiveDeals 
            Category={merchantCategory} 
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MerchantPage;
