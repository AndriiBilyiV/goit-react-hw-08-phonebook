import { useAuth } from 'hooks/useAuth';
import { CurrentEmail, LogOut, MenuWrapper } from './UserMenu.styled';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/operations';

export const UserMenu = () => {
  const dispach = useDispatch();
  const { email } = useAuth();
  return (
    <MenuWrapper>
      <CurrentEmail>{email}</CurrentEmail>
      <LogOut onClick={() => dispach(logOut())}>
        <RiLogoutBoxRLine size={36} />
      </LogOut>
    </MenuWrapper>
  );
};
