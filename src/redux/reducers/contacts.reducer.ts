import { ContactModel } from 'resources/models';
import { CONTACT_ACTIONS } from '../action-types';

export interface ContactsState {
  contacts: ContactModel[];
  total: number;
  page: number;
  pageSize: number;
  hasError: boolean;
}

const initialState: ContactsState = {
  contacts: [],
  total: 0,
  page: 1,
  pageSize: 5,
  hasError: false
};

const contactsReducer = (state: ContactsState = initialState, action: any) => {
  switch (action.type) {
    case CONTACT_ACTIONS.SET_CONTACTS:
      return {
        ...state,
        contacts: action.contacts,
        hasError: false
      };

      case CONTACT_ACTIONS.GET_CONTACTS_SUCCESS:
        return {
          ...state,
          contacts: action.payload.contacts,
          total: action.payload.total,
          page: action.payload.page,
          pageSize: action.payload.pageSize,
          hasError: false
        };

    case CONTACT_ACTIONS.GET_CONTACTS_ERROR:
      return {
        ...state,
        hasError: true
      };

    default:
      return state;
  }
};

export default contactsReducer;
