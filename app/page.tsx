'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './components/auth/AuthContext';

const Home = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    router.replace(isAuthenticated ? '/dashboard' : '/login');
  }, [isAuthenticated, router]);

  return null;
};

export default Home;