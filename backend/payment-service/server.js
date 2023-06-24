const express = require('express');
const cors = require('cors');
const app = express();
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = require("stripe")('sk_test_51NL0E4CFUh3VvAw0WpD5TBqSYOWdjJk2ypT1XlxQxdynYmSAvf0PFxTSShm2yNIgnZX9J6gFKcU4aUTpVbyALPoM00gBCrQwq1');

app.use(express.static("public"));
app.use(express.json());
// Enable CORS for all routes
app.use(
  cors({
    //replace with deployed endpoint
    origin: "http://192.168.50.21:19000",
    credentials: true,
  })
); // config cors so that front-end can use

app.options("*", cors({
    //replace with deployed endpoint
    origin: "http://192.168.50.21:19000"}));

const calculateTotalAmount = (basketTotal, logisticsFee) => {
  console.log('server: ' + basketTotal + ' ,' +logisticsFee);
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return parseInt((basketTotal + logisticsFee).toFixed(2) * 100);
};

app.post("/create-payment-intent", async (req, res) => {
  const { basketTotal, logisticsFee } = req.body;
  console.log( req.body)
    // Use an existing Customer ID if this is a returning customer.
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    {customer: customer.id},
    {apiVersion: '2022-11-15'}
  );
  

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateTotalAmount(basketTotal, logisticsFee),
    currency: "usd",
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: 'pk_test_51NL0E4CFUh3VvAw0wYvBNks6ohwVJaDmt05q4odz8sz7qg7d0UXa84FAQQ6TGpfN0vDwEDO1TdZZHW0irT1Ajioz00Mhzfm4m6'
  });
});
app.listen(process.env.PORT || 4242, () => console.log("Node server listening on port 4242!"));