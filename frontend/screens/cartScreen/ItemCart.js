import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { clearBasket } from '../../features/basketSlice';

const ItemCart = () => {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal)
    const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGroupItemsInBasket(groupedItems);
    }, [items]);

    // console.log(groupItemsInBasket);

  return (
    <SafeAreaView className='bg-indigo-800'>
        <View className='ml-3 mr-3 mt-1'>
            <View className='flex-1 items-center mb-2 flex-row'>
                <Text className='text-white font-bold text-xl'>Shopping Cart</Text>
                <TouchableOpacity 
                        onPress={() => navigation.goBack()}
                        className='flex-1 items-center justify-end flex-row mr-3'
                    >
                        <Text className='text-white font-semibold text-xl'>Shops</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View className='bg-white'>
            <View className='items-center ml-3 mr-3 mt-2'>
                <View className='flex-row'>
                    <Text className='flex-1 text-black font-bold text-xl ml-2'>Items</Text>
                    <Text className='w-1/5 text-black font-semibold text-lg text-center mr-1'>Qty</Text>
                </View>
            </View>

            <Divider className='ml-3 mr-3 mb-1' style={{ backgroundColor: 'black', borderBottomWidth: 2 }} />

            <ScrollView className='bg-gray-200 rounded-lg ml-3 mr-3 mt-1 h-3/4'>
                {Object.entries(groupItemsInBasket).map(([key, items]) => (
                    <View key={key} >
                        <View className='flex flex-row items-center mt-2 mb-2 p-2'>
                            <Image
                                className='w-20 h-20 rounded-lg'
                                source={{uri: items[0].image}}
                            />
                            <View className='flex-1 ml-2 mr-2'>
                                <Text className='text-black font-semibold text-lg' numberOfLines={1} ellipsizeMode="tail">{items[0].name}</Text>
                                <Text className='text-black font-semibold text-md'>{items[0].location}</Text>
                                <Text className='text-black font-semibold text-md'>${items[0].price}</Text>
                            </View>
                            <View className='w-1/6 flex-row items-center justify-center'>
                                <Text className='text-black font-semibold text-lg'>x{items.length}</Text>
                            </View>
                        </View>
                        <Divider className='ml-3 mr-3' style={{ backgroundColor: 'black', borderBottomWidth: 2 }} />
                    </View>
                ))}
                <View className='flex flex-row items-center mt-2 mb-2 p-2'>
                    <View className='flex-1 ml-2 mr-2'>
                        <Text className='text-black font-semibold text-lg'>Total</Text>
                    </View>
                    <View className='w-1/4 flex-row items-center justify-center'>
                        <Text className='text-black font-semibold text-lg' numberOfLines={1}>${basketTotal.toFixed(2)}</Text>
                    </View>
                </View>
            </ScrollView>


            <View className='bg-indigo-800 rounded-lg ml-3 mr-3 mt-3'>
                <View className='flex flex-row items-center mt-2 mb-2 p-1 space-x-2'>
                    <View className='w-1/3 ml-2 mr-2'>
                        <Text className='text-white font-semibold text-lg'>Promo Code</Text>
                    </View>
                    <Ionicons name="airplane-outline" size={24} color="white" />
                    <TextInput className='flex-1 ml-2 mr-2 bg-white rounded-md h-7 p-1' placeholder='Enter Promo Code' />
                </View>
            </View>

            <TouchableOpacity 
                    onPress={() => navigation.navigate('CheckoutScreen')}
                    className='bg-indigo-800 rounded-lg ml-3 mr-3 mt-3 mb-3'
                >
                    <View className='flex flex-row items-center mt-2 mb-2 p-1'>
                        <View className='flex-1 ml-2 mr-2'>
                            <Text className='text-white font-semibold text-lg'>Checkout</Text>
                        </View>
                        <View className='mr-2'>
                            <Ionicons name="arrow-forward-circle-outline" size={24} color="white" />
                        </View>

                    </View>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ItemCart