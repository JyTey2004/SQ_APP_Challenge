import { ScrollView } from 'react-native'
import React, { useState, useEffect } from "react";
import BundledDealsCards from './BundledDealsCards'
import { getAllMerchants, getMerchantByCategory} from './api/MerchantsApi';

const CountryExclusiveDeals = ({Category}) => {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getMerchantByCategory(Category); // Call the getAllMerchants API
          if (response.isSuccess) {
            // console.log('Merchants:', response.message);
            setMerchants(response.message);
            // Handle the successful response here, e.g., update component state with the fetched merchants
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
    <ScrollView
    contentContainerStyle={{
        paddingTop: 10,
    }}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    >
      {merchants.map((merchant) => (
        <BundledDealsCards
            key = {merchant._id}
            id = {merchant._id}
            imgUrl={merchant.mainImg}
            title={merchant.name}
            Offer={merchant.offer}
        />
      ))}
    </ScrollView>
  )
}

export default CountryExclusiveDeals