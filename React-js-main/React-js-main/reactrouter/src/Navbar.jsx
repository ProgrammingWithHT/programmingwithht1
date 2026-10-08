import React from "react";
import { NavLink,Link } from "react-router-dom";

const Navbar = ()=> {
    return <>

        <NavLink className="boldT" to='/'>AboutWithOutReload</NavLink>
        <NavLink className='boldT' to="/contact"> ContactwithOutreload </NavLink>
        <NavLink className='boldT' to="/contact/name"> Name </NavLink>

        {/* <Link className="boldT" to='/'>AboutWithOutReloadPage </Link> a.active css property not work in this tag so we used NavLink tag*/} 
        {/* <Link className="boldT" to="/contact"> ContactwithOutreloadpage</Link> */}

        {/* <a href="/"> About</a>
            <a href="/contact"> Contact</a>  if we used 'a' tag in reactjs than page reload and if we used Link tag than page can't reload*/}
    </>
}

export default Navbar;