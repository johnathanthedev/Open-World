import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../config/routes';
import PrivateRoute from './auth/PrivateRoute/index';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((route, index) => (
            <Route
              key={index + 1}
              path={route.path}
              element={route.component}
            />
          ))}

          {privateRoutes.map((route, index) => (
            <Route
              key={index + 1}
              path={route.path}
              element={<PrivateRoute>{route.component}</PrivateRoute>}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
