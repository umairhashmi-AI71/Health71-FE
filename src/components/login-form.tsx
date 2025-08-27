"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@/components/ui";
import { loginSchema, LoginFormData } from "@/lib/validations";
import { apiClient } from "@/lib/api";
import { LoginResponse, ApiError } from "@/types/auth";
import { AlertCircle, CheckCircle } from "lucide-react";

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
      setSuccessMessage("Login successful! Welcome back.");
      reset();

      // Call the success callback if provided
      if (onSuccess) {
        onSuccess(response);
      }

      // You can add navigation logic here
      console.log("Login successful:", response);
    } catch (error) {
      const apiError = error as ApiError;
      setApiError(apiError.message || "Login failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex h-screen p-6 gap-6">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <div className="w-[360px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78"
            height="32"
            viewBox="0 0 78 32"
            fill="none"
            className="mb-6"
          >
            <g clip-path="url(#clip0_7_2991)">
              <path
                d="M78 0.587891H73.7943V31.3986H78V0.587891Z"
                fill="#F88265"
              />
              <path
                d="M12.3047 32C8.33049 32 5.07337 30.5787 2.88847 27.8916C0.99804 25.5716 0 22.434 0 18.8189C0 9.82951 6.10063 0.204956 15.1841 0.204956C19.3831 0.204956 22.7256 1.5091 25.1241 4.08136C28.4869 7.68972 29.159 12.9446 29.1927 16.7917C32.8387 13.751 38.0537 10.0255 40.5622 10.6989C41.8368 11.0413 42.6303 12.136 42.6303 13.5572V31.4008H38.4246V15.3502C35.6844 16.848 30.5706 20.9834 29.0106 22.4835V31.4031H24.8049V26.8127C21.4714 29.3894 16.6857 32.0045 12.3047 32.0045V32ZM15.1841 4.41922C8.71487 4.41922 4.20571 12.0076 4.20571 18.8189C4.20571 21.4519 4.87556 23.6706 6.14784 25.2292C7.52801 26.9253 9.60052 27.7857 12.3047 27.7857C17.3376 27.7857 23.1775 22.9791 24.8071 21.1772C24.8139 20.9564 24.8319 20.6433 24.8588 20.2492C25.0387 17.6296 25.513 10.6719 22.0513 6.95543C20.4598 5.24585 18.2142 4.41696 15.1841 4.41696V4.41922Z"
                fill="#283754"
              />
              <path
                d="M65.5695 6.37881C65.6998 6.75497 66.028 8.06362 64.776 9.04792C56.4904 15.5754 51.7767 23.1458 51.1046 31.3986H55.3261C56.0049 24.3823 60.0465 18.1319 67.3745 12.3612C69.6246 10.5908 70.4742 7.70098 69.5436 5.00259C68.6175 2.32222 66.1854 0.590118 63.3463 0.590118H47.0652V4.80438H63.3463C64.9041 4.80438 65.4413 6.01167 65.5695 6.38107V6.37881Z"
                fill="#AFD8D4"
              />
              <path
                d="M37.204 2.71866C37.204 1.17801 38.4246 0 39.9171 0C41.4097 0 42.6303 1.17801 42.6303 2.71866C42.6303 4.25931 41.4097 5.39227 39.9171 5.39227C38.4246 5.39227 37.204 4.21426 37.204 2.71866Z"
                fill="#283754"
              />
            </g>
            <defs>
              <clipPath id="clip0_7_2991">
                <rect width="78" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <h2 className="text-[30px]/[36px] font-bold mb-3 font-myfont text-foreground">
            Sign in
          </h2>
          <p className="mb-6 text-sm text-col text-muted">
            Log in to unlock tailored content and stay connected with your
            community.
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Email Field */}
            <div className="relative">
              <Input
                {...register("email")}
                type="email"
                label="Email"
                placeholder="Email"
                className="mb-4"
                error={errors.email?.message}
                autoComplete="email"
              />
            </div>

            <Input
              {...register("password")}
              type="password"
              label="Password"
              placeholder="Password"
              className="mb-4"
              error={errors.password?.message}
              showPasswordToggle={false}
              autoComplete="current-password"
            />

            <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
              <label className="flex items-center text-base-primary font-medium">
                <input
                  type="checkbox"
                  className="mr-2 bg-primary checked:bg-primary hover:bg-primary w-4 h-4"
                  defaultChecked
                />
                Keep me signed in
              </label>
              <a href="#" className="text-muted">
                Forgot password?
              </a>
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
              className="w-full text-sm mb-4"
              size="lg"
              isLoading={isSubmitting}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing In..." : "Sign In"}
            </Button>
          </form>
          <p className="text-sm text-center">
            {`Don't have an account?`}
            <a href="#" className="text-green">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <div className="w-1/2 bg-gray-100 flex items-center justify-center">
        <div className="w-[300px] h-[300px] border border-gray-300 rounded flex items-center justify-center">
          <span className="text-gray-400">[Image Placeholder]</span>
        </div>
      </div>
    </div>
  );
}
