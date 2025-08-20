'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardHeader, Button, Input } from '@/components/ui';
import { loginSchema, LoginFormData } from '@/lib/validations';
import { apiClient } from '@/lib/api';
import { LoginResponse, ApiError } from '@/types/auth';
import { LogIn, Mail, Lock, AlertCircle, CheckCircle } from 'lucide-react';

interface LoginFormProps {
  onSuccess?: (response: LoginResponse) => void;
}

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    setApiError(null);
    setSuccessMessage(null);

    try {
      const response = await apiClient.login(data);
      setSuccessMessage('Login successful! Welcome back.');
      reset();
      
      // Call the success callback if provided
      if (onSuccess) {
        onSuccess(response);
      }
      
      // You can add navigation logic here
      console.log('Login successful:', response);
      
    } catch (error) {
      const apiError = error as ApiError;
      setApiError(apiError.message || 'Login failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <LogIn className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Welcome to Health71 RCM</h1>
          <p className="text-sm text-gray-600 mt-2">
            Please sign in to access your dashboard
          </p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-3 top-9 h-4 w-4 text-gray-400" />
              <Input
                {...register('email')}
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                className="pl-10"
                error={errors.email?.message}
                autoComplete="email"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <Lock className="absolute left-3 top-9 h-4 w-4 text-gray-400" />
              <Input
                {...register('password')}
                type="password"
                label="Password"
                placeholder="Enter your password"
                className="pl-10 pr-10"
                error={errors.password?.message}
                showPasswordToggle={true}
                autoComplete="current-password"
              />
            </div>

            {/* API Error Message */}
            {apiError && (
              <div className="flex items-center gap-2 p-3 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md">
                <AlertCircle className="h-4 w-4 flex-shrink-0" />
                <span>{apiError}</span>
              </div>
            )}

            {/* Success Message */}
            {successMessage && (
              <div className="flex items-center gap-2 p-3 text-sm text-green-700 bg-green-50 border border-green-200 rounded-md">
                <CheckCircle className="h-4 w-4 flex-shrink-0" />
                <span>{successMessage}</span>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full"
              size="lg"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-center">
            <a
              href="#"
              className="text-sm text-blue-600 hover:text-blue-500 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
