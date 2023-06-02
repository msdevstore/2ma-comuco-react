import { combineReducers } from '@reduxjs/toolkit';
import authReducer, { AuthState } from './auth.reducer';
import contactsReducer, { ContactsState } from './contacts.reducer';
import mailsReducer, { MailsState } from './mails.reducer';

export interface RootState {
  authReducer: AuthState,
  contactsReducer: ContactsState,
  mailsReducer: MailsState
}

const rootReducer = combineReducers<RootState>({
  authReducer,
  contactsReducer,
  mailsReducer
});

export default rootReducer;
