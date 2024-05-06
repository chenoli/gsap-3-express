import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import SimpleTween from './pages/simple-tween';

import Control from './pages/control';
import DelayAndRepeat from './pages/delay-and-repeat';
import FromAndFromTo from './pages/from-and-from-to';
import Ease from './pages/ease';
import Stagger from './pages/stagger';
import Timeline from './pages/timeline';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SimpleTween />,
  },
  {
    path: '/from-and-from-to',
    element: <FromAndFromTo />,
  },
  {
    path: '/delay-and-repeat',
    element: <DelayAndRepeat />,
  },
  {
    path: '/ease',
    element: <Ease />,
  },
  {
    path: '/stagger',
    element: <Stagger />,
  },
  {
    path: '/control',
    element: <Control />,
  },
  {
    path: '/timeline',
    element: <Timeline />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
