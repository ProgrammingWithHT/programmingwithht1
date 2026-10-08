import React from 'react'

const SignUp = () => {
  return (
    <div className='loginBox'>
            <h1>
                Wellcome To Chat Application
            </h1>
            <form action="" className='loginForm'>
                <h2>Sign Up</h2>
                <p>Enter your username and password to signup here</p>

                <input type="text" placeholder="Name" className="f-input" id="input" name='name'/>
                <input type="email" placeholder="Username" className="f-input" id="input" name='email'/>
                <input type="password" placeholder="Enter Password" className="f-input" name="password" />
                <input type="password" placeholder="Re-Enter Password" className="f-input" name="Repassword" />
                <button className="btn"> Sign Up </button>
                
            </form>
        </div>
  )
}

export default SignUp