import { useState, MouseEvent } from 'react';
import { SORT_TYPES } from '../../const';
import { useAppDispatch } from '../../hooks/use-dispatch';
import { useAppSelector } from '../../hooks/use-select';
import { setOffers, setPlacesSortType } from '../../store/actions';
import classNames from 'classnames';
import {
  sortOffersByTopRated,
  sortOffersHightToLow,
  sortOffersLowToHigh,
} from '../../store/actions';
import { TOffers } from '../../types/offers';

function PlacesSorting(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  const currentSortType = useAppSelector((state) => state.currentSortType);
  const defaultOffers = localStorage.getItem('offers');

  const dispatch = useAppDispatch();

  const handleSortClick = (currentType: string) => {
    switch (currentType) {
      case 'Popular':
        if (defaultOffers) {
          const parsedOffers = JSON.parse(defaultOffers) as TOffers;
          dispatch(setPlacesSortType('Popular'));
          dispatch(setOffers(parsedOffers));
        }
        break;
      case 'Price: low to high':
        dispatch(setPlacesSortType('Price: low to high'));
        dispatch(sortOffersLowToHigh());
        break;
      case 'Price: high to low':
        dispatch(setPlacesSortType('Price: high to low'));
        dispatch(sortOffersHightToLow());
        break;
      case 'Top rated first':
        dispatch(setPlacesSortType('Top rated first'));
        dispatch(sortOffersByTopRated);
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
