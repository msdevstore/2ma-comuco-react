import { FC, ReactNode, useEffect } from 'react';
import {
  useAuthState,
  useGetAccountAction,
  useSetTokenAction
} from '../../hooks/redux/auth';
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY
} from '../../constants';

interface IAuthProviderProps {
  children: ReactNode
}

const AuthProvider: FC<IAuthProviderProps> = ({ children }) => {
  const { tokens, account } = useAuthState();
  const setTokens = useSetTokenAction();
  const getAccount = useGetAccountAction();

  useEffect(() => {
    setTokens({
      accessToken: localStorage.getItem(ACCESS_TOKEN_KEY),
      refreshToken: localStorage.getItem(REFRESH_TOKEN_KEY)
    });
  }, []);

  useEffect(() => {
    if (tokens === undefined || !tokens.accessToken || !tokens.refreshToken) {
      return;
    }

    localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
    localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
    
    if (!account) {
      getAccount();
    }
  }, [tokens, account]);

  return (
    <>
      {children}
    </>
  )
};

export default AuthProvider;
