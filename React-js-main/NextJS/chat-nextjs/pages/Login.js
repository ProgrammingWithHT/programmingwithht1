
import React, { useRef } from 'react'
// import { cookies } from 'next/headers'
// import Cookies from 'cookies'

const Login = () => {
    // const cookiesList = cookies()
    // const hasCookie = cookiesList.has('theme')
    // console.log('have: ',hasCookie)

    const sIn = useRef(null)
    const sUp = useRef(null)
    function moveUp(e){
        e.preventDefault();
        sIn.current.style.transform = 'translate(-600px,0px)';
        sUp.current.style.transform = 'translate(0px,47px)'
    }
    function moveIn(e){
        e.preventDefault();
        sIn.current.style.transform = 'translate(0px,0px)';
        sUp.current.style.transform = 'translate(600px,47px)'
    }

    return (
        <div className='loginBox'>
            <h1>
                Welcome To Chat Application
            </h1>
            <form action="" className='loginForm' ref={sIn}>
                <h2>Log In</h2>
                <p>Enter your username and password to login here</p>

                <input type="email" placeholder="Username" className="f-input" id="input" name='email' />
                <input type="password" placeholder="Password" className="f-input" name="password" />
                <button className="btn"> Log In </button>
                <div className='btnBox'>
                    <button className="btn btn1">Forgot Password</button>
                    <button className="btn btn1" onClick={(e) => moveUp(e)}>Sign Up</button>
                </div>
            </form>
            <form action="" className='loginForm signupForm' ref={sUp}>
                <h2>Sign Up</h2>
                <p>Enter your username and password to signup here</p>

                <input type="text" placeholder="Name" className="f-input" id="input" name='name'/>
                <input type="email" placeholder="Username" className="f-input" id="input" name='email'/>
                <input type="password" placeholder="Enter Password" className="f-input" name="password" />
                <input type="password" placeholder="Re-Enter Password" className="f-input" name="Repassword" />
                <input type='file' className='file' name='avatar' />
                <div className='btnBox'>
                    <button className="btn btn1" onClick={(e) => moveIn(e)}> Sign In </button>
                    <button className="btn btn1"> Sign Up </button>
                </div>
                
            </form>
        </div>
    )
}

export default Login