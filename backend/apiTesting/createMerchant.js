async function createMerchant(merchantData) {
  try {
    const response = await fetch('http://localhost:8080/merchants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(merchantData),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create merchant');
    }

    const createdMerchant = await response.json();
    console.log('Merchant created:', createdMerchant);
  } catch (error) {
    console.error('Failed to create merchant:', error.message);
  }
}

// Example usage
const merchantData = {
  name: 'Example Merchant',
  category: 'Example Category',
  locations: ['Location 1', 'Location 2'],
  items: [
    {
      name: 'Item 1',
      image: 'item1.jpg',
      prices: [
        { location: 'Location 1', price: 10.99 },
        { location: 'Location 2', price: 12.99 },
      ],
    },
    {
      name: 'Item 2',
      image: 'item2.jpg',
      prices: [
        { location: 'Location 1', price: 15.99 },
        { location: 'Location 2', price: 17.99 },
      ],
    },
  ],
};

createMerchant(merchantData);
