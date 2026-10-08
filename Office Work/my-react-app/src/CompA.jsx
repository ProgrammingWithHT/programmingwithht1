import useLocalStorage from './useLocalStorage';

const CompA = () => {
  const [, setToken] = useLocalStorage('token', '');

  const handleClick = () => {
    setToken('12345678');
  };

  return (
    <div>
      compa
      <button onClick={handleClick}>Click ME</button>
    </div>
  );
};

export default CompA;
