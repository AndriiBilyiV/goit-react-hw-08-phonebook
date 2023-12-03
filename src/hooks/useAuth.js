import { useSelector } from 'react-redux';
import { getEmail, getIsLoggedIn, getIsRefreshing } from 'redux/selectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const email = useSelector(getEmail);
  const isRefreshing = useSelector(getIsRefreshing);

  return {
    isLoggedIn,
    email,
    isRefreshing,
  };
};
