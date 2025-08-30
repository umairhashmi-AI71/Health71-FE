"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RedirectPage = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the home page on mount
    router.push('/home');
  }, [router]);

  return <div>Redirecting...</div>;
};

export default RedirectPage;