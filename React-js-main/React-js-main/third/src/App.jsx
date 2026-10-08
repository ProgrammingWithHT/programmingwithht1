import React, {createContext,useState,useEffect} from 'react';
import GetChildData from './GetChildData';

// import ComA from './ComA';


// Context Api In ReactJS

// So, React hooks provides a concept call Context.
// React Context API allows you to easily access data at
// different levels of the component tree,
// without passing props to every level

// Required step
// 1. createContext
// 2. Provider
// 3. consumer(consumer always function to get value)

  //  const FirstName = createContext();
  //  const LastName = createContext();
   
  //  const App = () => {
     
  //    return <>
   
  //      <FirstName.Provider value={'HAMZA'}>
  //        <LastName.Provider value={'TAHIR'}>
  //          <ComA/>
  //        </LastName.Provider>
  //      </FirstName.Provider>
   
  //    </>
  //  }
   
  //  export default App;
  //  export {FirstName,LastName};


// useEffect Hook IN ReactJS
// 1. useEffect run automatically when render method run

  // const App = ()=> {
  //   let [num,setNum] = useState(0);
  //   let [num1,setNum1] = useState(0);
  
  //   useEffect(() => {
  //     alert('i am clicked')
  //     document.title = `You Clicked Me ${num} Times`;
  //   },[num]); //[]empty array means when we first time refersh our page than 'i am clicked' run otherwise not
  //   //[num] means num when change than  useEffect run
  //   return <>
  //     <button onClick={()=> setNum(++num)}>click me {num}</button>
  //     <button onClick={()=> setNum1(++num1)}>click me {num1}</button>
  //   </>
  // }
  // export default App;











































// import React, {createContext, useState} from 'react';
// import Cards from './Cards'
// import Sdata from './Sdata'
// // import './index.css';
// import AddIcon from '@material-ui/icons/Add';
// import Button from '@material-ui/core/Button';
// import { ThemeProvider } from '@material-ui/core';
// import AddIcon from '@mui/icons-material/Add';

// For Props in React JS
// function App(){
  //     return <>
  //     {
    //       Sdata.map((val) => {
      //       return <>
      //         <Cards
//           key={val.id}  //key is complusory in react js to identifies our object
//           imgsrc={val.imgsrc}
//           sname={val.sname}
//           title={val.title}
//           link={val.link}
//         />
//       </>
//     })
//     }
//   </>
// };

// For Hook In React JS

  // const name = ['hamza','qasim','amna'];
  // const [name1,name2,name3]= name; //array destructing
  // console.log(name1) //output: hamza
  
  //  var count = 0;
  //  const IncNum = () =>{
  //    console.log(count)
  //    count++;
  //  } this code not increase our count variable so we used useState();

  //  const App  = () => {
  //    const state = useState();  //useState contain two value [variable,function]
  //    let [count,setCount] = useState(0); //count contain previous value and setValue contain updated value //useState(0) hold initial value
  //  
  //  
  //    const IncNum = () =>{
  //      setCount(++count);   //count+1 work
  //      // setCount(count++); work if we press button two time
  //      // console.log(count)
  //      // count++;
  //    }
  //  
  //    return <>
  //      <h1>{count}</h1>
  //      <button onClick={IncNum}> Click Me </button>
  //    </>
  //  }


// Hook challenge get time


  //  const App = ()=> {
  //    let time = new Date().toLocaleTimeString();
  //  
  //    const [ctime,setCtime] = useState(time);
  //    
  //    const click = () => {
  //      time = new Date().toLocaleTimeString();
  //      setCtime(time);
  //      console.log(time);
  //    }
  //  
  //    return <>
  //      <h1>{ctime}</h1>
  //      <button onClick={click}>Change Time</button>
  //    </>
  //  }


// #33 Handling Events In ReactJS

  //  const arr = ['red','green','blue'];
  //  let name = ['me red','me green','me blue'];
  //  
  //  let i=0;
  //  
  //  const App = () =>{
  //    // let purple = 'red';
  //    let [bg,setBg] = useState(arr[i]);
  //    let [name1,setName] = useState(name[i]);
  //  
  //    const bgChange = () => {
  //      // purple = 'green';
  //    
  //      ++i;
  //      console.log(i)
  //      setBg(arr[i]);
  //      setName(name[i])
  //      if(i == 2){i=-1;console.log('h',i);};
  //      // console.log(purple);
  //    }
  //  
  //    return <>
  //      <div style={{backgroundColor:bg}}>
  //        <button onClick={bgChange}>
  //           {name1}
  //        </button>
  //      </div>
  //    </>
  //  }



