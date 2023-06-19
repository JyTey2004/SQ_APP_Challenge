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
const merchantData1 = {
  name: 'Dior Perfumes',
  category: 'Perfumes and Cosmetics',
  offer: 'Extra 20% Miles',
  mainImg: 'https://t4.ftcdn.net/jpg/02/88/39/77/240_F_288397700_gA1Yy25V25liJG85dX6N5hTOmtzDiW7F.jpg',
  locations: ['Singapore Changi Airport, SIN',
              'London Heathrow Airport, LHR', 
              'Paris Charles de Gaulle Airport, CDG', 
              'Tokyo Narita International Airport, NRT',
              'Los Angeles International Airport, LAX',
              'Dubai International Airport, DXB',],
  items: [
    {
      name: 'Dior Sauvage EDP 100ml',
      image: 'https://images.pexels.com/photos/12562775/pexels-photo-12562775.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'A radically fresh composition, dictated by a name that has the ring of a manifesto. That was the way François Demachy, Dior Perfumer-Creator, wanted it: raw and noble all at once. Natural ingredients, selected with extreme care, prevail in excessive doses. Radiant top notes burst with the juicy freshness of Reggio di Calabria Bergamot. Ambroxan, derived from precious ambergris, unleashes a powerfully woody trail. Sauvage is an act of creation inspired by wide-open spaces. An ozone blue sky sprawled above a rocky landscape, white-hot beneath the desert sun.',
      prices: [
        { location: 'SIN', price: 110.99 },
        { location: 'LHR', price: 120.99 },
        { location: 'CDG', price: 100.99 },
        { location: 'NRT', price: 160.99 },
        { location: 'LAX', price: 180.99 },
        { location: 'DXB', price: 200.99 }
      ],
    },
    {
      name: 'Miss Dior EDP 100ml',
      image: 'https://images.pexels.com/photos/13662407/pexels-photo-13662407.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'The new Miss Dior Eau de Parfum reveals the femininity of a sensual floral. Its heart is a floral declaration that combines the beauty of Grasse rose with the boldness of Damascus rose, both wrapped in a ribbon of fresh notes of Calabrian bergamot. This handcrafted creation is woven with rosewood from French Guiana and pink pepper from Reunion Island for heightened character. A Miss Dior that will leave you lovestruck.',
      prices: [
        { location: 'SIN', price: 99.99 },
        { location: 'LHR', price: 110.99 },
        { location: 'CDG', price: 79.99 },
        { location: 'NRT', price: 120.99 },
        { location: 'LAX', price: 100.99 },
        { location: 'DXB', price: 130.99}
      ],
    },
    {
      name: 'Dior J\'adore EDP 100ml',
      image: 'https://images.pexels.com/photos/11059440/pexels-photo-11059440.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'J\'adore Eau de Parfum is the great women\'s floral fragrance by Dior. A bouquet finely crafted down to the last detail, like a custom-made flower. Essence of Ylang-Ylang from the Comoros unfurls its floral-fruity notes and instills a soft exotic touch. Damascus Rose, sophisticated and exuberant, then comes to warm the senses. Last but not least, a duo of Jasmines echo one another in a perfect embrace. Jasmine Grandiflorum from Grasse, the quintessence of a noble floral, exudes its delicate sensuality, tinged with fruit and sun and works in harmony with the more carnal quality of Indian Jasmine Sambac, "flower of the gods", with its warm facets of incredibly sensual and enveloping orange blossom.',
      prices: [
        { location: 'SIN', price: 89.99 },
        { location: 'LHR', price: 100.99 },
        { location: 'CDG', price: 69.99 },
        { location: 'NRT', price: 110.99 },
        { location: 'LAX', price: 90.99 },
        { location: 'DXB', price: 120.99 }
      ],
    },
    {
      name: 'Dior Sauvage EDT 100ml',
      image: 'https://images.pexels.com/photos/12562775/pexels-photo-12562775.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'A radically fresh composition, dictated by a name that has the ring of a manifesto. That was the way François Demachy, Dior Perfumer-Creator, wanted it: raw and noble all at once. Natural ingredients, selected with extreme care, prevail in excessive doses. Radiant top notes burst with the juicy freshness of Reggio di Calabria Bergamot. Ambroxan, derived from precious ambergris, unleashes a powerfully woody trail. Sauvage is an act of creation inspired by wide-open spaces. An ozone blue sky sprawled above a rocky landscape, white-hot beneath the desert sun.',
      prices: [
        { location: 'SIN', price: 100.99 },
        { location: 'LHR', price: 110.99 },
        { location: 'CDG', price: 90.99 },
        { location: 'NRT', price: 150.99 },
        { location: 'LAX', price: 170.99 },
        { location: 'DXB', price: 190.99 }
      ],
    },
    {
      name: 'Miss Dior EDt 100ml',
      image: 'https://images.pexels.com/photos/13662407/pexels-photo-13662407.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'The new Miss Dior Eau de Parfum reveals the femininity of a sensual floral. Its heart is a floral declaration that combines the beauty of Grasse rose with the boldness of Damascus rose, both wrapped in a ribbon of fresh notes of Calabrian bergamot. This handcrafted creation is woven with rosewood from French Guiana and pink pepper from Reunion Island for heightened character. A Miss Dior that will leave you lovestruck.',
      prices: [
        { location: 'SIN', price: 90.99 },
        { location: 'LHR', price: 110.99 },
        { location: 'CDG', price: 79.99 },
        { location: 'NRT', price: 100.99 },
        { location: 'LAX', price: 110.99 },
        { location: 'DXB', price: 120.99 }
      ],
    },
    {
      name: 'Dior J\'adore EDP 100ml',
      image: 'https://images.pexels.com/photos/11059440/pexels-photo-11059440.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'J\'adore Eau de Parfum is the great women\'s floral fragrance by Dior. A bouquet finely crafted down to the last detail, like a custom-made flower. Essence of Ylang-Ylang from the Comoros unfurls its floral-fruity notes and instills a soft exotic touch. Damascus Rose, sophisticated and exuberant, then comes to warm the senses. Last but not least, a duo of Jasmines echo one another in a perfect embrace. Jasmine Grandiflorum from Grasse, the quintessence of a noble floral, exudes its delicate sensuality, tinged with fruit and sun and works in harmony with the more carnal quality of Indian Jasmine Sambac, "flower of the gods", with its warm facets of incredibly sensual and enveloping orange blossom.',
      prices: [
        { location: 'SIN', price: 85.99 },
        { location: 'LHR', price: 90.99 },
        { location: 'CDG', price: 69.99 },
        { location: 'NRT', price: 90.99 },
        { location: 'LAX', price: 90.99 },
        { location: 'DXB', price: 100.99 }
      ],
    },
  ],
};


