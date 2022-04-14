import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../config/routes';

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
              element={route.component}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
