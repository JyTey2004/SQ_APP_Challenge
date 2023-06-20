import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect } from 'react'
import { Divider } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { selectBasketTotal } from '../../features/basketSlice'
import { selectBasketItems } from '../../features/basketSlice'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

const CheckoutScreen = () => {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal)
    const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [collectionMethods, setCollectionMethods] = useState({});
    const [logisticsFee, setLogisticsFee] = useState(0);
    const [feeAddedItems, setFeeAddedItems] = useState([]);

    const handleCollectionMethodChange = (itemId, method) => {
      setCollectionMethods(prevState => ({
        ...prevState,
        [itemId]: method,
      }));
          // Update logistics fee based on the selected method
          if (method === 'Delivery' && !feeAddedItems.includes(itemId)) {
            setLogisticsFee(prevFee => prevFee + (groupItemsInBasket[itemId][0].price * 0.1));
            setFeeAddedItems(prevItems => [...prevItems, itemId]);
          } else if (method !== 'Delivery' && feeAddedItems.includes(itemId)) {
            setLogisticsFee(prevFee => prevFee - (groupItemsInBasket[itemId][0].price * 0.1));
            setFeeAddedItems(prevItems => prevItems.filter(item => item !== itemId));
          }
    };
    // const [id, setId] = useState([]);

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGroupItemsInBasket(groupedItems);
    }, [items]);


  return (
    <View className='bg-indigo-800'>
        <View className='items-center mt-2 mb-2'>
            <Text className='text-white text-2xl font-bold'>Checkout</Text>
        </View>
        <View className='flex-1 bg-white'>
            <Divider className='ml-3 mr-3 mb-1' style={{ backgroundColor: 'black', borderBottomWidth: 2 }} />
            <View className='ml-3 mr-3 mt-2'>
                    <Text className='text-black font-bold text-xl mb-1'>Choose Collection Method:</Text>
                    <Divider className='mt-2 mb-3' style={{ backgroundColor: 'black', borderBottomWidth: 2 }} />
            </View>
            <ScrollView className='bg-gray-200 rounded-lg ml-3 mr-3 mt-1 h-3/4'>
                {Object.entries(groupItemsInBasket).map(([key, items]) => (
                    <View key={key} >
                        <View className='flex flex-row items-center mt-2 p-2'>
                            <Image
                                className='w-20 h-20 rounded-lg'
                                source={{uri: items[0].image}}
                            />
                            <View className='flex-1 ml-2 mr-2'>
                                <Text className='text-black font-semibold text-xl' numberOfLines={1} ellipsizeMode="tail">{items[0].name}</Text>
                                <Text className='text-black font-semibold text-lg'>${items[0].price}</Text>
                            </View>
                            <View className='w-1/6 flex-row items-center justify-center'>
                                <Text className='text-black font-semibold text-xl'>x{items.length}</Text>
                            </View>
                        </View>
                        {collectionMethods[key] && (
                            <View className='flex flex-row items-center'>
                            <View className='flex-1 ml-2 mr-2'>
                                <Text className='text-black font-semibold text-lg'>{collectionMethods[key]}</Text>
                            </View>
                            {collectionMethods[key] === 'Delivery' && (
                                <View className='w-1/4 flex-row items-center justify-center'>
                                    <Text className='text-black font-semibold text-lg' numberOfLines={1}>
                                        + ${(items[0].price * 0.1).toFixed(2)}
                                    </Text>
                                </View>
                            )}
                            {collectionMethods[key] === 'Self-Collection' && (
                                <View className='w-1/4 flex-row items-center justify-center'>
                                    <Text className='text-black font-semibold text-lg' numberOfLines={1}>
                                        + ${(items[0].price * 0.0).toFixed(2)}
                                    </Text>
                                </View>
                            )}
                            </View>
                        )}
                        <View className='flex-1 flex-row space-x-2 p-2'>
                            <TouchableOpacity 
                                className='bg-indigo-800 flex-1 items-center rounded-lg p-1'
                                onPress={() => handleCollectionMethodChange(key, 'Self-Collection')}
                            >
                                <Text className='text-white font-semibold text-xl'>Pick-Up: {items[0].location}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                className='bg-indigo-800 flex-1 items-center rounded-lg p-1'
                                onPress={() => handleCollectionMethodChange(key, 'Delivery')}
                            >
                                <Text className='text-white font-semibold text-xl'>Delivery</Text>
                            </TouchableOpacity>
                        </View>
                        <Divider className='ml-3 mr-3 mt-2' style={{ backgroundColor: 'black', borderBottomWidth: 2 }} />
                    </View>
                ))}
            </ScrollView>
            <View className='flex-1 items-center justify-between mt-1 ml-3 mr-3'>
                <View className='flex-row items-center p-1'>
                    <View className='flex-1 ml-3 mr-2'>
                        <Text className='text-black font-semibold text-lg'>Logistics Fee</Text>
                    </View>
                    <View className='w-1/4 flex-row items-center justify-center'>
                        <Text className='text-black font-semibold text-lg' numberOfLines={1}>${logisticsFee.toFixed(2)}</Text>
                    </View>
                </View> 
                <View className='flex-row items-center mb-1 p-1'>
                    <View className='flex-1 ml-3 mr-2'>
                        <Text className='text-black font-semibold text-lg'>Total</Text>
                    </View>
                    <View className='w-1/4 flex-row items-center justify-center'>
                        <Text className='text-black font-semibold text-lg' numberOfLines={1}>${(basketTotal+logisticsFee).toFixed(2)}</Text>
                    </View>
                </View>
            </View>
            <Divider className='ml-3 mr-3 mt-2' style={{ backgroundColor: 'black', borderBottomWidth: 2 }} />
            <View className='flex-1 ml-3 mr-3 mt-3 mb-3'>
                <TouchableOpacity
                    className='bg-indigo-800 items-center rounded-lg p-2 justify-center'
                    // onPress={() => handleCheckout()}
                >
                    <Text className='text-white font-semibold text-xl'>Pay</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default CheckoutScreen