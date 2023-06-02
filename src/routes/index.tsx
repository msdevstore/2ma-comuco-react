import { lazy, LazyExoticComponent, ReactElement, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { useAuthState } from 'hooks/redux/auth';
import AuthProvider from 'providers/AuthProvider';
import MainLayout from 'components/layouts/MainLayout';
import AuthLayout from 'components/layouts/AuthLayout';

const HomePage = lazy(() => import('pages/Home').then(p => ({ default: p.default })));
const MailsPage = lazy(() => import('pages/Mails').then(p => ({ default: p.default })));
const MailDetailsPage = lazy(() => import('pages/MailDetails').then(p => ({ default: p.default })));
const ContactsPage = lazy(() => import('pages/Contacts').then(p => ({ default: p.default })));
const ReportPage = lazy(() => import('pages/Report').then(p => ({ default: p.default })));
const LoginPage = lazy(() => import('pages/Login').then(p => ({ default: p.default })));
const RegisterPage = lazy(() => import('pages/Register').then(p => ({ default: p.default })));
const ForgotPasswordPage = lazy(() => import('pages/ForgotPassword').then(p => ({ default: p.default })));

const AppRoute = ({
  component: Component,
}: {
  component: LazyExoticComponent<() => JSX.Element>;
}): ReactElement => {
  return (
    <Suspense fallback={null}>
      <Component />
    </Suspense>
  );
};

export const AppRoutes = () => {
  const { tokens } = useAuthState();

  const authRoutes = useRoutes([
    {
      path: '/login',
      element: <AppRoute component={LoginPage} />
    },
    {
      path: '/register',
      element: <AppRoute component={RegisterPage} />
    },
    {
      path: '/forgot-password',
      element: <AppRoute component={ForgotPasswordPage} />
    },
    {
      path: '*',
      element: <Navigate to="/login" replace />
    }
  ]);

  const mainRoutes = useRoutes([
    {
      path: '/home',
      element: <AppRoute component={HomePage} />
    },
    {
      path: '/mails',
      element: <AppRoute component={MailsPage} />
    },
    {
      path: '/mails/:id',
      element: <AppRoute component={MailDetailsPage} />
    },
    {
      path: '/contacts',
      element: <AppRoute component={ContactsPage} />
    },
    {
      path: '/report',
      element: <AppRoute component={ReportPage} />
    },
    {
      path: '*',
      element: <Navigate to="/home" replace />
    }
  ]);

  return (
    <AuthProvider>
      {tokens?.accessToken 
        ? <MainLayout>
            {mainRoutes}
          </MainLayout> 
        : <AuthLayout>
            {authRoutes}
          </AuthLayout>
      }
    </AuthProvider>
  );
};
