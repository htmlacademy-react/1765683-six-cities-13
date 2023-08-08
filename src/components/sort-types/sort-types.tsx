import { useState, MouseEvent } from 'react';
import { SORT_TYPES } from '../../const';
import { useAppDispatch } from '../../hooks/use-dispatch';
import { useAppSelector } from '../../hooks/use-select';
import { offers } from '../../mocks/offers';
import { loadOffers, setPlacesSortType } from '../../store/actions';
import classNames from 'classnames';

function PlacesSorting(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  const currentSortType = useAppSelector((state) => state.currentSortType);
  const stateOffers = useAppSelector((state) => state.offers);
  const defaultOffers = [...offers];
  const lowToHighOffers = [...stateOffers].sort((a, b) => a.price - b.price);
  const highToLowOffers = [...stateOffers].sort((a, b) => b.price - a.price);
  const topRatedOffers = [...stateOffers].sort((a, b) => b.rating - a.rating);
  const dispatch = useAppDispatch();

  const handleSortClick = (currentType: string) => {
    switch (currentType) {
      case 'Popular':
        dispatch(setPlacesSortType('Popular'));
        dispatch(loadOffers(defaultOffers));
        break;
      case 'Price: low to high':
        dispatch(setPlacesSortType('Price: low to high'));
        dispatch(loadOffers(lowToHighOffers));
        break;
      case 'Price: high to low':
        dispatch(setPlacesSortType('Price: high to low'));
        dispatch(loadOffers(highToLowOffers));
        break;
      case 'Top rated first':
        dispatch(setPlacesSortType('Top rated first'));
        dispatch(loadOffers(topRatedOffers));
        break;
    }
  };

  const handleFormClick = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={handleFormClick}
    >
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames(
          {
            'places__options places__options--custom places__options--opened':
              isOpened,
            'places__options places__options--custom': !isOpened,
          },
          ''
        )}
      >
        {SORT_TYPES.map((type) => (
          <li
            className={classNames(
              {
                'places__option places__option--active':
                  type === currentSortType,
                'places__option': type !== currentSortType,
              },
              ''
            )}
            tabIndex={0}
            key={type}
            onClick={() => handleSortClick(type)}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );

}

export default PlacesSorting;
