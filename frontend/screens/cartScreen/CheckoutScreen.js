import { Alert, View, SafeAreaView, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState, useMemo  } from 'react'
import { Divider } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { selectBasketTotal } from '../../features/basketSlice'
import { selectBasketItems } from '../../features/basketSlice'
import { useNavigation } from '@react-navigation/native'
import { StripeProvider, usePaymentSheet } from '@stripe/stripe-react-native';
import { URL_PAYMENT_SVC } from '../../configs'

const CheckoutScreen = ({route}) => {
    const items = useSelector(selectBasketItems);
    const [groupItemsInBasket, setGroupItemsInBasket] = useState([]);
    const navigation = useNavigation();
    const {initPaymentSheet, presentPaymentSheet, loading} = usePaymentSheet();
    const basketTotal = route.params.basketTotal;
    const logisticsFee = route.params.logisticsFee;

    useEffect(() => {
        initialisePaymentSheet();
    }, []);
    
    const initialisePaymentSheet = async () => {
        const {
            paymentIntent,
            ephemeralKey,
            customer
        } = await fetchPaymentSheetParams();
        console.log(paymentIntent);

        const {error} = await initPaymentSheet({
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: paymentIntent,
            merchantDisplayName: 'Example Inc.',
        //   applePay: {
        //     merchantCountryCode: 'US',
        //   },
        //   googlePay: {
        //     merchantCountryCode: 'US',
        //     testEnv: true,
        //     currencyCode: 'usd',
        //   },
            allowsDelayedPaymentMethods: true,
        //   returnURL: 'stripe-example://stripe-redirect',
        });
        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        }
    };

    const fetchPaymentSheetParams = async () => {
        console.log(basketTotal, logisticsFee);
        const response = await fetch(URL_PAYMENT_SVC, {
          method: 'POST',
          body: JSON.stringify({
            basketTotal: basketTotal,
            logisticsFee: logisticsFee
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { paymentIntent, ephemeralKey, customer, publishableKey } = await response.json();
    
        return {
          paymentIntent,
          ephemeralKey,
          customer,
        };
    };

    const handlePayment = async () => {
        const {error} = await presentPaymentSheet();

        if (error) {
            Alert.alert(`Error code: ${error.code}`, error.message);
        } else {
            Alert.alert('Success', 'Thank You For Your Purchase!');
            navigation.navigate('ItemRedemptionScreen', {groupItemsInBasket: groupItemsInBasket});
        }
    }

    useMemo(() => {
        const groupedItems = items.reduce((results, item) => {
            (results[item.id] = results[item.id] || []).push(item);
            return results;
        }, {});
        setGroupItemsInBasket(groupedItems);
    }, [items]);


  return (
    <SafeAreaView className='bg-indigo-800'>
        <View className='items-center mt-2 mb-2'>
            <Text className='text-white text-2xl font-bold'>Checkout</Text>
        </View>
        <View className='flex-1 bg-white'>
            <Divider className='ml-3 mr-3 mb-1' style={{ backgroundColor: 'black', borderBottomWidth: 2 }} />
            <View className='ml-3 mr-3 mt-2'>
                    <Text className='text-black font-bold text-xl mb-1'>Choose Collection Method:</Text>
                    <Divider className='mt-2 mb-3' style={{ backgroundColor: 'black', borderBottomWidth: 2 }} />
            </View>
            <ScrollView className='bg-gray-200 rounded-lg ml-3 mr-3 mt-1 flex-1'>
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
            <StripeProvider
                publishableKey='pk_test_51NL0E4CFUh3VvAw0wYvBNks6ohwVJaDmt05q4odz8sz7qg7d0UXa84FAQQ6TGpfN0vDwEDO1TdZZHW0irT1Ajioz00Mhzfm4m6'
            >
                <View className='flex-1 ml-3 mr-3 mt-3 mb-3'>
                    <TouchableOpacity
                        className='bg-indigo-800 items-center rounded-lg p-2 justify-center'
                        onPress={handlePayment}
                    >
                        <Text className='text-white font-semibold text-xl'>Pay</Text>
                    </TouchableOpacity>
                </View>
            </StripeProvider>
        </View>
    </SafeAreaView>
  )
}

export default CheckoutScreen