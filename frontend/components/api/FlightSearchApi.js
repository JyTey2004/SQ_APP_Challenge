import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Text } from 'react-native';

const apiUrl = 'https://apigw.singaporeair.com/api/uat/v1/commercial/flightavailability/get';

function formatDate() {
  var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}


const FlightSearch = async (originAirportCode, destinationAirportCode, navigation) => {
    const requestData = {
      clientUUID: '05b2fa78-a0f8-4357-97fe-d18506618c3f',
      request: {
        itineraryDetails: [
          {
            originAirportCode: originAirportCode,
            destinationAirportCode: destinationAirportCode,
            departureDate: '2023-06-30',
            returnDate: '2023-06-31'
          }
        ],
        cabinClass: 'Y',
        adultCount: 1,
        childCount: 0,
        infantCount: 0
      }
    };

    const headers = {
      'Accept': 'application/json',
      'apikey': '3s3q69sm4fyufzjv4jyh72ff',
      'Content-Type': 'application/json'
    };

    try {
      const response = await axios.post(apiUrl, requestData, { headers });
      console.log(response.data);
      // Handle the response data or update state as needed
      navigation.navigate('FlightDeals', { responseData: response.data });
    } catch (error) {
      console.error(error);
      // Handle any errors
    }
};

const FlightSearchButton = ({ originAirportCode, destinationAirportCode }) => {
    const navigation = useNavigation();
    console.log(originAirportCode);
    console.log(destinationAirportCode)

    return (
      <TouchableOpacity
            onPress={() => FlightSearch(originAirportCode, destinationAirportCode, navigation)}
            className=' flex-1 bg-white mt-3 items-center flex-row justify-center space-x-1 rounded-lg'
            >
        <Text className='text-indigo-800 text-lg font-bold'>Search for Deals</Text>
        <Ionicons name="paper-plane" color='#3730a3' size={20}/>
      </TouchableOpacity>
    );
  };

export default FlightSearchButton;