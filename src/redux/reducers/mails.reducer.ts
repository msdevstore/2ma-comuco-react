import { MailModel } from 'resources/models';
import { MAIL_ACTIONS } from '../action-types';

export interface MailsState {
  mails: MailModel[];
  activeMail: MailModel | null;
  total: number;
  page: number;
  pageSize: number;
  hasError: boolean;
}

const initialState: MailsState = {
  mails: [],
  activeMail: null,
  total: 0,
  page: 1,
  pageSize: 5,
  hasError: false
};

const mailsReducer = (state: MailsState = initialState, action: any) => {
  switch (action.type) {
    case MAIL_ACTIONS.SET_MAILS:
      return {
        ...state,
        mails: action.mails,
        hasError: false
      };

    case MAIL_ACTIONS.GET_MAILS_SUCCESS:
      return {
        ...state,
        mails: action.payload.mails,
        total: action.payload.total,
        page: action.payload.page,
        pageSize: action.payload.pageSize,
        hasError: false
      };

    case MAIL_ACTIONS.GET_MAIL_SUCCESS:
      return {
        ...state,
        activeMail: action.payload,
        hasError: false
      };

    case MAIL_ACTIONS.GET_MAILS_ERROR:
      return {
        ...state,
        hasError: true
      };

    default:
      return state;
  }
};

export default mailsReducer;