const merchantData2 = {
  name: 'Chanel Perfumes',
  category: 'Perfumes and Cosmetics',
  offer: 'Extra 20% Miles',
  mainImg: 'https://st4.depositphotos.com/1166351/24970/i/600/depositphotos_249707456-stock-photo-paris-france-july-21-2017.jpg',
  locations: ['Singapore Changi Airport, SIN',
              'London Heathrow Airport, LHR',
              'Paris Charles de Gaulle Airport, CDG',
              'Tokyo Narita International Airport, NRT',
              'Los Angeles International Airport, LAX',
              'Dubai International Airport, DXB',],
  items: [
    {
      name: 'Chanel Coco Mademoiselle EDP 100ml',
      image: 'https://st4.depositphotos.com/16183534/41901/i/600/depositphotos_419014864-stock-photo-bottle-chanel-perfume-uniform-yellow.jpg',
      description: 'Coco Mademoiselle Eau de Parfum Intense is a woody and ambery oriental. A voluptuous oriental fragrance with a strong personality, yet surprisingly fresh. Sparks of fresh and vibrant orange immediately awaken the senses. A clear and sensual heart reveals the transparent accords of Grasse Jasmine and May Rose. The scent finally unfurls with the vibrant accents of Patchouli and Vetiver.',
      prices: [
        { location: 'SIN', price: 110.99 },
        { location: 'LHR', price: 120.99 },
        { location: 'CDG', price: 100.99 },
        { location: 'NRT', price: 160.99 },
        { location: 'LAX', price: 180.99 },
        { location: 'DXB', price: 200.99 }
      ],
    },
    {
      name: 'Chanel Chance EDP 100ml',
      image: 'https://st4.depositphotos.com/26496348/28240/i/600/depositphotos_282401426-stock-photo-scottsdale-arizona-usa-april-2019.jpg',
      description: 'A floral fragrance in a round bottle. Unpredictable, in perpetual movement, CHANCE sweeps you into its whirlwind of happiness and fantasy. An olfactory encounter with chance.',
      prices: [
        { location: 'SIN', price: 99.99 },
        { location: 'LHR', price: 110.99 },
        { location: 'CDG', price: 79.99 },
        { location: 'NRT', price: 120.99 },
        { location: 'LAX', price: 100.99 },
        { location: 'DXB', price: 130.99}
      ],
    },
    {
      name: 'Chanel No.5 EDP 100ml',
      image: 'https://st4.depositphotos.com/22025564/30613/i/600/depositphotos_306136386-stock-photo-coco-chanel-perfume-bottle-watercolor.jpg',
      description: 'The now and forever fragrance. The ultimate in femininity. An elegant, luxurious spray closest in strength and character to the parfum form. The sleek, portable signature bottle is perfect for the dressing table or travel.',
      prices: [
        { location: 'SIN', price: 89.99 },
        { location: 'LHR', price: 100.99 },
        { location: 'CDG', price: 69.99 },
        { location: 'NRT', price: 110.99 },
        { location: 'LAX', price: 90.99 },
        { location: 'DXB', price: 120.99 }
      ],
    },
    {
      name: 'Chanel Bleu De Chanel EDP 100ml',
      image: 'https://images.pexels.com/photos/11059440/pexels-photo-11059440.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'Discover the allure of Bleu de Chanel, a timeless fragrance for the modern man. With refreshing citrus notes, aromatic spices, and a woody base, this captivating scent embodies strength and sophistication. Make a lasting impression with Bleu de Chanel.',
      prices: [
        { location: 'SIN', price: 85.99 },
        { location: 'LHR', price: 90.99 },
        { location: 'CDG', price: 69.99 },
        { location: 'NRT', price: 90.99 },
        { location: 'LAX', price: 90.99 },
        { location: 'DXB', price: 100.99 }
      ],
    },
  ],
}

