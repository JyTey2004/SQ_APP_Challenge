
## To access the Deployed App:
1. Download Expo Go from App Store.
2. For IOS users, you need to be invited to the project. Please contact me at WA: +65 9664 2994, and send me your email address.
3. Wait for the invitation email from Expo.
4. Scan the QR code from exp://exp.host/@jy2004/SQ_APP?release-channel=default
5. Play with the App

## To Start the App Locally:
### Backend
1. cd to backend/merchant-service
2. Create an `.env` file in the root of backend/merchant-service directory.
3. Enter the `MONGODB_URI=mongodb+srv://sqapp:3xJfk8foVbFXeOm7@cluster0.5g0bb.mongodb.net/?retryWrites=true&w=majority` in `.env` file.
4. Install packages using `yarn install`.
5. Run server using `yarn start`.
6. cd to backend/payment-service
7. Repeat steps 4-5
### Frontend
1. cd to frontend and run `yarn install`
2. cd to frontend/configs.js and change `URI_MERCHANT_SVC` and `URI_STRIPE` to
```
// change "https://sq-app-challenge-16ca82b09b16.herokuapp.com" to "http://<your_ip_address>:8080"
const URI_MERCHANT_SVC = "https://sq-app-challenge-16ca82b09b16.herokuapp.com";
// change "https://sq-app-payment-service-dc690ed62818.herokuapp.com" to "http://<your_ip_address>:4242"
const URI_STRIPE = "https://sq-app-payment-service-dc690ed62818.herokuapp.com";
```
3. Run `yarn start` to start expo
4. Download Expo go on your mobile phone and scan the qr-code
5. Play with the App


## IDEAS:

	Bundle with Flight Ticket -> Up-Sell & Cross-Sell
		- Selling Tickets and KRIS+ Items as a bundle
		- UpSell Items that are Bundled with the Flight Ticket
		- CrossSell items that are available in both regions but cheaper in one region that in the other but MUST be bundle with the Flight Ticket

		- Benefits:
			- Solves the regulatory problems as items will be part of the service
			- Increase sales as there are more sales 


	Expand through companies, partners that already has a big number of merchants
		- Banks, Payments and Hotel Chains

		- Benefits:
			- Can partnership in groups 

	Universal Membership
		- Benefits:
			- No need to sign up for different memberships
			- Just sign up for one membership and get access to all the benefits


## SOLUTION: 

	Build a new section in KRIS+ APP to facilate bundling of Tickets with KRIS+ Products
		Bundling of Tickets will also mean that merchants have the option to work with KRIS+ without needing to worry about Local regulatory restrictions and limitations as whatever they are selling is part of the ticket as a FLYING SERVICE
	
	Features:
		1. User able to buy Flight tickets -OR- input Flight ticket details
			-> Bundling
		2. Integrate as many Payment Methods 
			-> Partnerships with more payment methods means we can add more merchants partnership with a partner's partner
		3. Comparison of prices in KRIS+ merchant's items located in seperate Regoins 
			-> Cross-Selling
		4. Flight Tickets are able to offer exclusive deals to user 
			-> Up-Selling
		5. Items must be offer together with tickets as a service NOT product 
			-> to bypass licence and all that bs
		6. Recommend user based on profile
			-> Customer has more than x number of KrisMiles
