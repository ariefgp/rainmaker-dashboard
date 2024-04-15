'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useAuth } from '../components/auth/AuthContext';

const Dashboard = () => {
    const [userCount, setUserCount] = useState(0);
    const [fileCount, setFileCount] = useState(0);
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        } else {
            fetchStats();
        }
    }, [isAuthenticated, router]);

    const fetchStats = async () => {
        const usersResponse = await axios.get('/api/users/count');
        const filesResponse = await axios.get('/api/files/count');
        setUserCount(usersResponse.data.count);
        setFileCount(filesResponse.data.count);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Total Users</div>
                    <div className="stat-value">{userCount}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Total Files</div>
                    <div className="stat-value">{fileCount}</div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;