// Help me insert one more merchant 

const merchantData3 = {
    name: 'Louis Vuitton Perfumes',
    category: 'Perfumes and Cosmetics',
    offer: 'Extra 20% Miles',
    mainImg: 'https://st4.depositphotos.com/1166351/24970/i/600/depositphotos_249707456-stock-photo-paris-france-july-21-2017.jpg',
    locations: ['Singapore Changi Airport, SIN',
                'London Heathrow Airport, LHR',
                'Paris Charles de Gaulle Airport, CDG',
                'Tokyo Narita International Airport, NRT',
                'Los Angeles International Airport, LAX',
                'Dubai International Airport, DXB',
              ],
    items: [
      {
        name: 'LV Heures d\'Absence EDP 100ml',
        image: 'https://st4.depositphotos.com/16183534/41901/i/600/depositphotos_419014864-stock-photo-bottle-chanel-perfume-uniform-yellow.jpg',
        description: 'Heures d\'Absence is a feminine perfume by Louis Vuitton. The scent was launched in 1927 and the fragrance was created by perfumer Jacques Cavallier',
        prices: [
          { location: 'SIN', price: 110.99 },
          { location: 'LHR', price: 120.99 },
          { location: 'CDG', price: 100.99 },
          { location: 'NRT', price: 160.99 },
          { location: 'LAX', price: 180.99 },
          { location: 'DXB', price: 200.99 }
        ],
      },
      {
        name: 'LV Rose des Vents EDP 100ml',
        image: 'https://st4.depositphotos.com/26496348/28240/i/600/depositphotos_282401426-stock-photo-scottsdale-arizona-usa-april-2019.jpg',
        description: 'Rose des Vents is a feminine perfume by Louis Vuitton. The scent was launched in 2016 and the fragrance was created by perfumer Jacques Cavallier',
        prices: [
          { location: 'SIN', price: 99.99 },
          { location: 'LHR', price: 110.99 },
          { location: 'CDG', price: 79.99 },
          { location: 'NRT', price: 120.99 },
          { location: 'LAX', price: 100.99 },
          { location: 'DXB', price: 130.99}
        ],
      },
      {
        name: 'LV Apogée EDP 100ml',
        image: 'https://st4.depositphotos.com/22025564/30613/i/600/depositphotos_306136386-stock-photo-coco-chanel-perfume-bottle-watercolor.jpg',
        description: 'Apogée is a feminine perfume by Louis Vuitton. The scent was launched in 2016 and the fragrance was created by perfumer Jacques Cavallier',
        prices: [
          { location: 'SIN', price: 89.99 },
          { location: 'LHR', price: 100.99 },
          { location: 'CDG', price: 69.99 },
          { location: 'NRT', price: 110.99 },
          { location: 'LAX', price: 90.99 },
          { location: 'DXB', price: 120.99 }
        ],
      },
      {
        name: 'LV Matière Noire EDP 100ml',
        image: 'https://images.pexels.com/photos/11059440/pexels-photo-11059440.jpeg?auto=compress&cs=tinysrgb&w=1600',
        description: 'Matière Noire is a feminine perfume by Louis Vuitton. The scent was launched in 2016 and the fragrance was created by perfumer Jacques Cavallier',
        prices: [
          { location: 'SIN', price: 85.99 },
          { location: 'LHR', price: 90.99 },
          { location: 'CDG', price: 69.99 },
          { location: 'NRT', price: 90.99 },
          { location: 'LAX', price: 90.99 },
          { location: 'DXB', price: 100.99 }
        ],
      },
    ],
  }



createMerchant(merchantData1);
createMerchant(merchantData2);
createMerchant(merchantData3);