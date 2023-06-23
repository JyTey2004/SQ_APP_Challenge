import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import { useState, useEffect } from 'react'
import QRCode from "react-qr-code";
import { useDispatch } from 'react-redux';
import { clearBasket } from '../../features/basketSlice';
import { useNavigation } from '@react-navigation/native';

const ItemRedemptionScreen = ({route}) => {
    const groupItemsInBasket = route.params.groupItemsInBasket;
    const navigation = useNavigation();
    // const dispatch = useDispatch();

    const [qrCodeData, setQrCodeData] = useState(''); // State to hold the QR code data

    useEffect(() => {
      // Generate the unique QR code data on mount
      const generatedQrCodeData = JSON.stringify(groupItemsInBasket);
      setQrCodeData(generatedQrCodeData);
    }, []);

    const handleNavigateAndClearBasket = () => {
        // dispatch(clearBasket());
        navigation.navigate('HomeScreen');
      };


  return (
    <SafeAreaView className='flex-1 items-center justify-center bg-white'>
        <View className='w-1/2 items-center justify-center bg-gray-200 p-3 rounded-xl border-2 border-indigo-800'>
            <Text className='text-indigo-800 text-3xl font-bold'>Thank You!</Text>
            <Text className='text-indigo-800 text-xl font-bold mt-2'>Please show QR code upon Pick Up:</Text>
            <ScrollView className='bg-white p-3 rounded-lg w-full mt-2'>
                {Object.entries(groupItemsInBasket).map(([key, items]) => (
                    <View key={key} >
                        <View className='flex flex-row items-center mt-1 p-2'>
                            <Image
                                className='w-20 h-20 rounded-lg'
                                source={{uri: items[0].image}}
                            />
                            <View className='flex-1 ml-2 mr-2'>
                                <Text className='text-black font-base text-lg' numberOfLines={1} ellipsizeMode="tail">{items[0].name}</Text>
                            </View>
                            <Text className='text-black font-base text-lg mr-1' numberOfLines={1} ellipsizeMode="tail">x{items.length}</Text>
                        </View>
                        <Divider className='mt-1 mb-1' style={{ backgroundColor: 'black', borderBottomWidth: 1 }} />
                    </View>
                ))}
            </ScrollView>
            <View>
                <Text className='text-indigo-800 text-xl font-semibold mt-2 mb-1'>QR Code:</Text>
            </View>
            <View className='border-2 border-indigo-800 p-1 rounded-xl'>
                <QRCode value={qrCodeData} size={150} />
            </View>
            <TouchableOpacity
                onPress={handleNavigateAndClearBasket}
                className='bg-indigo-800 p-2 rounded-lg mt-3 w-full items-center justify-center'
            >
                <Text className='text-white text-xl font-semibold'>Home</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default ItemRedemptionScreen