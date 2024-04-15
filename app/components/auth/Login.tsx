'use client'
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useAuth } from './AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const response = await axios.post('/api/login', { email, password });
            console.log('Logged in successfully:', response.data);
            if (response.data.token) {
                login(response.data);
                router.push('/dashboard');
            } else {
                setError('No token received');
            }
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