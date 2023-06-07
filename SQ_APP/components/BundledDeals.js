import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import BundledDealsCards from './BundledDealsCards'

const BundledDeals = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal:15,
        paddingTop: 10,
    }}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    className=''
    >
        <BundledDealsCards
            imgUrl='https://t4.ftcdn.net/jpg/02/88/39/77/240_F_288397700_gA1Yy25V25liJG85dX6N5hTOmtzDiW7F.jpg'
            title='Dior Perfumes'
            Offer='Extra 30% Miles'
        />
    </ScrollView>
  )
}

export default BundledDeals