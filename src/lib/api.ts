import { LoginRequest, LoginResponse, ApiError } from "@/types/auth";

import { mockFetchSuccessResponse } from "./mockPersona";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const AI_API_BASE_URL =
  process.env.NEXT_PUBLIC_AI_API_URL || "http://localhost:8000";

class ApiClient {
  private baseURL: string;
  private aiBaseURL: string;

  constructor(baseUrl: string, aiBaseUrl: string) {
    this.baseURL = baseUrl;
    this.aiBaseURL = aiBaseUrl;
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({
        message: "An unexpected error occurred",
        statusCode: response.status,
      }));

      throw {
        message: errorData.message || "An unexpected error occurred",
        statusCode: response.status,
        error: errorData.error,
      } as ApiError;
    }

    return response.json();
  }

  async login(credentials: LoginRequest): Promise<LoginResponse> {
    // const response = await fetch(`${this.baseURL}/auth/login`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(credentials),
    // });

    return this.handleResponse<LoginResponse>(mockFetchSuccessResponse);
  }
}
export const apiClient = new ApiClient(API_BASE_URL, AI_API_BASE_URL);
