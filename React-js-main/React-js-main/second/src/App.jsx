import React from 'react';
import Cards from './Cards'
import Sdata from './Sdata'
import './index.css';

function App(){

    

    return <>
    {
      Sdata.map((val) => {
      return <>
        <Cards
          key={val.id}  //key is complusory in react js to identifies our object
          imgsrc={val.imgsrc}
          sname={val.sname}
          title={val.title}
          link={val.link}
        />
      </>
    })
    }
  </>
};

export default App;