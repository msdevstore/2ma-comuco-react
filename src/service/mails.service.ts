import { HttpService } from './http.service';
import { API_SERVER } from '../constants';
import { IPagination } from 'resources/interfaces';

export class MailsService {
  static getMails(pagination: { searchKey?: string, group?: string } & IPagination) {
    return HttpService.get(`${API_SERVER}/mails`, pagination);
  }

  static getMail(id: number) {
    return HttpService.get(`${API_SERVER}/mails/${id}`);
  }
}
