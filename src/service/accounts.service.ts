import { HttpService } from './http.service';
import { API_SERVER } from '../constants';

export class AccountsService {
  static getAccounts() {
    return HttpService.get(`${API_SERVER}/accounts`);
  }
}
