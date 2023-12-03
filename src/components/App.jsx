import { useAuth } from 'hooks/useAuth';
import { Contacts } from 'pages/Contacts';
import { Login } from 'pages/Login';
import { Registration } from 'pages/Registration';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/operations';
import { PrivateRoute } from './PrivateRoute';
import { RefreshMessage } from './RefreshMessage/RefreshMessage';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <RefreshMessage />
  ) : (
    <>
      <Routes>
        <Route path="/" component={<RedirectIndex />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/registration" component={<Contacts />} />
          }
        />
        <Route
          path="/registration"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<Registration />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
      </Routes>
    </>
  );
};
