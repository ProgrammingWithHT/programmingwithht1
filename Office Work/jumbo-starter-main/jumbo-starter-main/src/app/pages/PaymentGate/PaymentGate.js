import React, { useEffect, useState } from 'react';
import card from 'card';
import axios from 'axios';
import { TextField, Button, Container, Grid, Typography, Box, Paper } from '@mui/material';
import { useMediaQuery } from '@mui/material';

const PaymentGateway = () => {
  const isSmallScreen = useMediaQuery('(max-width:400px)');
  const [billingAddress, setBillingAddress] = useState({
    address: '',
    city: '',
    zip: '',
    country: ''
  });
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Called when token created successfully.
  const successCallback = (data) => {
    setToken(data.response.token.token);
    processPayment(data.response.token.token);
  };

  // Called when token creation fails.
  const errorCallback = (data) => {
    if (data.errorCode === 200) {
      tokenRequest();
    } else {
      alert(data.errorMsg);
      setLoading(false);
    }
  };



  const tokenRequest = () => {
    const args = {
      sellerId: '255143724312',
      publishableKey: '6FE49FF0-711F-4C63-8F74-6B088BC5C8DA',
      ccNo: document.getElementById('number').value,
      cvv: document.getElementById('cvc').value,
      expMonth: document.getElementById('expiry').value.split('/')[0].trim(),
      expYear: document.getElementById('expiry').value.split('/')[1].trim(),
    };
    window.TCO.requestToken(successCallback, errorCallback, args);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBillingAddress({ ...billingAddress, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (window.TCO) {
      tokenRequest();
    } else {
      console.error('TCO not loaded');
    }
  };

  const processPayment = async (token) => {
    console.log("token fronend", token)
    try {
      const response = await axios.post('/api/v1/payment', {
        token,
        billingAddress,
        cardInfo: {
          number: document.getElementById('number').value,
          name: document.getElementById('name').value,
          expiry: document.getElementById('expiry').value,
          cvc: document.getElementById('cvc').value,
        }
      });
      console.log(response)
      alert(response.data)
      setLoading(false);
      // setSuccess(true);
    } catch (error) {
      console.log(error)
      alert(error.message)
      setLoading(false);
      setError('Payment failed. Please try again.');
    }
  };

  useEffect(() => {
    window.TCO.loadPubKey();

    const cardInstance = new card({
      form: 'form',
      container: '.card-wrapper',
      formSelectors: {
        numberInput: 'input#number',
        expiryInput: 'input#expiry',
        cvcInput: 'input#cvc',
        nameInput: 'input#name',
      },
    });
  }, []);

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        Payment Form
      </Typography>
      <Paper elevation={3} sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: { xs: 'column', md: 'row-reverse' }, gap: '1rem' }}>
        <div className="card-wrapper" style={{ marginBottom: '20px' }}></div>
        <form id='paymentForm' onSubmit={handleSubmit}>
          <Grid container spacing={isSmallScreen ? 1 : 3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Card Number"
                id="number"
                name="number"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Cardholder Name"
                id="name"
                name="name"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Expiry Date"
                id="expiry"
                name="expiry"
                placeholder="MM/YY"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CVC"
                id="cvc"
                name="cvc"
                variant="outlined"
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Billing Address"
                name="address"
                variant="outlined"
                required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="City"
                name="city"
                variant="outlined"
                required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                label="ZIP Code"
                name="zip"
                variant="outlined"
                required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Country"
                name="country"
                variant="outlined"
                required
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center">
                <Button type="submit" variant="contained" color="primary" disabled={loading}>
                  {loading ? 'Processing...' : 'Pay Now'}
                </Button>
              </Box>
            </Grid>
          </Grid>
          {error && <Typography color="error">{error}</Typography>}
          {success && <Typography color="success">Payment successful!</Typography>}
        </form>
      </Paper>
    </Container>
  );
};

export default PaymentGateway;