import { HttpService } from './http.service';
import { API_SERVER } from '../constants';

export class GroupsService {
  static getGroups() {
    return HttpService.get(`${API_SERVER}/groups`);
  }
}
