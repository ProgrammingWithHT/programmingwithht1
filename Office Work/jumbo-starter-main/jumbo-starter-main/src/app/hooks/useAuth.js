// hooks/useAuth.js
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [authData, setAuthData] = useState(() => {
    const savedData = localStorage.getItem('data');
    return savedData ? JSON.parse(savedData) : null;
  });

  useEffect(() => {
    if (authData) {
      localStorage.setItem('data', JSON.stringify(authData));
    }
  }, [authData]);

  const updateAuthData = (data) => {
    console.log('abcd',data);
    console.log(authData)
    setAuthData(data);
    
  };

  return { authData, updateAuthData };
};

export default useAuth;
