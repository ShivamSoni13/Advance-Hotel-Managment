import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { siteRequest } from '../../util/requestMethod';

export default function CookingStaff() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate =useNavigate();

    const handleLogin = () => {
        // Make an HTTP POST request to the backend route for cook login
        siteRequest.post('cook/login', {
            username: username,
            password: password
        })
        .then(response => {
            // Handle successful login
           // console.log('Login successful:', response.data);
           localStorage.setItem('user',username)

            // Redirect to another page or set authentication state if needed
           navigate('/staff/ordersPage')
        })
        .catch(error => {
            // Handle failed login
            alert('Invalid credentials');
            console.error('Login failed:', error);
        });
    };

    return (
        <div className='h-screen bg-Cust1'>
            <header className='text-orangeD1 text-3xl font-bold bg-black text-center py-5 '>Mejban Empire</header>
            <div className='w-full sm:w-2/5 mx-auto flex flex-col justify-center  border-black h-4/5 '>
                <h1 className='font-Ubuntu text-4xl text-center my-2 text-orangeD1'>Cooking Staff Login</h1>
                <form className='border mx-auto py-5 w-4/5 sm:w-3/5 flex flex-col items-start px-2 rounded-md bg-white'>
                    <label className='font-bold'>
                        Username:
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className='border rounded-md pl-2 ml-1'
                        />
                    </label >
                    <br />
                    <label className='font-bold '>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='border rounded-md pl-2 ml-1'
                        />
                    </label>
                    <br />
                    <button type="button" onClick={handleLogin} className='bg-orangeD1 text-white font-bold p-2 rounded-md w-1/4 '>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
