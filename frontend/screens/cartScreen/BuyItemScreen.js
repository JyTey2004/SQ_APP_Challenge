import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image, InteractionManager } from 'react-native'
import React from 'react'
import {SearchBarFlightDetails} from '../../components/SearchBar'
import AirlinesCard from '../../components/AirlinesCard'
import { Ionicons } from '@expo/vector-icons';
import { Divider } from 'react-native-elements';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, selectBasketItems, selectBasketItemsWithId, removeFromBasket } from '../../features/basketSlice';

const BuyItemScreen = ({route}) => {
    const [itemPrice, setNewitemPrice] = useState(null);
    const itemLocationData = route.params.itemLocationData;
    const itemData = route.params.itemData;
    const addItemToCart = () => {
        const item = {
            id: itemLocationData._id,
            name: itemData.itemName,
            price: itemLocationData.price,
            image: itemData.imgUrl,
            location: itemLocationData.location,
            quantity: 1,
        }
        dispatch(addToBasket(item));
    }
    useEffect(() => {
        // Code to run on component mount
        addItemToCart();
        }, []);
    const items = useSelector((state) => selectBasketItemsWithId(state, itemLocationData._id));
    // const items = useSelector(selectBasketItems);
    const dispatch = useDispatch();
    const navigation = useNavigation();



    const removeItemFromCart = () => {
        const id = itemLocationData._id;
        if (!items.length > 0) return;
        dispatch(removeFromBasket({id}));
    }

    useEffect(() => {
        // Code to run on component mount
        setNewitemPrice(itemLocationData.price);
      }, []);
    
    const BundledPrice = () => {
        const price = itemLocationData.price * 0.9;
        setNewitemPrice(price.toFixed(2));
    }

    const ItemOnlyPrice = () => {
        const price = itemLocationData.price;
        setNewitemPrice(price.toFixed(2))
    }


  return (
    <SafeAreaView className="bg-indigo-800">
        <View className='mt-2 ml-3 mr-3'>
            <Text className='text-white text-2xl font-bold'>Flight details:</Text>
            <Text className='text-white text-lg font-semibold mt-1'>Choose your Airlines:</Text>
            <ScrollView
                className='mt-2'
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
                showsVerticalScrollIndicator={false}
                horizontal={true}
            >
                <AirlinesCard
                    imgUrl={require('../../assets/images/SIA.png')}
                />
                <AirlinesCard
                    imgUrl={require('../../assets/images/SCOOT.png')}
                />
                <AirlinesCard
                    imgUrl={require('../../assets/images/STAR_ALLIANCE.jpeg')}
                />
            </ScrollView>

            <Text className='text-white text-lg font-semibold'>Enter your flight number:</Text>

            <View className='mt-2'>
                <SearchBarFlightDetails
                    placeholderInfo='Enter your flight number'
                />
            </View>

            <TouchableOpacity className='bg-white flex-row items-center rounded-lg mt-3 justify-center p-1 mb-3'>
                <Text className='text-indigo-800 text-lg font-semibold'>Validate</Text>
            </TouchableOpacity>
        </View>
        <View className='bg-white'>
            <View className='mt-2 ml-3 mr-3 bg-gray-200 rounded-xl p-3'>
                <Text className='text-black text-xl font-semibold'>Price & Offers: {itemLocationData.location}</Text>
                <Divider style={{ backgroundColor: 'black', marginTop: 10, borderBottomWidth: 2 }} />
                <Text className='text-black text-lg font-semibold mt-3'>Choose your offer:</Text>
                <View className='flex-row items-center mt-3 space-x-2'>
                    <TouchableOpacity 
                        className='flex-1 flex-row items-center bg-indigo-800 rounded-lg p-1 justify-center'
                        onPress={()=>BundledPrice()}
                    >
                        <Text className='text-white text-lg font-semibold'>Buy with Ticket</Text>
                        {/* <Ionicons name="ios-information-circle-outline" size={24} color="black" /> */}
                    </TouchableOpacity>
                    <TouchableOpacity 
                        className='flex-1 flex-row items-center bg-indigo-800 rounded-lg p-1 justify-center'
                        onPress={()=>ItemOnlyPrice()}
                    >
                        <Text className='text-white text-lg font-semibold'>Buy Item Only</Text>
                        {/* <Ionicons name="ios-information-circle-outline" size={24} color="black" /> */}
                    </TouchableOpacity>
                </View>
                <Divider style={{ backgroundColor: 'black', marginTop: 20, borderBottomWidth: 2 }} />
                <View className='flex-row items-center mt-3'>
                    <Text className='flex-1 text-black text-lg font-semibold'>Item Price:</Text>
                    <Text className='text-black text-lg font-base '>S${itemPrice}</Text>
                </View>
                <View className='flex-row items-center mt-3'>
                    <Text className='flex-1 text-black text-lg font-semibold'>Airport Tax:</Text>
                    <Text className='text-black text-lg font-base '>S${itemLocationData.price * 0.0}</Text>
                </View>
                <View className='flex-row items-center mt-3'>
                    <Text className='flex-1 text-black text-lg font-semibold'>KrisFlyer Miles:</Text>
                    <Text className='text-black text-lg font-base '>{(itemLocationData.price*items.length*1.2).toFixed(2)} Miles</Text>
                </View>
                <View className='flex-row items-center mt-3'>
                    <Text className='flex-1 text-black text-lg font-semibold'>Quantity:</Text>
                    <TouchableOpacity 
                        className='mr-1'
                        onPress={removeItemFromCart}
                    >
                        <Ionicons name="remove-circle" size={18} color="black" />
                    </TouchableOpacity>
                    <Text className='text-black text-lg font-base '>{items.length}</Text>
                    <TouchableOpacity 
                        className='ml-1'
                        onPress={addItemToCart}
                    >
                        <Ionicons name="add-circle" size={18} color="black" />
                    </TouchableOpacity>
                </View>
                <Divider style={{ backgroundColor: 'black', marginTop: 10, borderBottomWidth: 2 }} />
                <View className='flex-row items-center mt-3'>
                    <Text className='flex-1 text-black text-lg font-semibold'>Total Price:</Text>
                    <Text className='text-black text-lg font-semibold '>S${(itemPrice*items.length.toFixed(2))}</Text>
                </View>
            </View>
            <View className='mt-1 ml-3 mr-3'>
                <TouchableOpacity 
                    className='bg-indigo-800 flex-row items-center rounded-lg mt-3 justify-center p-1 mb-3'
                    onPress={()=>navigation.navigate('ItemCart', {itemData: itemData})}  
                >
                    <Text className='text-white text-lg font-semibold'>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>
  )
}

export default BuyItemScreen