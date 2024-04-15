'use client'
import { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            setError("Passwords don't match");
            return;
        }
        try {
            const response = await axios.post('/api/signup', { email, password });
            console.log('Registered successfully:', response.data);

        } catch (error) {
            setError('Failed to register');
            console.error('Signup error:', error);
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
            <label className="label">
                <span className="label-text">Confirm Password</span>
            </label>
            <input
                type="password"
                placeholder="Confirm your password"
                className="input input-bordered w-full max-w-xs"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
            <button className="btn btn-primary mt-4" onClick={handleSignUp}>
                Sign Up
            </button>
        </div>
    );
};

export default SignUp;