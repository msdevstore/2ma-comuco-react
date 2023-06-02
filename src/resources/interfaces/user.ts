export interface UserCreateRequest {
  name: string;
  email: string;
  password: string;
}

export interface UserFormValues extends UserCreateRequest {
  confirmPassword: string;
}

export interface LoginRequest {
  name: string;
  email: string;
  password: string;
}

export interface ForgotPasswordRequest {
  email: string;
}
