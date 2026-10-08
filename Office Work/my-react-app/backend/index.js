const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.post('/api/payment', async (req, res) => {
    const { token, amount, currency } = req.body;

    try {
        const response = await axios.post('https://api.2checkout.com/rest/v1.1/checkout', {
            // Add your 2Checkout API request parameters here
        }, {
            auth: {
                username: process.env.MERCHANT_CODE,
                password: process.env.SECRET_WORD
            }
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error('Error processing payment:', error);
        res.status(500).json({ error: 'Payment processing failed' });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
