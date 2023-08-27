import { NavLink, Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-dispatch';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { useAppSelector } from '../../hooks/use-select';
import { getUserEmail } from '../../store/user-process/selectors';
import { getFavoriteOffersCount } from '../../store/offer-process/selectors';

export const UserLogged = () => {
  const dispatch = useAppDispatch();
  const userEmail = useAppSelector(getUserEmail);
  const favoriteOffersCount = useAppSelector(getFavoriteOffersCount);
  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <NavLink
            className="header__nav-link header__nav-link--profile"
            to={AppRoute.Favorites}
          >
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">{userEmail}</span>
            <span className="header__favorite-count">
              {favoriteOffersCount}
            </span>
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
