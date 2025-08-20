export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  user: {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    isActive: boolean;
    lastLoginAt?: Date;
  };
}

export interface ApiError {
  message: string;
  statusCode: number;
  error?: string;
}
