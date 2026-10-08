import './App.css';
import axios from 'axios'
import { useState,useEffect } from 'react';
function App() {
  const [value, setValue] = useState([]);
  const [value1, setValue1] = useState([]);
  
  const getValue = async() => {
    const options = {
      method: 'GET',
      url: 'https://covid-193.p.rapidapi.com/statistics',
      headers: {
        'X-RapidAPI-Key': '1013e6d86dmsh1bf3305c6569d71p110d7djsnc07c356e23a8',
        'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
      }
    };
    const a = await axios(options)
    setValue1(a.data.response)
    
  }
  let obj = value1.find(o => o.country === value);  

  const fun =(event)=>{
    setValue(event.target.value)
  }
  useEffect(()=>{
    getValue();
  },[])
  return (
    <div>
      <input type='text' onChange={fun}/>
      {value}
      <h1>Country: {obj? obj.country : 'not found'}</h1>
      <h3>Population: {obj? obj.population : 'not found'}</h3>
      <h3>No. of death case: {obj? obj.deaths.total : 'not found'}</h3>
    </div>
  );
}

export default App;
