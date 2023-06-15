async function createMerchant(merchantData) {
  try {
    const response = await fetch('http://localhost:8080/merchants/submit', {
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
  name: 'Dior Perfumes',
  category: 'Perfumes and Cosmetics',
  offer: 'Extra 20% Miles',
  mainImg: 'https://t4.ftcdn.net/jpg/02/88/39/77/240_F_288397700_gA1Yy25V25liJG85dX6N5hTOmtzDiW7F.jpg',
  locations: ['Singapore Changi Airport, SIN',
              'London Heathrow Airport, LHR', 
              'Paris Charles de Gaulle Airport, CDG', 
              'Tokyo Narita International Airport, NRT',
              'Los Angeles International Airport, LAX',],
  items: [
    {
      name: 'Dior Sauvage EDP 100ml',
      image: 'https://images.pexels.com/photos/12562775/pexels-photo-12562775.jpeg?auto=compress&cs=tinysrgb&w=1600',
      prices: [
        { location: 'SIN', price: 110.99 },
        { location: 'LHR', price: 120.99 },
        { location: 'CDG', price: 100.99 },
        { location: 'NRT', price: 160.99 },
        { location: 'LAX', price: 180.99 },
      ],
    },
    {
      name: 'Miss Dior EDP 100ml',
      image: 'https://images.pexels.com/photos/13662407/pexels-photo-13662407.jpeg?auto=compress&cs=tinysrgb&w=1600',
      prices: [
        { location: 'SIN', price: 99.99 },
        { location: 'LHR', price: 110.99 },
        { location: 'CDG', price: 79.99 },
        { location: 'NRT', price: 120.99 },
        { location: 'LAX', price: 100.99 },
      ],
    },
    {
      name: 'Dior J\'adore EDP 100ml',
      image: 'https://images.pexels.com/photos/11059440/pexels-photo-11059440.jpeg?auto=compress&cs=tinysrgb&w=1600',
      prices: [
        { location: 'SIN', price: 89.99 },
        { location: 'LHR', price: 100.99 },
        { location: 'CDG', price: 69.99 },
        { location: 'NRT', price: 110.99 },
        { location: 'LAX', price: 90.99 },
      ],
    },
    {
      name: 'Dior Sauvage EDT 100ml',
      image: 'https://images.pexels.com/photos/12562775/pexels-photo-12562775.jpeg?auto=compress&cs=tinysrgb&w=1600',
      prices: [
        { location: 'SIN', price: 100.99 },
        { location: 'LHR', price: 110.99 },
        { location: 'CDG', price: 90.99 },
        { location: 'NRT', price: 150.99 },
        { location: 'LAX', price: 170.99 },
      ],
    },
    {
      name: 'Miss Dior EDt 100ml',
      image: 'https://images.pexels.com/photos/13662407/pexels-photo-13662407.jpeg?auto=compress&cs=tinysrgb&w=1600',
      prices: [
        { location: 'SIN', price: 90.99 },
        { location: 'LHR', price: 110.99 },
        { location: 'CDG', price: 79.99 },
        { location: 'NRT', price: 100.99 },
        { location: 'LAX', price: 110.99 },
      ],
    },
    {
      name: 'Dior J\'adore EDP 100ml',
      image: 'https://images.pexels.com/photos/11059440/pexels-photo-11059440.jpeg?auto=compress&cs=tinysrgb&w=1600',
      prices: [
        { location: 'SIN', price: 85.99 },
        { location: 'LHR', price: 90.99 },
        { location: 'CDG', price: 69.99 },
        { location: 'NRT', price: 90.99 },
        { location: 'LAX', price: 90.99 },
      ],
    },
  ],
};

createMerchant(merchantData);
