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
              'Soekarno-Hatta International Airport, CGK',
              'Beijing Daxing International Airport, PKX', 
              'Melbourne Airport, MEL', 
              'Tokyo Narita International Airport, NRT',
              'Incheon International Airport, ICN',
            ],
  items: [
    {
      name: 'Dior Sauvage EDP 100ml',
      image: 'https://images.pexels.com/photos/12562775/pexels-photo-12562775.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'A radically fresh composition, dictated by a name that has the ring of a manifesto. That was the way François Demachy, Dior Perfumer-Creator, wanted it: raw and noble all at once. Natural ingredients, selected with extreme care, prevail in excessive doses. Radiant top notes burst with the juicy freshness of Reggio di Calabria Bergamot. Ambroxan, derived from precious ambergris, unleashes a powerfully woody trail. Sauvage is an act of creation inspired by wide-open spaces. An ozone blue sky sprawled above a rocky landscape, white-hot beneath the desert sun.',
      prices: [
        { location: 'SIN', price: 110.99 },
        { location: 'CGK', price: 120.99 },
        { location: 'PKX', price: 100.99 },
        { location: 'MEL', price: 160.99 },
        { location: 'NRT', price: 180.99 },
        { location: 'ICN', price: 200.99 }
      ],
    },
    {
      name: 'Miss Dior EDP 100ml',
      image: 'https://images.pexels.com/photos/13662407/pexels-photo-13662407.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'The new Miss Dior Eau de Parfum reveals the femininity of a sensual floral. Its heart is a floral declaration that combines the beauty of Grasse rose with the boldness of Damascus rose, both wrapped in a ribbon of fresh notes of Calabrian bergamot. This handcrafted creation is woven with rosewood from French Guiana and pink pepper from Reunion Island for heightened character. A Miss Dior that will leave you lovestruck.',
      prices: [
        { location: 'SIN', price: 99.99 },
        { location: 'CGK', price: 110.99 },
        { location: 'PKX', price: 79.99 },
        { location: 'MEL', price: 120.99 },
        { location: 'NRT', price: 100.99 },
        { location: 'ICN', price: 130.99}
      ],
    },
    {
      name: 'Dior J\'adore EDP 100ml',
      image: 'https://images.pexels.com/photos/11059440/pexels-photo-11059440.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'J\'adore Eau de Parfum is the great women\'s floral fragrance by Dior. A bouquet finely crafted down to the last detail, like a custom-made flower. Essence of Ylang-Ylang from the Comoros unfurls its floral-fruity notes and instills a soft exotic touch. Damascus Rose, sophisticated and exuberant, then comes to warm the senses. Last but not least, a duo of Jasmines echo one another in a perfect embrace. Jasmine Grandiflorum from Grasse, the quintessence of a noble floral, exudes its delicate sensuality, tinged with fruit and sun and works in harmony with the more carnal quality of Indian Jasmine Sambac, "flower of the gods", with its warm facets of incredibly sensual and enveloping orange blossom.',
      prices: [
        { location: 'SIN', price: 89.99 },
        { location: 'CGK', price: 100.99 },
        { location: 'PKX', price: 69.99 },
        { location: 'MEL', price: 110.99 },
        { location: 'NRT', price: 90.99 },
        { location: 'ICN', price: 120.99 }
      ],
    },
    {
      name: 'Dior Sauvage EDT 100ml',
      image: 'https://images.pexels.com/photos/12562775/pexels-photo-12562775.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'A radically fresh composition, dictated by a name that has the ring of a manifesto. That was the way François Demachy, Dior Perfumer-Creator, wanted it: raw and noble all at once. Natural ingredients, selected with extreme care, prevail in excessive doses. Radiant top notes burst with the juicy freshness of Reggio di Calabria Bergamot. Ambroxan, derived from precious ambergris, unleashes a powerfully woody trail. Sauvage is an act of creation inspired by wide-open spaces. An ozone blue sky sprawled above a rocky landscape, white-hot beneath the desert sun.',
      prices: [
        { location: 'SIN', price: 100.99 },
        { location: 'CGK', price: 110.99 },
        { location: 'PKX', price: 90.99 },
        { location: 'MEL', price: 150.99 },
        { location: 'NRT', price: 170.99 },
        { location: 'ICN', price: 190.99 }
      ],
    },
    {
      name: 'Miss Dior EDT 100ml',
      image: 'https://images.pexels.com/photos/13662407/pexels-photo-13662407.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'The new Miss Dior Eau de Parfum reveals the femininity of a sensual floral. Its heart is a floral declaration that combines the beauty of Grasse rose with the boldness of Damascus rose, both wrapped in a ribbon of fresh notes of Calabrian bergamot. This handcrafted creation is woven with rosewood from French Guiana and pink pepper from Reunion Island for heightened character. A Miss Dior that will leave you lovestruck.',
      prices: [
        { location: 'SIN', price: 90.99 },
        { location: 'CGK', price: 110.99 },
        { location: 'PKX', price: 79.99 },
        { location: 'MEL', price: 100.99 },
        { location: 'NRT', price: 110.99 },
        { location: 'ICN', price: 120.99 }
      ],
    },
    {
      name: 'Dior J\'adore EDP 100ml',
      image: 'https://images.pexels.com/photos/11059440/pexels-photo-11059440.jpeg?auto=compress&cs=tinysrgb&w=1600',
      description: 'J\'adore Eau de Parfum is the great women\'s floral fragrance by Dior. A bouquet finely crafted down to the last detail, like a custom-made flower. Essence of Ylang-Ylang from the Comoros unfurls its floral-fruity notes and instills a soft exotic touch. Damascus Rose, sophisticated and exuberant, then comes to warm the senses. Last but not least, a duo of Jasmines echo one another in a perfect embrace. Jasmine Grandiflorum from Grasse, the quintessence of a noble floral, exudes its delicate sensuality, tinged with fruit and sun and works in harmony with the more carnal quality of Indian Jasmine Sambac, "flower of the gods", with its warm facets of incredibly sensual and enveloping orange blossom.',
      prices: [
        { location: 'SIN', price: 85.99 },
        { location: 'CGK', price: 90.99 },
        { location: 'PKX', price: 69.99 },
        { location: 'MEL', price: 90.99 },
        { location: 'NRT', price: 90.99 },
        { location: 'ICN', price: 100.99 }
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
              'Soekarno-Hatta International Airport, CGK',
              'Beijing Daxing International Airport, PKX', 
              'Melbourne Airport, MEL', 
              'Tokyo Narita International Airport, NRT',
              'Incheon International Airport, ICN',
            ],
  items: [
    {
      name: 'Chanel Coco Mademoiselle EDP 100ml',
      image: 'https://st4.depositphotos.com/16183534/41901/i/600/depositphotos_419014864-stock-photo-bottle-chanel-perfume-uniform-yellow.jpg',
      description: 'Coco Mademoiselle Eau de Parfum Intense is a woody and ambery oriental. A voluptuous oriental fragrance with a strong personality, yet surprisingly fresh. Sparks of fresh and vibrant orange immediately awaken the senses. A clear and sensual heart reveals the transparent accords of Grasse Jasmine and May Rose. The scent finally unfurls with the vibrant accents of Patchouli and Vetiver.',
      prices: [
        { location: 'SIN', price: 110.99 },
        { location: 'CGK', price: 120.99 },
        { location: 'PKX', price: 100.99 },
        { location: 'MEL', price: 160.99 },
        { location: 'NRT', price: 180.99 },
        { location: 'ICN', price: 200.99 }
      ],
    },
    {
      name: 'Chanel Chance EDP 100ml',
      image: 'https://st4.depositphotos.com/26496348/28240/i/600/depositphotos_282401426-stock-photo-scottsdale-arizona-usa-april-2019.jpg',
      description: 'A floral fragrance in a round bottle. Unpredictable, in perpetual movement, CHANCE sweeps you into its whirlwind of happiness and fantasy. An olfactory encounter with chance.',
      prices: [
        { location: 'SIN', price: 99.99 },
        { location: 'CGK', price: 110.99 },
        { location: 'PKX', price: 79.99 },
        { location: 'MEL', price: 120.99 },
        { location: 'NRT', price: 100.99 },
        { location: 'ICN', price: 130.99}
      ],
    },
    {
      name: 'Chanel No.5 EDP 100ml',
      image: 'https://st4.depositphotos.com/22025564/30613/i/600/depositphotos_306136386-stock-photo-coco-chanel-perfume-bottle-watercolor.jpg',
      description: 'The now and forever fragrance. The ultimate in femininity. An elegant, luxurious spray closest in strength and character to the parfum form. The sleek, portable signature bottle is perfect for the dressing table or travel.',
      prices: [
        { location: 'SIN', price: 89.99 },
        { location: 'CGK', price: 100.99 },
        { location: 'PKX', price: 69.99 },
        { location: 'MEL', price: 110.99 },
        { location: 'NRT', price: 90.99 },
        { location: 'ICN', price: 120.99 }
      ],
    },
    {
      name: 'Chanel Bleu De Chanel EDP 100ml',
      image: 'https://www.chanel.com/images//t_one//w_0.51,h_0.51,c_crop/q_auto:good,f_auto,fl_lossy,dpr_1.2/w_1240/bleu-de-chanel-eau-de-parfum-spray-3-4fl-oz--packshot-default-107360-9518357086238.jpg',
      description: 'Discover the allure of Bleu de Chanel, a timeless fragrance for the modern man. With refreshing citrus notes, aromatic spices, and a woody base, this captivating scent embodies strength and sophistication. Make a lasting impression with Bleu de Chanel.',
      prices: [
        { location: 'SIN', price: 85.99 },
        { location: 'CGK', price: 90.99 },
        { location: 'PKX', price: 69.99 },
        { location: 'MEL', price: 90.99 },
        { location: 'NRT', price: 90.99 },
        { location: 'ICN', price: 100.99 }
      ],
    },
  ],
}

// Help me insert one more merchant 

const merchantData3 = {
    name: 'Louis Vuitton Perfumes',
    category: 'Perfumes and Cosmetics',
    offer: 'Extra 20% Miles',
    mainImg: 'https://t3.ftcdn.net/jpg/02/99/20/42/240_F_299204260_gc8tgOwSvMzaVB9d6vFfGFoRm6GbEtfl.jpg',
    locations: ['Singapore Changi Airport, SIN',
                'Soekarno-Hatta International Airport, CGK',
                'Beijing Daxing International Airport, PKX', 
                'Melbourne Airport, MEL', 
                'Tokyo Narita International Airport, NRT',
                'Incheon International Airport, ICN',
    ],
    items: [
      {
        name: 'LV Heures d\'Absence EDP 100ml',
        image: 'https://ap.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-heures-d-absence-collections--LP0113_PM2_Front%20view.png?wid=1240&hei=1240',
        description: 'Heures d\'Absence is a feminine perfume by Louis Vuitton. The scent was launched in 1927 and the fragrance was created by perfumer Jacques Cavallier',
        prices: [
          { location: 'SIN', price: 110.99 },
          { location: 'CGK', price: 120.99 },
          { location: 'PKX', price: 100.99 },
          { location: 'MEL', price: 160.99 },
          { location: 'NRT', price: 180.99 },
          { location: 'ICN', price: 200.99 }
        ],
      },
      {
        name: 'LV Rose des Vents EDP 100ml',
        image: 'https://ap.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-rose-des-vents-collections--LP0005_PM2_Front%20view.png?wid=1240&hei=1240',
        description: 'Rose des Vents is a feminine perfume by Louis Vuitton. The scent was launched in 2016 and the fragrance was created by perfumer Jacques Cavallier',
        prices: [
          { location: 'SIN', price: 99.99 },
          { location: 'CGK', price: 110.99 },
          { location: 'PKX', price: 79.99 },
          { location: 'MEL', price: 120.99 },
          { location: 'NRT', price: 100.99 },
          { location: 'ICN', price: 130.99}
        ],
      },
      {
        name: 'LV Apogée EDP 100ml',
        image: 'https://ap.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-apog%C3%A9e-collections--LP0001_PM2_Front%20view.png?wid=1240&hei=1240',
        description: 'Apogée is a feminine perfume by Louis Vuitton. The scent was launched in 2016 and the fragrance was created by perfumer Jacques Cavallier',
        prices: [
          { location: 'SIN', price: 89.99 },
          { location: 'CGK', price: 100.99 },
          { location: 'PKX', price: 69.99 },
          { location: 'MEL', price: 110.99 },
          { location: 'NRT', price: 90.99 },
          { location: 'ICN', price: 120.99 }
        ],
      },
      {
        name: 'LV Matière Noire EDP 100ml',
        image: 'https://ap.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-mati%C3%A8re-noire-collections--LP0004_PM2_Front%20view.png?wid=1240&hei=1240',
        description: 'Matière Noire is a feminine perfume by Louis Vuitton. The scent was launched in 2016 and the fragrance was created by perfumer Jacques Cavallier',
        prices: [
          { location: 'SIN', price: 90.99 },
          { location: 'CGK', price: 69.99 },
          { location: 'PKX', price: 90.99 },
          { location: 'MEL', price: 90.99 },
          { location: 'NRT', price: 90.99 },
          { location: 'ICN', price: 85.99 }
        ],
      },
    ],
  }

// Help me insert one more merchant
const merchantData4 = {
  name : 'WPizza by Wolfgang Puck',
  category : 'Food and Beverages',
  offer : 'Extra 30% Miles',
  mainImg : 'https://media.istockphoto.com/id/1287249478/photo/pizza-chef-preparing-pizza-at-the-restaurant.jpg?s=612x612&w=0&k=20&c=STeFTmhZE_W1QIr6AWZvYp3CzxlFPq21cwl4CvPgFMY=',
  locations : ['Narita International Airport, NRT'],
  items : [
    {
      name : 'Margherita Pizza',
      image : 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFyZ2hlcml0YSUyMHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      description : 'Fresh mozzarella, tomato sauce, fresh basil',
      prices : [
        { location : 'NRT', price : 35.99 }
      ],
    },
    {
      name : 'Pepperoni Pizza',
      image : 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVwcGVyb25pJTIwcGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      description : 'Fresh mozzarella, tomato sauce, pepperoni',
      prices : [
        { location : 'NRT', price : 35.99 }
      ],
    },
    {
      name : 'Four Cheese Pizza',
      image : 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rm91ciUyMENoZWVzZSUyMHBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      description : 'Fresh mozzarella, tomato sauce, fontina, gorgonzola, parmesan',
      prices : [
        { location : 'NRT', price : 39.99 }
      ],
    },
    {
      name : 'BBQ Chicken Pizza',
      image : 'https://images.unsplash.com/photo-1655471264183-068c91041ba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJCUSUyMENoaWNrZW4lMjBwaXp6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
      description : 'Fresh mozzarella, tomato sauce, bbq chicken, red onion, cilantro',
      prices : [
        { location : 'NRT', price : 39.99 }
      ],
    },
    {
      name : 'Spicy Salami Pizza',
      image : 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BpY3klMjBTYWxhbWklMjBQaXp6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
      description : 'Fresh mozzarella, tomato sauce, spicy salami, red onion, chili flakes',
      prices : [
        { location : 'NRT', price : 39.99 }
      ],
    },
    {
      name : 'Mariad Of Pizzas',
      image : 'https://images.unsplash.com/photo-1584859977999-531c305575b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBpenphc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
      description : 'Margherita, Pepperoni, Four Cheese, BBQ Chicken, Spicy Salami',
      prices : [
        { location : 'NRT', price : 149.99 }
      ],
    },
  ],
}

const merchantData5 = {
  name : 'Petrossian Caviar & Champagne Bar',
  category : 'Food and Beverages',
  offer : 'Extra 30% Miles',
  mainImg : 'https://media.istockphoto.com/id/1370775170/photo/slices-of-bread-with-black-caviar-on-rustic-dark-background.jpg?s=612x612&w=0&k=20&c=5BN35uRNrtuIvkK3EflBLbP8XGbpY_cdnfxyNtKqlRY=',
  locations : ['Narita International Airport, NRT'],
  items : [
    {
      name : 'Caviar Sampler',
      image : 'https://images.unsplash.com/photo-1602696990016-ccc59bc238c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2F2aWFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      description : '30g of Caviar, 2 Blinis, 2 Toast Points, 2 Hard Boiled Eggs, 2 Chopped Egg Whites, 2 Chopped Egg Yolks, 2 Chopped Red Onions, 2 Chopped Chives, 2 Sour Cream, 2 Crème Fraiche',
      prices : [
        { location : 'NRT', price : 149.99 }
      ],
    },
    {
      name : 'Caviar Extravagance',
      image : 'https://images.unsplash.com/photo-1666052974990-8f89aac6f673?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2F2aWFyJTIwbWVhbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
      description : '50g of Caviar, 2 Blinis, 2 Toast Points, 2 Hard Boiled Eggs, 2 Chopped Egg Whites, 2 Chopped Egg Yolks, 2 Chopped Red Onions, 2 Chopped Chives, 2 Sour Cream, 2 Crème Fraiche',
      prices : [
        { location : 'NRT', price : 249.99 }
      ],
    },
    {
      name : 'Caviar Indulgence',
      image : 'https://images.unsplash.com/photo-1602696998069-91499cb39c0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNhdmlhciUyMG1lYWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      description : '125g of Caviar, 2 Blinis, 2 Toast Points, 2 Hard Boiled Eggs, 2 Chopped Egg Whites, 2 Chopped Egg Yolks, 2 Chopped Red Onions, 2 Chopped Chives, 2 Sour Cream, 2 Crème Fraiche',
      prices : [
        { location : 'NRT', price : 499.99 }
      ],
    },
    {
      name : 'Champagne Celebration',
      image : 'https://images.unsplash.com/photo-1580657274234-7339717f4541?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhbXBhZ25lfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      description : '1 Bottle of Champagne, 2 Celebration Flutes',
      prices : [
        { location : 'NRT', price : 149.99 }
      ],
    },
    {
      name : 'Celebration Basket',
      image : 'https://images.unsplash.com/photo-1608416026650-66b4e0c0c301?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhbXBhZ25lJTIwYm90dGxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      description : '1 Bottle of Champagne, 2 Celebration Flutes, 30g of Caviar, 2 Blinis, 2 Toast Points, 2 Hard Boiled Eggs, 2 Chopped Egg Whites, 2 Chopped Egg Yolks, 2 Chopped Red Onions, 2 Chopped Chives, 2 Sour Cream, 2 Crème Fraiche',
      prices : [
        { location : 'NRT', price : 299.99 }
      ],
    },
  ],
}

const merchantData6 = {
  name : 'B Grill by BOA Steakhouse',
  category : 'Food and Beverages',
  offer : 'Extra 30% Miles',
  mainImg : 'https://media.istockphoto.com/id/1363601737/photo/grilled-top-sirloin-or-cup-rump-beef-meat-steak-on-marble-board-black-background-top-view.jpg?s=612x612&w=0&k=20&c=vlotfOfhfx8H8Hy9BEXaATETcoOWkha6o_6nA2BYT5M=',
  locations : ['Narita International Airport, NRT'],
  items : [
    {
      name : 'Australian Wagyu Steak - 8oz',
      image : 'https://images.unsplash.com/photo-1652690772694-ac68867c30f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFN0ZWFrJTIwd2FneXV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      description : '8oz Australian Wagyu Steak, Mashed Potatoes, Asparagus',
      prices : [
        { location : 'NRT', price : 149.99 }
      ],
    },
    {
      name : 'Australian Wagyu Steak - 12oz',
      image : 'https://media.istockphoto.com/id/1376475628/photo/marbled-raw-meat-steak-ribeye-on-black-slate-plate-top-view-of-fresh-barbecue-beef-with-spices.webp?b=1&s=170667a&w=0&k=20&c=BwfgLEr5dkPwXN6yV8BmPislQJ3M9U0REMjZGZSOWDY=',
      description : '12oz Australian Wagyu Steak, Mashed Potatoes, Asparagus',
      prices : [
        { location : 'NRT', price : 249.99 }
      ],
    },
    {
      name: 'Beef Medallions',
      image: 'https://media.istockphoto.com/id/1257447065/photo/japanese-wagyu-beef-steak-teppanyaki.webp?b=1&s=170667a&w=0&k=20&c=f6vuqrY_YjHr3fI5mYU11dUPk_HNtamdGLe2k6L5ZGs=',
      description: 'Beef Medallions, Mashed Potatoes, Asparagus',
      prices: [
        { location: 'NRT', price: 149.99 }
      ],
    },
    {
      name: 'Filet Mignon',
      image: 'https://images.unsplash.com/photo-1607116176195-b81b1f41f536?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RmlsZXQlMjBNaWdub258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60',
      description: 'Filet Mignon, Mashed Potatoes, Asparagus',
      prices: [
        { location: 'NRT', price: 149.99 }
      ],
    },
    {
      name: 'New York Strip',
      image: 'https://images.unsplash.com/photo-1644704265419-96ddaf628e71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV3JTIwWW9yayUyMFN0cmlwfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60',
      description: 'New York Strip, Mashed Potatoes, Asparagus',
      prices: [
        { location: 'NRT', price: 149.99 }
      ],
    },
    {
      name: 'Ribeye',
      image: 'https://media.istockphoto.com/id/514310496/photo/prime-rib-steak.webp?b=1&s=170667a&w=0&k=20&c=N9Mx63d46yZQN1FpgisiOF2B2vOAsalo4eRp0ZVfaF4=',
      description: 'Ribeye, Mashed Potatoes, Asparagus',
      prices: [
        { location: 'NRT', price: 149.99 }
      ],
    },
    {
      name: 'Surf & Turf',
      image: 'https://media.istockphoto.com/id/1463862802/photo/hearty-homemade-surf-and-turf.webp?b=1&s=170667a&w=0&k=20&c=WnM2DuQD_Fu10L5V7kv6JchLftN4Tc3Ck2M6YbIbGHM=',
      description: 'Filet Mignon, Lobster Tail, Mashed Potatoes, Asparagus',
      prices: [
        { location: 'NRT', price: 249.99 }
      ],
    },
  ],
}

const merchantData7 = {
  name : 'Luxury Car Services: NRT',
  category : 'Transportation',
  offer : 'Extra 25% Miles',
  mainImg : 'https://media.istockphoto.com/id/1395322071/photo/businessman-use-tablet-in-taxi.jpg?s=612x612&w=0&k=20&c=tsM_3aImgXvAAHL868SNpcUTPnyKjvIlbU-pP5AV6Ac=',
  locations : ['Narita International Airport, NRT'],
  items : [
    {
      name : 'Luxury Sedan - 4 Passengers',
      image : 'https://media.istockphoto.com/id/1482967142/photo/asian-businesswoman-commuting-from-office-in-taxi-backseat-with-mobile-phone-on-road.jpg?s=612x612&w=0&k=20&c=yHJX-y8SNPtGmFvHnpH-iJGLi2owa-z_y-2iTXEspY0=',
      description : 'Luxury Sedan, 4 Passengers, 4 Bags',
      prices : [
        { location : 'NRT', price : 149.99 }
      ],
    },
    {
      name : 'Luxury SUV - 6 Passengers',
      image : 'https://images.unsplash.com/photo-1563720359838-8d9cdd36ceab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVyY2VkZXMlMjBiZW56JTIwc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60',
      description : 'Luxury SUV, 6 Passengers, 6 Bags',
      prices : [
        { location : 'NRT', price : 249.99 }
      ],
    },
    {
      name : 'Luxury Van - 8 Passengers',
      image : 'https://media.istockphoto.com/id/151520574/photo/white-formal-gloved-uniformed-hand-opening-car-door.jpg?s=612x612&w=0&k=20&c=_mMaXlDxEj8weTeTdXIcm8XO74MQSuz9ne3ify6W-2E=',
      description : 'Luxury Van, 8 Passengers, 8 Bags',
      prices : [
        { location : 'NRT', price : 349.99 }
      ],
    },
    {
      name : 'Luxury Bus - 12 Passengers',
      image : 'https://media.istockphoto.com/id/1197014116/photo/travel-company-bus.jpg?s=612x612&w=0&k=20&c=IuJZJW5QbNpzToIOnZ0rY4hLQ-F4GIc-iechEQlf_Wc=',
      description : 'Luxury Bus, 12 Passengers, 12 Bags',
      prices : [
        { location : 'NRT', price : 449.99 }
      ],
    },
  ],
}

const merchantData8 = {
  name : 'SakuraSpa',
  category : 'Health and Beauty',
  offer : 'Extra 30% Miles',
  mainImg : 'https://media.istockphoto.com/id/1479350890/photo/relax-spa-and-zen-woman-with-candles-for-beauty-physical-therapy-or-skincare-female-client-on.jpg?s=612x612&w=0&k=20&c=ODbmBr1IW1F21YC8pMvzytNnhZopOTRfFgulk7ISOqg=',
  locations : ['Narita International Airport, NRT'],
  items : [
    {
      name : 'Sakura Manicure',
      image : 'https://media.istockphoto.com/id/1397565854/photo/pink-elongated-nail-extension.jpg?s=612x612&w=0&k=20&c=iD3ZlW-DBiZR_qy2swAACKVfljVtjSbAkDU_uvGoZsA=',
      description : 'Manicure - 45 Minutes',
      prices : [
        { location : 'NRT', price : 149.99 }
      ],
    },
    {
      name : 'Sakura Pedicure',
      image : 'https://media.istockphoto.com/id/1397228645/photo/wet-female-feet-with-smooth-skin-and-tropical-leaves.jpg?s=612x612&w=0&k=20&c=iwQs1Z9ITdol9Weosv6EDWMlVuG7HUtLeORJPU8X5Fw=',
      description : 'Pedicure - 45 Minutes',
      prices : [
        { location : 'NRT', price : 249.99 }
      ],
    },
    {
      name : 'Sakura Massage',
      image : 'https://media.istockphoto.com/id/1452420604/photo/relaxed-asian-woman-lying-on-massage-table-receiving-body-massage-enjoying-thai-spa-at-salon.jpg?s=612x612&w=0&k=20&c=YLbGcrMU970bx5kW1vzpqp4inHRwJ3KGuLEIZqQCwkk=',
      description : 'Relaxing Massage - 45 Minutes',
      prices : [
        { location : 'NRT', price : 349.99 }
      ],
    },
    {
      name : 'Sakura Facial',
      image : 'https://media.istockphoto.com/id/1386862301/photo/i-moisturize-daily-for-soft-smooth-skin.jpg?s=612x612&w=0&k=20&c=bJPR1vbIKJfXD8fwD7Ahm1ZtqVREzXHbpgAaMRapQhA=',
      description : 'Facial - 45 Minutes',
      prices : [
        { location : 'NRT', price : 249.99 }
      ],
    },
  ],
}

const merchantData9 = {
  name : 'OraOxygen',
  category : 'Health and Beauty',
  offer : 'Extra 30% Miles',
  mainImg : 'https://media.istockphoto.com/id/1415703636/photo/chinese-adult-woman-standing-in-contemplation-with-ideas-in-urban-modern-city-with-nature.jpg?s=612x612&w=0&k=20&c=lC5LchtvgbsCNuj9J05_yxOIJ-XOtv1xv9e5k0Z-j5A=',
  locations : ['Los Angeles International Airport, NRT'],
  items : [
    {
      name : 'Oxygen Therapy',
      image : 'https://media.istockphoto.com/id/1440454579/photo/the-figure-shows-a-fingertip-oximeter-with-normal-oxygen-levels-oximeter-close-up.jpg?s=612x612&w=0&k=20&c=Y-jwKEyoxeEVt8UuN_bMEeaPpXyZnHMDREQbmE-c8kg=',
      description : 'Oxygen Therapy - 45 Minutes, Oxygen treatments to help combat fatigue, jet lag, and promote overall wellness.',
      prices : [
        { location : 'NRT', price : 149.99 }
      ],
    },
    {
      name : 'Oxygen Spa',
      image : 'https://media.istockphoto.com/id/1441979693/photo/composition-with-spa-products-on-marble-background-top-view.jpg?s=612x612&w=0&k=20&c=H83pUgTlZR5KO2eNwExGMnqbGwc4GMiXP3k_oKxp1WM=',
      description : 'Oxygen Spa - 45 , Oxygen treatments to help combat fatigue, jet lag, and promote overall wellness.',
      prices : [
        { location : 'NRT', price : 249.99 }
      ],
    },
  ],
}


createMerchant(merchantData1);
createMerchant(merchantData2);
createMerchant(merchantData3);
createMerchant(merchantData4);
createMerchant(merchantData5);
createMerchant(merchantData6);
createMerchant(merchantData7);
createMerchant(merchantData8);
createMerchant(merchantData9);
