import { createBrowserRouter } from 'react-router-dom';
import LoginPage from '../pages/login';
import HomePage from '../pages/home';
import DefaultLayout from '../layout/default';
import AccountPage from '../pages/account';
import CalculatorPage from '../pages/calculator';

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
      {
        path: '/calculator',
        element: <CalculatorPage />,
      },
    ],
  },
]);

export default routerConfig;
