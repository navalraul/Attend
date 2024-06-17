import React, { useState } from 'react';
import  './Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [userData, setUserData] = useState({name: "", password: "", email: "", number: ""});
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }
    // console.log(handleChange)

    const handleSubmit = (event) => {
        event.preventDefault()

        if(userData.name && userData.password && userData.email && userData.number) {

            const array = JSON.parse(localStorage.getItem("Users")) || [];
            const Ls = { name: userData.name,
                 email: userData.email, password: userData.password, number: userData.number};
            // console.log(Ls)
            array.push(Ls);
            localStorage.setItem("Users",JSON.stringify(array));
            alert("Registration Successful..")
            router('/login')
            
        } else {
            alert("Please fill all the fields")
        }
    }


  return (
    <div id='main'>
      <div className='info'>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='name' onChange={handleChange} name='name' placeholder='UserName' />
            <label>Email</label>
            <input type='email' onChange={handleChange} name='email' placeholder='Email' />
            <label>Password</label>
            <input type='password' onChange={handleChange} name='password' placeholder='Password' />
            <label>Contact No</label>
            <input type='number' onChange={handleChange} name='number' placeholder='Number' />
            <input type='submit' value="Register" />
        </form>
        <button onClick={() => router('/login')}>Login</button>
      </div>
    </div>
  )
}

export default Register
