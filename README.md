
## To Start the App:
### Backend
1. cd to backend/merchant-service
2. Rename `.env.sample` file to `.env`.
3. Enter the DB URL as `MONGODB_URI` in `.env` file.
4. Install packages using `yarn install`.
5. Run server using `yarn start`.
6. cd to backend/payment-service
7. Repeat steps 4-5
### Frontend
1. cd to frontend and run `yarn install`
2. cd to frontend/configs.js and change `URI_GATEWAY` and `STRIPE_API_URL` to
```
// change "http://localhost:8080" to "http://<your_ip_address>:8080"
const URI_GATEWAY = "http://<your_ip_address>:8080";
const STRIPE_API_URL = "http://<your_ip_address>:4242";
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
