// change `URI_MERCHANT_SVC` to 'http://<your_ip_address>:8080' to run locally
const URI_MERCHANT_SVC = "https://sq-app-challenge-16ca82b09b16.herokuapp.com";
const PREFIX_MERCHANTS = "/merchants";
const PREFIX_KRISMEMBERSHIP = "/krismembership";
const PREFIX_MERCHANTMEMBERSHIP = "/merchantmembership";

// change `URI_STRIPE` to 'http://<your_ip_address>:4242' to run locally
const URI_STRIPE = "https://sq-app-payment-service-dc690ed62818.herokuapp.com"
const PREFIX_PAYMENT_INTENT = "/create-payment-intent";

export const URL_MERCHANTS_SVC = URI_MERCHANT_SVC + PREFIX_MERCHANTS;
export const URL_KRISMEMBERSHIP = URI_MERCHANT_SVC + PREFIX_KRISMEMBERSHIP;
export const URL_MERCHANTMEMBERSHIP = URI_MERCHANT_SVC + PREFIX_MERCHANTMEMBERSHIP;
export const URL_PAYMENT_SVC = URI_STRIPE  + PREFIX_PAYMENT_INTENT;
