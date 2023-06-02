import { Dispatch } from 'redux';
import { AUTH_ACTIONS } from '../action-types';
import { Tokens } from '../reducers/auth.reducer';
import { AuthService } from 'service/auth.service';
import {
  ForgotPasswordRequest,
  LoginRequest,
  UserCreateRequest,
} from 'resources/interfaces';
import { UserModel } from 'resources/models/user.model';

export const setToken = (tokens: Tokens) => ({
  type: AUTH_ACTIONS.SET_TOKEN,
  payload: { tokens }
});

export const setAccount = (account: UserModel | null) => ({
  type: AUTH_ACTIONS.SET_ACCOUNT,
  payload: { account }
});

export const setAccountLoading = (loading: boolean) => ({
  type: AUTH_ACTIONS.SET_ACCOUNT_LOADING,
  payload: { loading }
});

export const loginAction = (
  data: LoginRequest
) => async (dispatch: Dispatch) => {
  try {
    const res = await AuthService.login(data);
    dispatch(setToken({
      accessToken: res.access_token,
      refreshToken: res.refresh_token
    }));
    return res;
  } catch (err) {
    dispatch({
      type: AUTH_ACTIONS.GET_ACCOUNT_ERROR
    });
  }
}

export const forgotPasswordAction = (
  data: ForgotPasswordRequest
) => async (dispatch: Dispatch) => {
  try {
    return await AuthService.forgotPassword(data);
  } catch (err) {
    dispatch({
      type: AUTH_ACTIONS.GET_ACCOUNT_ERROR
    });
  }
}

export const registerAction = (data: UserCreateRequest) => async (dispatch: Dispatch) => {
  try {
    const res = await AuthService.register(data);
    dispatch(setToken(res));
    return res;
  } catch (err) {
    dispatch({
      type: AUTH_ACTIONS.GET_ACCOUNT_ERROR
    });
  }
}

export const getAccountAction = () => async (dispatch: Dispatch) => {
  dispatch({
    type: AUTH_ACTIONS.GET_ACCOUNT_REQUEST
  });

  try {
    const res = await AuthService.getAccount();
    dispatch(setAccount(res));
    return res;
  } catch (err) {
    dispatch({
      type: AUTH_ACTIONS.GET_ACCOUNT_ERROR
    });
  }
}
