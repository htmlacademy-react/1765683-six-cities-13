import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/use-select';
import { useAppDispatch } from '../../hooks/use-dispatch';
import { MouseEvent } from 'react';
import { selectCity } from '../../store/actions';
import { cityNames } from '../../const';
import classNames from 'classnames';

function CitiesList() {
  const currentCity = useAppSelector((state) => state.currentCity);
  const dispatch = useAppDispatch();

  const handleCityClick = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const city = e.currentTarget.dataset.city;
    dispatch(selectCity(city));
  };

  return (
    <ul className="locations__list tabs__list">
      {cityNames.map((city) => (
        <li
          className="locations__item"
          key={city}
          data-city={city}
          onClick={handleCityClick}
        >
          <Link
            className={classNames(
              {
                'locations__item-link tabs__item tabs__item--active':
                  city === currentCity,
                'locations__item-link tabs__item': city !== currentCity,
              },
              ''
            )}
            to="#"
          >
            <span>{city}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CitiesList;
