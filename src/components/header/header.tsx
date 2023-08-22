import Logo from '../logo/logo';
import { useAppSelector } from '../../hooks/use-select';
import { AuthorizationStatus } from '../../const';
import UserLogged from '../user-logged/user-logged';
import UserNotLogged from '../user-not-logged/user-not-logged';
import { memo } from 'react';

function HeaderLayoutComponent(): JSX.Element {
  const authStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />;
          </div>
          {authStatus === AuthorizationStatus.Auth ? (
            <UserLogged />
          ) : (
            <UserNotLogged />
          )}
        </div>
      </div>
    </header>
  );
}

export const HeaderLayout = memo(HeaderLayoutComponent);


