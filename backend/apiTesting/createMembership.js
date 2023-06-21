async function createMembership(membershipData) {
    try {
      const response = await fetch('http://localhost:8080/krismembership/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(membershipData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to create membership');
      }
  
      const createdMembership = await response.json();
      console.log('Membership created:', createdMembership);
    } catch (error) {
      console.error('Failed to create Membership:', error.message);
    }
  }


const membershipData = {
    name : 'Halp',
    krisMembershipLevel : 'Gold',
    mainImg : 'https://pbs.twimg.com/media/FSvOKZrWAAADChM.jpg',
    memberships : [
        {
            merchantName : 'Dior',
            membershipLevel : 'Gold'
        },
        {
            merchantName : 'Chanel',
            membershipLevel : 'Gold'
        },
        {
            merchantName : 'LV',
            membershipLevel : 'Platinum'
        },
    ],
}

createMembership(membershipData);
