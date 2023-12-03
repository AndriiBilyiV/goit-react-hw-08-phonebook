import { useAuth } from 'hooks/useAuth';
import { Contacts } from 'pages/Contacts';
import { Login } from 'pages/Login';
import { Registration } from 'pages/Registration';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
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
      <Link to="/contacts">HOME</Link>
      <Link to="/registration">REG</Link>
      <Link to="/login">LOGIN</Link>
      <Routes>
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
