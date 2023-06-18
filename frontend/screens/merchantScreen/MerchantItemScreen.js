import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const MerchantItemScreen = ({route}) => {
    const ItemData = route.params.itemData;
    // console.log(ItemData.itemData.description);

    const renderItem = ({item}) => (
        <View className="w-1/2 flex-row p-1 items-center space-x-10">
            <View className='w-1/2'>
                <Text>S${item.price}</Text>
            </View>
            <Ionicons name="airplane-outline" size={24} color="black"/>
            <View className='w-1/4 items-center'>
                <Text>{item.location}</Text>
            </View>
            <TouchableOpacity className='flex-row items-center bg-indigo-800 p-1 rounded-md'>
                <Text className='text-white text-sm font-light'>Buy Here!</Text>
                <Ionicons name="chevron-forward-outline" size={20} color="white"/>
            </TouchableOpacity>
        </View>
      );

  return (
    <SafeAreaView className='bg-white'>
        <View className='flex-1 ml-3 mr-3'>
            <Image
            source={{
                uri: ItemData.imgUrl,
            }}
            className='w-full h-1/3 object-cover rounded-xl'
            />
            <View className='mt-2'>
                <Text className='font-semibold text-2xl'>{ItemData.itemName}</Text>
                <Divider style={{ backgroundColor: 'black', marginTop: 10, borderBottomWidth: 2 }} />
                <View className='mt-2'>
                    <Text className='text-base'>Item Description: </Text>
                    <Text className='mt-1 text-sm font-light'>{ItemData.description}</Text>
                </View>
                <Divider style={{ backgroundColor: 'black', marginTop: 20, borderBottomWidth: 2 }} />
            </View>
            <View className='mt-2'>
                <Text className='mt-1 text-lg font-bold'>Prices</Text>
                <Text>Here are a list of relevant Airports: </Text>
                <FlatList
                    data={ItemData.prices}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    className='bg-gray-200 rounded-xl p-2 mt-2'
                />
            </View>
        </View>
    </SafeAreaView>
  )
}

export default MerchantItemScreen