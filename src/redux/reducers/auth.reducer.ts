import { AUTH_ACTIONS } from '../action-types';
import { UserModel } from 'resources/models/user.model';

export interface Tokens {
  accessToken: string | null;
  refreshToken: string | null;
}

export interface AuthState {
  tokens?: Tokens;
  account: UserModel | null;
  loading: boolean;
  hasError: boolean;
}

const initialState: AuthState = {
  account: null,
  loading: false,
  hasError: false
};

const authReducer = (state: AuthState = initialState, action: any) => {
  const {type, payload} = action;

  switch (type) {
    case AUTH_ACTIONS.SET_TOKEN:
      return {
        ...state,
        tokens: payload.tokens,
      };

    case AUTH_ACTIONS.SET_ACCOUNT:
      return {
        ...state,
        account: payload.account,
        hasError: false
      };
    
    case AUTH_ACTIONS.SET_ACCOUNT_LOADING:
      return {
        ...state,
        loading: payload.loading,
      };

    case AUTH_ACTIONS.GET_ACCOUNT_ERROR:
      return {
        ...state,
        hasError: true
      };

    default:
      return state;
  }
}

export default authReducer;
