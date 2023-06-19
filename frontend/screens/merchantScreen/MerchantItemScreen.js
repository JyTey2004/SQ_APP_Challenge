import { View, Text, SafeAreaView, Image, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MerchantItemScreen = ({route}) => {
    const ItemData = route.params.itemData;
    const navigation = useNavigation();
    // console.log(ItemData.itemData.description);

  return (
    <SafeAreaView className='bg-white flex-1'>
        <ScrollView 
            className='ml-3 mr-3'
            contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between', paddingBottom: 20 }}
            showsVerticalScrollIndicator={false}
        >
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
            <View className='mt-2 '>
                <Text className='mt-1 text-lg font-bold'>Prices</Text>
                <Text>Here are a list of relevant Airports: </Text>
                <View className='bg-gray-200 rounded-xl p-2 mt-2'>
                    {ItemData.prices.map((item) => (
                        <View className="w-1/2 flex-row p-1 items-center space-x-10" key={item._id}>
                            <View className='w-1/2'>
                                <Text>S${item.price}</Text>
                            </View>
                            <Ionicons name="airplane-outline" size={24} color="black"/>
                            <View className='w-1/4 items-center'>
                                <Text>{item.location}</Text>
                            </View>
                            <TouchableOpacity 
                                className='flex-row items-center bg-indigo-800 p-1 rounded-md'
                                onPress={() => navigation.navigate('BuyItemScreen', {itemLocationData: item})}
                            >
                                <Text className='text-white text-sm font-light'>Buy Now!</Text>
                                <Ionicons name="chevron-forward-outline" size={20} color="white"/>
                            </TouchableOpacity>
                            <Divider style={{ backgroundColor: 'black', marginTop: 10, borderBottomWidth: 2 }} />
                        </View>
                    ))}
                </View>
            </View>
            <TouchableOpacity className='bg-indigo-800 rounded-lg flex-row p-3 items-center justify-center mt-2'>
                <Text className='text-white text-lg font-semibold'>View All Prices & Locations</Text>
                <Ionicons name="chevron-forward-outline" size={24} color="white"/>
            </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
  )
}

export default MerchantItemScreen