// Form in ReactJS
// React have tw0 component 
// 1. controlled component and uncontrolled component

  //  const App = () => {
  //    const [name,setName] = useState('');
  //  
  //    const inputEvent = (e) => {
  //      setName(e.target.value);
  //    }
  //    return <>
  //      <div>
  //        <h1> Hello {name}</h1>
  //        {/* <input type='text' defaultValue='hamza' placeholder='Enter Your Name'/>  if we used value than value is set and not changed because of react controlled component by removeing this error just write defaultValue='hamza'  */}
  //        {/* second method to solve above problem of value='' */}
  //        <input 
  //          type='text' 
  //          onChange={inputEvent} 
  //          value={name} 
  //          placeholder='Enter Your Name'
  //        />   
  //        <button> Submits ME </button>
  //      </div>


// Login Form Submit

  //  const App = () => {
  //    const [name,setName] = useState('');
  //    const [fullName,setFullName] = useState();
  //    const [lastName, setlastName] = useState('');
  //  
  //    const inputEvent = (e) => {
  //      setName(e.target.value);
  //    }
  //    const SinputEvent = (e) => {
  //      setlastName(e.target.value);
  //    }
  //  
  //    const onSubmits = (e) => {
  //      e.preventDefault();
  //      setFullName(name+' '+lastName);
  //    }
  //    return <>
  //      <form onSubmit={onSubmits}>
  //          <h1> Hello {fullName}</h1>
  //  
  //          <input 
  //            type='text' 
  //            onChange={inputEvent} 
  //            value={name} 
  //            placeholder='Enter Your Name'
  //          />
  //
  //          <input 
  //            type='text' 
  //            onChange={SinputEvent} 
  //            value={lastName} 
  //            placeholder='Enter Your lastName'
  //          />
  //          <button type='submit'> Submits ME </button>
  //      </form>

// login form more simplefie


  // const App = () => {
  //   const [fullName,setFullName] = useState({
  //     fname: '',
  //     lname: '',
  //     email: '',
  //     phone: ''
  //   });
  //
  //   const inputEvent = (e) => {
  //    // const value = e.target.value;
  //    // const name = e.target.name;
  //    const {name,value} = e.target;
  //
  //    setFullName((preValue)=>{
  //      return {
  //        ...preValue,
  //        [name]:value
  //      }//shortcut of below commented code
  //
  //      // if(name === 'fname'){
  //      //   return {
  //      //     fname: value,
  //      //     lname: preValue.lname,
  //      //     email: preValue.email,
  //      //     phone: preValue.phone
  //      //   }
  //      // }
  //      // else if(name === 'lname'){
  //      //   return {
  //      //     fname: preValue.fname,
  //      //     lname: value,
  //      //     email: preValue.email,
  //      //     phone: preValue.phone
  //      //   }
  //      // }
  //      // else if(name === 'email'){
  //      //   return {
  //      //     fname: preValue.fname,
  //      //     lname: preValue.lname,
  //      //     email: value,
  //      //     phone: preValue.phone
  //      //   }
  //      // }
  //      // else if(name === 'phone'){
  //      //   return {
  //      //     fname: preValue.fname,
  //      //     lname: preValue.lname,
  //      //     email: preValue.email,
  //      //     phone: value
  //      //   }
  //      // }
  //    })
  //   }
  //  
  //   const onSubmits = (e) => {
  //     e.preventDefault();
  //     alert('form submitted')
  //   }
  //
  //   return <>
  //     <form onSubmit={onSubmits}>
  //         <h1> Hello {fullName.fname} {fullName.lname}</h1>
  // 
  //         <input 
  //           type='text' 
  //           onChange={inputEvent} 
  //           name='fname'
  //           value={fullName.fname} 
  //           placeholder='Enter Your Name'
  //         />
  //
  //         <input 
  //           type='text' 
  //           onChange={inputEvent} 
  //           name='lname'
  //           value={fullName.lName} 
  //           placeholder='Enter Your lastName'
  //         />
  //
  //         <input 
  //           type='text' 
  //           onChange={inputEvent} 
  //           name='email'
  //           value={fullName.email} 
  //           placeholder='Enter Your E-mail'
  //         />
  //
  //         <input 
  //           type='text' 
  //           onChange={inputEvent} 
  //           name='phone'
  //           value={fullName.phone} 
  //           placeholder='Enter Your phone'
  //         />
  //
  //         <button type='submit'> Submits ME </button>
  //     </form>
  // </>
// }

// How To use  Material UI Icons IN ReactJS

  //  const App = () => {
  //    return <>
  //    <Button variant="contained">
  //      <AddIcon/>
  //    </Button>
  //    
  //    </>
  //      
  //  }


  // How to pass data from child to parent components
  const App = () =>{

    const getData = (data) =>{
      console.log(data)
    }

    return <>
      <GetChildData getD={getData} />
      <h1>kasa ho ap sab</h1>
    </>
  }
  export default App;
