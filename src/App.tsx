import { ElementType, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { auctions, createAuction, profile, login, main, register } from './endpoints';
const LazyMain = lazy(() => import('./pages/Main/Main'))
const LazyAuctions = lazy(() => import('./pages/Auctions/Auctions'))
const LazyProfile = lazy(() => import('./pages/Profile/Profile'))
const LazyLogin = lazy(() => import('./pages/LoginRegisterPages/Login/Login'))
const LazyRegister = lazy(() => import('./pages/LoginRegisterPages/Register/Register'))
const LazyCreateAuction = lazy(() => import('./pages/CreateAuction/CreateAuction'))

const withSuspense = (Component: ElementType) => (
  <Suspense fallback='Загрузка...'>
    <Component />
  </Suspense>
);

const routes = [
  {
    path: main,
    element: LazyMain
  },
  {
    path: auctions,
    element: LazyAuctions
  },
  {
    path: profile,
    element: LazyProfile
  },
  {
    path: login,
    element: LazyLogin
  },
  {
    path: register,
    element: LazyRegister
  },
  {
    path: createAuction,
    element: LazyCreateAuction
  }
]

function App() {
  return (
    <BrowserRouter basename={main}>
      <Routes>
        {
          routes.map((route, i) =>
            <Route
              path={route.path}
              element={withSuspense(route.element)}
              key={i}
            />
          )
        }
        <Route path='*' element={<Navigate to='..' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;