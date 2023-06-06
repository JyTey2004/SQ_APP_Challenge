import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';


const apiUrl = 'https://apigw.singaporeair.com/api/uat/v1/commercial/flightavailability/get';

const FlightDeals = ({searchPhraseDepart, searchPhraseDestination}) => {
  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const requestData = {
      clientUUID: '05b2fa78-a0f8-4357-97fe-d18506618c3f',
      request: {
        itineraryDetails: [
          {
            originAirportCode: {searchPhraseDepart},
        destinationAirportCode: {searchPhraseDestination},
            departureDate: '2023-11-01',
            returnDate: '2023-11-10'
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
      setResponseData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const renderListItem = ({ item }) => (
    <View>
      <Text>{item.response}</Text>
      <Text>{item.property2}</Text>
      {/* Render other properties as needed */}
    </View>
  );

  return (
    <View>
      <FlatList
        data={responseData}
        renderItem={renderListItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default FlightDeals;