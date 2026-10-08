import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const CompB = () => {
  const [token] = useLocalStorage('token', '');
  console.log(token)

  useEffect(()=>{

  },[token])

  return (
    <div>
      compb
      {token}
    </div>
  );
};

export default CompB;

