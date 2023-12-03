import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RedirectIndex = () => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <Navigate to="/contacts" />
  ) : (
    <Navigate to="/registration" />
  );
};
