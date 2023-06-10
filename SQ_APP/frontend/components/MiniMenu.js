import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MiniMenuCards from './MiniMenuCards'

const miniMenu = () => {
  return (
    <ScrollView
        contentContainerStyle={{
            paddingHorizontal:15,
            paddingTop: 10,
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className='ml-1 mt-2 mb-2'
    >
        <MiniMenuCards
            imgUrl='https://cdn-icons-png.flaticon.com/128/3480/3480330.png'
            title='Reserve A Table'
        />
        <MiniMenuCards
            imgUrl='https://cdn-icons-png.flaticon.com/128/1023/1023386.png'
            title=' Book 
            A Taxi'
        />
        <MiniMenuCards
            imgUrl='https://cdn-icons-png.flaticon.com/128/4090/4090456.png'
            title='KrisShop'
        />
        <MiniMenuCards
            imgUrl='https://cdn-icons-png.flaticon.com/128/869/869687.png'
            title='Our Partners'
        />
        <MiniMenuCards
            imgUrl='https://cdn-icons-png.flaticon.com/128/4689/4689852.png'
            title='Flash Deals'
        />
        <MiniMenuCards
            imgUrl='https://cdn-icons-png.flaticon.com/128/4774/4774004.png'
            title='Pelago'
        />
        <MiniMenuCards
            imgUrl='https://cdn-icons-png.flaticon.com/128/1350/1350120.png'
            title='For SG Tourists'
        />
        <MiniMenuCards
            imgUrl='https://cdn-icons-png.flaticon.com/128/855/855003.png'
            title='Explore Nearby'
        />
        <MiniMenuCards
            imgUrl='https://cdn-icons-png.flaticon.com/128/2618/2618179.png'
            title='Challenges'
        />
    </ScrollView>
  )
}

export default miniMenu