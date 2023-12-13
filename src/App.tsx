import { ElementType, lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { auctions, createAuction, profile, login, main, register, auctionInfo } from './endpoints';
import { useDispatch, useSelector } from 'react-redux';
import { setToken, setUser } from './redux/authSlice/authSlice';
import { useProfileMutation } from './redux/usersAPI';
const LazyMain = lazy(() => import('./pages/Main/Main'))
const LazyAuctions = lazy(() => import('./pages/Auctions/Auctions'))
const LazyProfile = lazy(() => import('./pages/Profile/Profile'))
const LazyLogin = lazy(() => import('./pages/LoginRegisterPages/Login/Login'))
const LazyRegister = lazy(() => import('./pages/LoginRegisterPages/Register/Register'))
const LazyCreateAuction = lazy(() => import('./pages/CreateAuction/CreateAuction'))
const LazyAuctionInfo = lazy(() => import('./pages/Auction/Auction'))

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
  },
  {
    path: auctionInfo,
    element: LazyAuctionInfo
  }
]

function App() {
  const token = localStorage.getItem('token');
  const dispatch = useDispatch()
  const authToken = useSelector((state: any) => state.authSlice.token)
  const user = useSelector((state: any) => state.authSlice.user)
  const [getProfileData] = useProfileMutation()

  useEffect(() => {
    if (!authToken && token) {
      dispatch(setToken(token))
    }
  }, [authToken, dispatch, token])

  useEffect(() => {
    if (!user) {
      getProfileData('')
      .then((data) => dispatch(setUser(data)))
    }
  }, [getProfileData, user, dispatch])

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