import { NavLink, Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-dispatch';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';

export const UserLogged = () => {
  const dispatch = useAppDispatch();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <NavLink
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Favorites}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">
              Some Email Template
            </span>
            <span className="header__favorite-count">{Math.random()}</span>
          </NavLink>
        </li>
        <li className="header__nav-item">
          <Link
            className="header__nav-link"
            to={AppRoute.Main}
            onClick={(evt) => {
              evt.preventDefault();
              dispatch(logoutAction());
            }}
          >
            <span className="header__signout">Sign out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default UserLogged;
