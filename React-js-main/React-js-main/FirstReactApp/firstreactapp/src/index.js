import React from 'react'; //this is our modern js style but the built in compiler name 'babel' automatically convert this code to our old js code like: var React = require('react);
//we import react to use JSX
import ReactDOM from 'react-dom'; //this is our React Dom like our Js dOM
import './index.css'; 
import App from './App.jsx'
import add,{sub,div,mul} from './cal';

// Basic syntax of React DOM
// ReactDOM.render('kya dihana hai', 'kaha dikhan hai', 'callback function')

//   First Hello World Program
//   In ronder we write <h1> Hello World! </h1> this is not our html we say it our JSX
//     ReactDOM.render(<h1> Hello World!</h1>, 
//       document.getElementById('root')
//     );

//   // Show you How render used our react JSX AND hello world program with pure React JS
//     ReactDOM.render(React.createElement('h1'
//       ,null,'Hello World'),
//       document.getElementById('root')
//     )
//   
//   // Hello World Program With Pure JS
//    var h1 = document.createElement('h1');
//    h1.innerHTML = 'Hello World';
//    document.getElementById('root').appendChild(h1);



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// ____________How to Render Multiple Elements inside ReactDOM.render() in ReactJS in Hindi #7_______________
// ReactDOM.render(
  // <div>
  //   <h1>Hello World!</h1>
  //   <p>Plz Share It</p>
  //   <h2>ProgrammingWithHT</h2>
  // </div>,

  // if you don't use div then use like create array in js | var a = ['hamza','qasim']; | and if react version above 16 than also we used this method
  // [
  //   <h1>CodingWihtHT</h1>,
  //   <p>ProgrammingWithHT</p>,
  //   <h2>Hello Hamza</h2>
  // ],

  // We also used react fragment instead of above two method
  // Understanding React Fragment in React JS in Hindi in 2020 #8
  // With React Fragment, you can render multiple elements of a component without adding extra div tags
  // <React.Fragment>
  //   <h1>CodingWihtHT</h1>
  //   <p>ProgrammingWithHT</p>
  //   <h2>Hello Hamza</h2>
  // </React.Fragment>,

  // short cut of React Fragment
//   <>
//     <h1>CodingWihtHT</h1>
//     <p>ProgrammingWithHT</p>
//     <h2>Hello Hamza</h2>
//   </>,

//   document.getElementById('root')
// )


// _____________JavaScript Expressions In JSX  #10


  // const name = 'Hamza';
  // const fname = "Tahir";
  // var a = 2;
  // var b = 5;
  // const currDate = new Date().toLocaleDateString();
  // const currTime = new Date().toLocaleTimeString();
  // console.log(currDate);
  
  
  // ReactDOM.render(
    // <>
    {/* <h1>My Name Is {name}</h1>
    <h2>My Fname Is {fname}</h2>
    <h3>The Sum of 2 and 5 is: {2+5}</h3>
    <h3>My Full Name Is {name} {fname}</h3> */}
    //<h3>My Full Name Is {name + " " + fname}</h3>  {/*In our brackets we used normal JS so they ignore space that's reason we uesd " " */}
  
    {/*We also Used ES6 features Template Literals instead of above line */}
  
    {/* <h1>{`my name is ${name} and father name is ${fname}`}</h1>
  
    <h2>The current Date is: {currDate}</h2>
    <h2>The current Time is: {currTime}</h2> */}
  
    // </>,
    // document.getElementById('root')
  // )


// _______JSX Attributes And CSS in React JS

//    const inlineCssObject = {
//     color: 'green',
//     background: 'blue',
//     texttransform: 'capitailize',
//     textShadow: '0px 2px 4px #ffe9c5' //In css we used small letter textshadow but it's wrong in JSX css
//    }
//    
//    ReactDOM.render(<>
//     {/* <h1 class='hamza'>My name Is Hamza</h1> This is also work but react give someError to suggest to used className instead of class */}
//     <h1 className='hamza'>My name Is Hamza</h1>
//  
//     {/* How To Use In-line css it's similar to our normal html inline css but in JSX we used like created object in JS e.g style= {{color: 'red',backGround: 'green'}} */}
//   
//     <h1 style= {{color: 'red',background: 'skyblue'}}>My name is Qasim</h1>
//     <h1 style= {inlineCssObject}>my name is qasim</h1>
//     </>,
//     document.getElementById('root')
//    )

// ______JS mini-project show date and time with morning noon and night

//     let mor = '';
//     let css1 = {
//       color: 'red',
//       background: 'skyblue',
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//     }
//     
//      const dateHour = new Date().getHours();
//     if (dateHour < 12){
//       mor = 'Good Afternoon,';
//       css1.color = 'blue'
//       console.log(mor);
//     }else if (dateHour > 12 && dateHour < 19){
//       css1.color = 'green';
//       mor = 'Good Afternoon,';
//     }else {
//       css1.color = 'black';
//       mor = 'Good Night,';
//     }
//     
//     ReactDOM.render(
//       <>
//         <div style={css1}>
//           <h1>Hello Sir,{mor}</h1>
//         </div>
//       </>,
//       document.getElementById('root')
//     )

// Components in React JS

ReactDOM.render(
  <>
    {/* always use first word Capital In React component file like Heading.jsx,List.jsx etc otherwise we get error*/}
    {/* <Heading/>   if we don't have child tag than we used also used self closing tag, | Same As <Heading></Heading> */}
    <App/>

    {/* Calculator in React JSX component */}
    {/* <h1>{`The Sum of two Number is: ${add(2,2)}`}</h1>
    <h1>{`The mul of two Number is: ${mul(5,2)}`}</h1>
    <h1>{`The div of two Number is: ${div(1,2)}`}</h1>
    <h1>{`The sub of two Number is: ${sub(1,2)}`}</h1> */}
  </>,
  document.getElementById('root')
)