import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import LocalHightlightsCards from './LocalHightlightsCards'

const LocalHighlightsComp = () => {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingTop: 10,
    }}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    >
        <LocalHightlightsCards
            imgUrl='https://t4.ftcdn.net/jpg/02/88/39/77/240_F_288397700_gA1Yy25V25liJG85dX6N5hTOmtzDiW7F.jpg'
            title='Dior Perfumes'
            Offer='Extra 30% Miles'
        />
        <LocalHightlightsCards
            imgUrl='https://t3.ftcdn.net/jpg/02/99/20/42/240_F_299204260_gc8tgOwSvMzaVB9d6vFfGFoRm6GbEtfl.jpg'
            title='LV Accessories'
            Offer='Extra 20% Miles'
        />
        <LocalHightlightsCards
          imgUrl='https://media.istockphoto.com/id/1308838310/photo/gucci-store-in-paris.jpg?s=612x612&w=0&k=20&c=lPt_Yy8LaMGj17DzZhOso5vf8dIHYeEGtzhfBWsIzDY='
          title='Gucci Accessories'
          Offer='Extra 20% Miles'
        />
    </ScrollView>
  )
}

export default LocalHighlightsComp