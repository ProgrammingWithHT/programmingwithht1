const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// const axios = require("axios");
const Twocheckout = require('2checkout-node');

const SELLER_ID = '255143724312';  // Replace with your actual Seller ID
const PRIVATE_KEY = '6F657CEA-EE89-43BE-8ACF-C2DBA5C18AA5'; // Replace with your actual Private Key

// Endpoint to handle the payment
exports.processPayment = catchAsyncErrors(async (req, res, next) => {
    console.log(req.body)
    const { token, billingAddress, cardInfo } = req.body;

    try {

        var tco = new Twocheckout({
            sellerId: SELLER_ID,                                  // Seller ID, required for all non Admin API bindings
            privateKey: PRIVATE_KEY,       // Payment API private key, required for checkout.authorize binding
        });

        // Build the payload for the 2Checkout API request
        const params = {
            merchantOrderId: "123",
            token: token,
            currency: 'USD',  // Replace with the currency you want to use
            total: '1.00',   // Replace with the actual amount
            billingAddr: {
                name: cardInfo.name,
                addrLine1: billingAddress.address,
                city: billingAddress.city,
                state: '', // Add the state if applicable
                zipCode: billingAddress.zip,
                country: billingAddress.country,
                email: 'customer@example.com', // Replace with customer's email
                phoneNumber: '1234567890' // Replace with customer's phone number
            }
        };

        tco.checkout.authorize(params, function (error, data) {
        if (error) {
            console.error('Authorization Error:', error);
            res.status(400).send(error.message);
        } else {
            console.log('Authorization Success:', data);
            res.status(200).send(data.response.responseMsg);
        }
    });

    } catch (error) {
        console.error("Eoorr: ",error);
        res.status(500).json({ success: false, message: 'Payment processing failed.' });
    }
});



// exports.processPayment = catchAsyncErrors(async (req, res, next) => {
//     console.log('Request Body:', req.body);

//     var tco = new Twocheckout({
//         sellerId: "255140607640",                                  // Seller ID, required for all non Admin API bindings
//         privateKey: "4B039F2B-E084-437E-9419-208BB164AE57",       // Payment API private key, required for checkout.authorize binding
//     });

//     console.log(tco)

//     var params = {
//         "merchantOrderId": "123",
//         "token": req.body.token,
//         "currency": "USD",
//         "total": "0.10",
//         "billingAddr": {
//             "name": "Testing Tester",
//             "addrLine1": req.body.billingAddress.address,
//             "city": req.body.billingAddress.city,
//             "state": req.body.billingAddress.state || '',  // Add state if applicable
//             "zipCode": req.body.billingAddress.zip,
//             "country": req.body.billingAddress.country,
//             "email": "example@2co.com",
//             "phoneNumber": "5555555555"
//         },
//         "demo": true
//     };

//     console.log('Request Params:', params);

//     tco.checkout.authorize(params, function (error, data) {
//         if (error) {
//             console.error('Authorization Error:', error);
//             res.status(400).send(error.message);
//         } else {
//             console.log('Authorization Success:', data);
//             res.status(200).send(data.response.responseMsg);
//         }
//     });
// });



































// exports.processPayment = catchAsyncErrors(async (req, res, next) => {
//     const { token, billingAddress, cardInfo } = req.body;

//     try {
//         const response = await axios.post(
//             'https://api.2checkout.com/rest/6.0/orders',
//             {
//                 sellerId: SELLER_ID,
//                 token: token,
//                 amount: "0.01",
//                 currency: 'USD',
//                 billingAddr: {
//                     name: cardInfo.name,
//                     address1: billingAddress.address,
//                     city: billingAddress.city,
//                     state: 'Punjab',
//                     zipCode: billingAddress.zip,
//                     country: billingAddress.country,
//                     email: 'hamzach3163@gmail.com'
//                 },
//                     shippingAddr: req.body.address
//             },
//             {
                
//                     headers: {
//                         'Content-Type': 'application/json',
//                         'Accept': 'application/json'
//                     },
//                 auth: {
//                     username: SELLER_ID,
//                     password: PRIVATE_KEY
//                 }
//             }
//         );

//         // Check the response code
//         if (response.data.responseCode === 'APPROVED') {
//             res.status(200).json({ success: true, message: 'Payment processed successfully.' });
//         } else {
//             res.status(400).json({ success: false, message: response.data.responseMsg });
//         }
//     } catch (err) {
//         console.error('Error processing payment:', err);
//         res.status(500).json({ success: false, message: 'Server error. Please try again.' });
//     }

// });
