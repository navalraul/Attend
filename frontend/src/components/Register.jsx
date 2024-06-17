import React, { useState } from 'react';
import  './Register.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [userData, setUserData] = useState({name: "", password: "", email: "", number: ""});
    const router = useNavigate();

    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if(userData.name && userData.password && userData.email && userData.number) {

            const array = JSON.parse(localStorage.setItem("Users")) || [];
            const Ls = { name: userData.name,
                 email: userData.email, password: userData.password, number: userData.number};
            
            array.push(Ls);

            console.log(Ls)
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
            <input type='name' onChange={handleChange} placeholder='UserName' />
            <label>Email</label>
            <input type='email' onChange={handleChange} placeholder='Email' />
            <label>Password</label>
            <input type='password' onChange={handleChange} placeholder='Password' />
            <label>Contact No</label>
            <input type='number' onChange={handleChange} placeholder='Number' />
            <input type='submit' value="Register" />
        </form>
      </div>
    </div>
  )
}

export default Register
