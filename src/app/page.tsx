'use client';

import { LoginForm } from '@/components/login-form';
import { LoginResponse } from '@/types/auth';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleLoginSuccess = (response: LoginResponse) => {
    // Store the token and user data
    localStorage.setItem('access_token', response.access_token);
    localStorage.setItem('user', JSON.stringify(response.user));
    
    // Navigate to dashboard
    router.push('/dashboard');
  };

  return (
    <div className="min-h-screen  flex items-center justify-center ">
      <div className="w-full max-w-[1280px]"> 
        <LoginForm onSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
}
