import { Dispatch } from 'redux';
import { CONTACT_ACTIONS } from '../action-types';
import { ContactsService } from 'service';
import { IPagination } from 'resources/interfaces';

export const getContactsAction = (pagination: { account?: string, searchKey?: string } & IPagination) => async (dispatch: Dispatch) => {
  try {
    const res = await ContactsService.getContacts(pagination);
    dispatch({
      type: CONTACT_ACTIONS.GET_CONTACTS_SUCCESS,
      payload: {
        contacts: res.contacts,
        total: res.total,
        ...pagination
      }
    });
    return res;
  } catch (err) {
    dispatch({
      type: CONTACT_ACTIONS.GET_CONTACTS_ERROR
    });
  }
}
