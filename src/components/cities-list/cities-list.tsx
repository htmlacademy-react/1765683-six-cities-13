import { Link } from 'react-router-dom';

function CitiesList() {
  return (
    <ul className="locations__list tabs__list">
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="#">
          <span>Paris</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="#">
          <span>Cologne</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="#">
          <span>Brussels</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link
          className="locations__item-link tabs__item tabs__item--active"
          to="#"
        >
          <span>Amsterdam</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="#">
          <span>Hamburg</span>
        </Link>
      </li>
      <li className="locations__item">
        <Link className="locations__item-link tabs__item" to="#">
          <span>Dusseldorf</span>
        </Link>
      </li>
    </ul>
  );
}

export default CitiesList;

