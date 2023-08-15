import { useState, MouseEvent } from 'react';
import { SORT_TYPES, SortTypes } from '../../const';
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

  const handleSortSelect = (currentType: string) => {
    switch (currentType) {
      case SortTypes.Popular:
        if (defaultOffers) {
          const parsedOffers = JSON.parse(defaultOffers) as TOffers;
          dispatch(setPlacesSortType(SortTypes.Popular));
          dispatch(setOffers(parsedOffers));
        }
        break;
      case SortTypes.PriceLowToHight:
        dispatch(setPlacesSortType(SortTypes.PriceLowToHight));
        dispatch(sortOffersLowToHigh());
        break;
      case SortTypes.PriceHighToLow:
        dispatch(setPlacesSortType(SortTypes.PriceHighToLow));
        dispatch(sortOffersHightToLow());
        break;
      case SortTypes.TopRatedFirst:
        dispatch(setPlacesSortType(SortTypes.TopRatedFirst));
        dispatch(sortOffersByTopRated);
        break;
    }
  };

  const handleFormClick = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsOpened((prevIsOpened) => !prevIsOpened);
  };

  return (
    <form className="places__sorting" onClick={handleFormClick}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSortType}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={classNames({
          'places__options places__options--custom places__options--opened':
            isOpened,
          'places__options places__options--custom': !isOpened,
        })}
      >
        {SORT_TYPES.map((type) => (
          <li
            className={classNames({
              'places__option places__option--active': type === currentSortType,
              'places__option': type !== currentSortType,
            })}
            tabIndex={0}
            key={type}
            onClick={() => handleSortSelect(type)}
          >
            {type}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
