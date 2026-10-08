import React from "react";
import { Routes ,Route } from 'react-router-dom';
import Contact from "./Contact";
import About from "./About";
import Navbar from "./Navbar";

const App = () => {

    const Error = ()=>{
        return <h2>Error Page</h2>
    }
    const Name = ()=> {
        return <h2>Name Page</h2>
    }

    return <>
        <h1>Coding With HT</h1>

        <Navbar/>

        <Routes>
            <Route path='/' element={<About/>} /> {/*Make About as our default page*/}
            {/* <Route path='/contact' element={<Contact name="Hamza" />} /> */}
            <Route path='/contact' element={<Contact name="Hamza" />} />
            <Route path='/contact/name' element={<Name/>} />
            <Route path='/*' element={<Error/>} />
        </Routes>
        
    </>   
}

export default App;