import { ScrollView } from 'react-native'
import React, { useState, useEffect } from "react";
import BundledDealsCards from './BundledDealsCards'
import { getAllMerchants } from './api/MerchantsApi';

const BundledDeals = () => {
  const [merchants, setMerchants] = useState([]);

  useEffect(() => {
      async function fetchData() {
        const response = await getAllMerchants();
        setMerchants(response.message);
        console.log(merchants);
      }
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
            key={merchant._id}
            imgUrl={merchant.items[0].image}
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