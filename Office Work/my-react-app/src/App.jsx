

// import CompA from "./CompA";
// import CompB from "./CompB";
// import CompC from "./CompC";


// function App() {
  
//   return (
//     <>
    
//       <nav className="m-5 flex justify-around border-1">
//         <a href="">Home</a>
//         <a href="">About</a>
//         <a href="">Contact Us</a>
//         <a href="">Profile</a>
//       </nav>

//       <span style={{background: 'red',padding: '50px'}}>Hamza tahir</span>

      

//       <CompA />
//       <CompB />
//       <CompC />

//     </>
//   );
// }

// export default App;



import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');

  const handlePayment = async (e) => {
    e.preventDefault();
    // Create a token using 2Checkout's JS library or similar

    try {
      const response = await axios.post('/api/payment', {
        token: 'your_generated_token',
        amount,
        currency,
      });

      console.log('Payment successful:', response.data);
    } catch (error) {
      console.error('Error processing payment:', error);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handlePayment}>
        <input
          type="text"
          placeholder="Card Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Expiry Date"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
        />
        <input
          type="text"
          placeholder="CVV"
          value={cvv}
          onChange={(e) => setCvv(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <input
          type="text"
          placeholder="Currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default App;
