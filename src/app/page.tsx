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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Health71 RCM</h1>
          <p className="text-gray-600">Healthcare Revenue Cycle Management</p>
        </div>
        <LoginForm onSuccess={handleLoginSuccess} />
      </div>
    </div>
  );
}
