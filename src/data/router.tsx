import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/login';
import HomePage from '../pages/home';
import DefaultLayout from '../layout/default';
import AccountPage from '../pages/account';

const routerConfig = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/account',
        element: <AccountPage />,
      },
    ],
  },
]);

export default routerConfig;
