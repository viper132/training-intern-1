import { RouterProvider } from 'react-router-dom';
import routerConfig from './data/router';

const App = () => {
  return <RouterProvider router={routerConfig} />;
};

export default App;
