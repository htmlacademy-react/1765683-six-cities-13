import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks/use-dispatch';
import { selectCity } from '../../store/actions';
import { CITY_MAP } from '../../const';
import classNames from 'classnames';
import { memo } from 'react';

type CitiesListProps = {
  currentCity: string;
};

function CitiesListComponent({ currentCity }: CitiesListProps) {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {Object.values(CITY_MAP).map((city, i) => {
        const keyValue = `${city.name}-${i}`;
        return (
          <li className="locations__item" key={keyValue}>
            <Link
              className={classNames({
                'locations__item-link': true,
                'tabs__item': true,
                'tabs__item--active': currentCity === city.name,
              })}
              to="#"
              onClick={(e) => {
                e.preventDefault();
                dispatch(selectCity(city));
              }}
            >
              <span>{city.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export const CitiesList = memo(CitiesListComponent);


