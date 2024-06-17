import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [userData, setUserData] = useState({})
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (userData.email && userData.password) {
            const users = JSON.parse(localStorage.getItem("Users"));

            var flag = false;
            for (var i = 0; i < users.length; i++) {
                if (users[i].email === userData.email && users[i].password === userData.password) {
                    flag = true;
                    break;
                }
            }
            if (flag === false) {
                return alert("Please Check your email & password")
            } else {
                localStorage.setItem("Current-user", JSON.stringify(userData));
                alert("Login Successfull....");
                setUserData({ email: "", password: "" });
                router('/')
            }
        }

    }

  return (
    <div>
      <div className='info'>
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input type='email' onChange={handleChange} name='email' placeholder='Email' />
            <label>Password</label>
            <input type='password' onChange={handleChange} name='password' placeholder='Password' />
            <input type='submit' value="Login" />
        </form>
        <button onClick={() => router('/register')}>Register</button>
      </div>
    </div>
  )
}

export default Login
