import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// function ncard(val) {
//   console.log(val);
//   return <>
//     <Cards
//       imgsrc={val.imgsrc}
//       sname={val.sname}
//       title={val.title}
//       link={val.link}
//     />
//   </>
// }


ReactDOM.render(
  // #22: Props in React Js
  // Props(which stands for properties) used for create custom attributes
  <>

    {/* <Cards
      imgsrc='https://wallpapercave.com/wp/wp4056410.jpg'
      title='A Netflix orignal Series'
      sname='DARK'
      link='https://www.netflix.com/in/title/80990668?source=35'
    />

    <Cards
      imgsrc='https://wallpapercave.com/wp/wp4056410.jpg'
      title='extra curricular'
      sname='Netflix Original Series'
      link='https://www.netflix.com/in/title/80990668?source=35'
    />

    <Cards
      imgsrc='https://wallpapercave.com/wp/wp4056410.jpg'
      title='Netflix orignal Series'
      sname='Stranger Things'
      link='https://www.netflix.com/in/title/80990668?source=35'
    /> */}

    {/* <Cards
      imgsrc = {Sdata[0].imgsrc}
      sname = {Sdata[0].sname}
      title = {Sdata[0].title}
      link = {Sdata[0].link}
    />    
    <Cards
      imgsrc = {Sdata[1].imgsrc}
      sname = {Sdata[1].sname}
      title = {Sdata[1].title}
      link = {Sdata[1].link}
    />    
    <Cards
      imgsrc = {Sdata[0].imgsrc}
      sname = {Sdata[0].sname}
      title = {Sdata[0].title}
      link = {Sdata[0].link}
    />     */}

    <App/>
  </>
  ,
  document.getElementById('root')
);

