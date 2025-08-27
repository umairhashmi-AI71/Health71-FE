import { LoginResponse } from "@/types/auth";

  const mockLoginResponse: LoginResponse = {
  access_token: 'mock_access_token_123456',
  token_type: 'Bearer',
  expires_in: 3600,
  user: {
    id: 'user_001',
    email: 'jane.doe@example.com',
    firstName: 'Jane',
    lastName: 'Doe',
    isActive: true,
    lastLoginAt: new Date('2025-08-26T10:00:00Z'),
  },
};

export const mockFetchSuccessResponse = new Response(JSON.stringify(mockLoginResponse), {
  status: 200,
  headers: {
    'Content-Type': 'application/json',
  },
});
 