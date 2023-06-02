import { useDispatch, useSelector } from 'react-redux';
import {
  forgotPasswordAction,
  getAccountAction,
  loginAction,
  registerAction,
  setAccount,
  setAccountLoading,
  setToken,
} from 'redux/actions';
import { RootState } from 'redux/reducers';
import {
  ForgotPasswordRequest,
  LoginRequest,
  UserCreateRequest,
} from 'resources/interfaces';
import { Tokens } from 'redux/reducers/auth.reducer';
import { UserModel } from 'resources/models/user.model';

export const useAuthState = () => useSelector(({
  authReducer
}: RootState) => authReducer)

export const useLoginAction = () => {
  const dispatch = useDispatch();
  return (values: LoginRequest) => dispatch<any>(loginAction(values));
}

export const useForgotPasswordAction = () => {
  const dispatch = useDispatch();
  return (data: ForgotPasswordRequest) => dispatch<any>(forgotPasswordAction(data));
}

export const useRegisterAction = () => {
  const dispatch = useDispatch();
  return (data: UserCreateRequest) => dispatch<any>(registerAction(data));
}

export const useSetTokenAction = () => {
  const dispatch = useDispatch();
  return (tokens: Tokens) => dispatch(setToken(tokens));
}

export const useSetAccountAction = () => {
  const dispatch = useDispatch();
  return (account: UserModel) => dispatch(setAccount(account));
}

export const useGetAccountAction = () => {
  const dispatch = useDispatch();
  return () => dispatch<any>(getAccountAction());
}

export const useLogout = () => {
  const dispatch = useDispatch();
  return () => {
    localStorage.removeItem('access-token');
    localStorage.removeItem('refresh-token');
    dispatch(setAccount(null));
    dispatch(setToken({
      accessToken: null,
      refreshToken: null,
    }));
  }
};

export const useSetAccountLoading = () => {
  const dispatch = useDispatch();
  return (loading: boolean) => dispatch(setAccountLoading(loading));
}
