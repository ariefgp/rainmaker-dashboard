'use client'
import { useState } from 'react';
import axios from 'axios'; 

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login', { email, password });
            console.log('Logged in successfully:', response.data);
            // You might want to store the token in local storage and redirect to the dashboard here
        } catch (error) {
            setError('Failed to login');
            console.error('Login error:', error);
        }
    };

    return (
        <div className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <label className="label">
                <span className="label-text">Password</span>
            </label>
            <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button className="btn btn-primary mt-4" onClick={handleLogin}>
                Login
            </button>
        </div>
    );
};

export default Login;