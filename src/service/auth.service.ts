import { HttpService } from './http.service';
import {
  ForgotPasswordRequest,
  LoginRequest,
  UserCreateRequest
} from '../resources/interfaces';

export class AuthService {
  static login(data: LoginRequest) {
    return HttpService.post('/login', data)
  }

  static forgotPassword(data: ForgotPasswordRequest) {
    return HttpService.post('/forgot-password', data)
  }

  static register(data: UserCreateRequest) {
    return HttpService.post('/register', data)
  }

  static getAccount() {
    return HttpService.get('/me');
  }
}
