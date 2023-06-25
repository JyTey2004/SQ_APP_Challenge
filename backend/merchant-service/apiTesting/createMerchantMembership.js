async function createMembership(membershipData) {
    try {
      const response = await fetch('https://sq-app-challenge-16ca82b09b16.herokuapp.com/merchantmembership/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(membershipData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create membership');
      }
  
      const createdMerchant = await response.json();
      console.log('Membership created:', createdMerchant);
    } catch (error) {
      console.error('Failed to create Membership:', error.message);
    }
  }


const membershipData1 = {
    merchantName : 'Dior',
    membershiplevels : [
        {
            membershipLevel : 'Bronze',
            Benefits : [
                {
                    benefit : '5% off'
                },
                {
                    benefit : 'Free gift wrapping'
                },
            ]
        },
        {
            membershipLevel : 'Silver',
            Benefits : [
                {
                    benefit : '10% off'
                },
                {
                    benefit : 'Free gift wrapping'
                },
            ]
        },
        {
            membershipLevel : 'Gold',
            Benefits : [
                {
                    benefit : '15% off'
                },
                {
                    benefit : 'Free gift wrapping'
                },
                {
                    benefit : 'Free alteration'
                },
            ]
        },
        {
            membershipLevel : 'Platinum',
            Benefits : [
                {
                    benefit : '20% off'
                },
                {
                    benefit : 'Free gift wrapping'
                },
                {
                    benefit : 'Free alteration'
                },
                {
                    benefit : 'Free Birthday Gift'
                },
            ]
        }
    ],
}

const membershipData2 = {
    merchantName : 'Chanel',
    membershiplevels : [
        {
            membershipLevel : 'Bronze',
            Benefits : [
                {
                    benefit : '5% off'
                },
                {
                    benefit : 'Free gift wrapping'
                },
            ]
        },
        {
            membershipLevel : 'Silver',
            Benefits : [
                {
                    benefit : '10% off'
                },
                {
                    benefit : 'Free gift wrapping'
                },
            ]
        },
        {
            membershipLevel : 'Gold',
            Benefits : [
                {
                    benefit : '15% off'
                },
                {
                    benefit : 'Free gift wrapping'
                },
                {
                    benefit : 'Free alteration'
                },
            ]
        },
        {
            membershipLevel : 'Platinum',
            Benefits : [
                {
                    benefit : '20% off'
                },
                {
                    benefit : 'Free gift wrapping'
                },
                {
                    benefit : 'Free alteration'
                },
                {
                    benefit : 'Free Birthday Gift'
                },
            ]
        }
    ],
}


createMembership(membershipData1);
createMembership(membershipData2);
