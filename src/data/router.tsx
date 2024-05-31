import LoginPage from '../pages/login';
import { createBrowserRouter } from "react-router-dom";
import Homepage from '../pages/homepage';
import DefaultLayout from '../layout/default';


const routerConfig = createBrowserRouter([
    {
        path: "/login",
        element: <LoginPage />,

    },
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
        ],

    },
]);

export default routerConfig;