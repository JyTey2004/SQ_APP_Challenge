const axios = require('axios');

async function testGetAllMerchants() {
  try {
    const response = await axios.get('http://localhost:8080/merchants');
    if (response.status === 200) {
      console.log('Merchants:', response.data);
    } else {
      console.log('Failed to get merchants. Status:', response.status);
    }
  } catch (error) {
    console.error('Error occurred while getting merchants:', error);
  }
}

testGetAllMerchants();
