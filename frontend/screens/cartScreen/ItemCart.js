import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux';
import { addToBasket, selectBasketItems, selectBasketItemsWithId, removeFromBasket, selectBasketTotal } from '../../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Divider } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

const ItemCart = ({route}) => {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal)

    const [itemsTotal, setItemsTotal] = useState(basketTotal);
    const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
    const [collectionMethods, setCollectionMethods] = useState({});
    const [feeAddedItems, setFeeAddedItems] = useState([]);
    const [logisticsFee, setLogisticsFee] = useState(0);
    const [promoCode, setPromoCode] = useState('');
    const [isClickable, setIsClickable] = useState(true);

    const dispatch = useDispatch();
    const navigation = useNavigation();

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

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGroupItemsInBasket(groupedItems);
    }, [items]);

    const handlePromoCode = () => {
        if (isClickable) {
            if (promoCode === '10OFF') {
                setItemsTotal(prevFee => prevFee - (basketTotal * 0.1));
            } else {
                alert('Invalid Promo Code');
            }
        }
        setIsClickable(false);
        // setItemsTotal(prevFee => prevFee - (basketTotal * 0.1));
    }

    const removeItemFromCart = (id) => {
        if (!items.length > 0) return;
        dispatch(removeFromBasket({id}));
        setItemsTotal(prevFee => prevFee - groupItemsInBasket[id][0].price);
    }

    const addItemToCart = (item) => {
        dispatch(addToBasket(item));
        setItemsTotal(prevFee => prevFee + item.price);
    }


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

            <ScrollView className='bg-gray-200 rounded-lg ml-3 mr-3 mt-1 flex-1'>
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
                                <TouchableOpacity 
                                    className='mr-1'
                                    onPress={()=>removeItemFromCart(items[0].id)}
                                >
                                    <Ionicons name="remove-circle" size={18} color="black" />
                                </TouchableOpacity>
                                <Text className='text-black font-semibold text-lg'>x{items.length}</Text>
                                <TouchableOpacity 
                                    className='ml-1'
                                    onPress={()=>addItemToCart(items[0])}
                                >
                                    <Ionicons name="add-circle" size={18} color="black" />
                                </TouchableOpacity>
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

            <View className='bg-indigo-800 rounded-lg ml-3 mr-3 mt-3'>
                <View className='flex flex-row items-center mt-2 mb-2 p-1 space-x-2'>
                    <View className='w-1/3 ml-2 mr-2'>
                        <Text className='text-white font-semibold text-lg'>Promo Code</Text>
                    </View>
                    <Ionicons name="airplane-outline" size={24} color="white" />
                    <TextInput 
                        className='flex-1 ml-2 mr-1 bg-white rounded-md h-7 p-1' 
                        placeholder='Enter Promo Code' 
                        onChangeText={text => setPromoCode(text)}
                        />
                    <TouchableOpacity 
                        className='mr-3'
                        onPress={() => handlePromoCode(promoCode)}
                        >
                        <Text className='text-white font-semibold text-lg'>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View className='flex-1 items-center justify-between mt-1 ml-3 mr-3'>
            <View className='flex-row items-center p-1'>
                    <View className='flex-1 ml-3 mr-2'>
                        <Text className='text-black font-semibold text-lg'>Items Total</Text>
                    </View>
                    <View className='w-1/4 flex-row items-center justify-end mr-5'>
                        <Text className='text-black font-semibold text-lg' numberOfLines={1}>${basketTotal.toFixed(2)}</Text>
                    </View>
                </View>
                <View className='flex-row items-center p-1'>
                    <View className='flex-1 ml-3 mr-2'>
                        <Text className='text-black font-semibold text-lg'>Logistics Fee</Text>
                    </View>
                    <View className='w-1/4 flex-row items-center justify-end mr-5'>
                        <Text className='text-black font-semibold text-lg' numberOfLines={1}>${logisticsFee.toFixed(2)}</Text>
                    </View>
                </View>
                {promoCode && (
                    <View className='flex-row items-center p-1'>
                        <View className='flex-1 ml-3 mr-2'>
                            <Text className='text-black font-semibold text-lg'>Promo Code</Text>
                        </View>
                        <View className='w-1/4 flex-row items-center justify-end mr-5'>
                            <Text className='text-black font-semibold text-lg' numberOfLines={1}>-${(basketTotal-itemsTotal).toFixed(2)}</Text>
                        </View>
                    </View>
                )}
                <View className='flex-row items-center mb-1 p-1'>
                    <View className='flex-1 ml-3 mr-2'>
                        <Text className='text-black font-semibold text-lg'>Total</Text>
                    </View>
                    <View className='w-1/4 flex-row items-center justify-end mr-5'>
                        <Text className='text-black font-semibold text-lg' numberOfLines={1}>${(itemsTotal+logisticsFee).toFixed(2)}</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity 
                    onPress={() => navigation.navigate('CheckoutScreen', {basketTotal: itemsTotal, logisticsFee: logisticsFee})}
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