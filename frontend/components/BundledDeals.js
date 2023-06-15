import { ScrollView } from 'react-native'
import React, { useState, useEffect } from "react";
import BundledDealsCards from './BundledDealsCards'
import { getAllMerchants } from './api/MerchantsApi';

const BundledDeals = () => {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getAllMerchants(); // Call the getAllMerchants API
          if (response.isSuccess) {
            console.log('Merchants:', response.message);
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
        // <BundledDealsCards
        //     imgUrl='https://t3.ftcdn.net/jpg/02/99/20/42/240_F_299204260_gc8tgOwSvMzaVB9d6vFfGFoRm6GbEtfl.jpg'
        //     title='LV Accessories'
        //     Offer='Extra 20% Miles'
        // />
        // <BundledDealsCards
        //   imgUrl='https://media.istockphoto.com/id/1308838310/photo/gucci-store-in-paris.jpg?s=612x612&w=0&k=20&c=lPt_Yy8LaMGj17DzZhOso5vf8dIHYeEGtzhfBWsIzDY='
        //   title='Gucci Accessories'
        //   Offer='Extra 20% Miles'
        // />
      ))}
    </ScrollView>
  )
}

export default BundledDeals