import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { QRCodeSVG } from 'qrcode.react'; // Updated import

const App = () => {
    const [secret, setSecret] = useState(null);
    const [token, setToken] = useState('');
    const [isVerified, setIsVerified] = useState(null);

    useEffect(() => {
        const generateSecret = async () => {
            const response = await axios.post('http://localhost:5000/api/generate-secret');
            console.log("response.data", response.data)
            setSecret(response.data);
        };
        generateSecret();
    }, []);

    const verifyCode = async () => {
        const response = await axios.post('http://localhost:5000/api/verify-code', {
            token,
            secret
        });
        setIsVerified(response.data.isVerified);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-5">2FA Authentication</h1>
            {secret && (
                <div className="bg-white p-5 rounded shadow-md">
                    <QRCodeSVG value={secret.otpauth_url} /> {/* Updated component */}
                    <div className="mt-4">
                        <h2 className="text-xl">Scan the QR Code</h2>
                        <p>Secret: {secret.base32}</p>
                    </div>
                </div>
            )}
            <div className="mt-5">
                <input
                    type="text"
                    placeholder="Enter OTP"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="border p-2 rounded"
                />
                <button
                    onClick={verifyCode}
                    className="ml-2 bg-blue-500 text-white p-2 rounded"
                >
                    Verify
                </button>
            </div>
            {isVerified !== null && (
                <div className={`mt-5 ${isVerified ? 'text-green-500' : 'text-red-500'}`}>
                    {isVerified ? '✅ Code Verified' : '❌ Invalid Code'}
                </div>
            )}
        </div>
    );
};

export default App;
