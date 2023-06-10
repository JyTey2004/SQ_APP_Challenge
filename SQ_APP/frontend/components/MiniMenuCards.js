import { View, Text,TouchableOpacity, Image } from 'react-native'
import React from 'react'

const MiniMenuCards = ({imgUrl, title}) => {
  return (
    <TouchableOpacity className='w-16 h-18 items-center mr-5'>
        <View className="w-12 h-12 rounded-full bg-white items-center justify-center">
            <Image
                source={{
                    uri: imgUrl,
                }}
                className='w-8 h-8'
            />
        </View>
        
        <Text className='text-white font-medium mt-1 text-center '>{title}</Text>
    </TouchableOpacity>
    )
}

export default MiniMenuCards