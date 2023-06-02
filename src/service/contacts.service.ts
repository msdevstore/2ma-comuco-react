import { HttpService } from './http.service';
import { API_SERVER } from '../constants';
import { IPagination } from 'resources/interfaces';

export class ContactsService {
  static getContacts(pagination: { account?: string, searchKey?: string } & IPagination) {
    return HttpService.get(`${API_SERVER}/contacts`, pagination);
  }
}
