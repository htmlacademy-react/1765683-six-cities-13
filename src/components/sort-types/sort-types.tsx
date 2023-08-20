import { useState, MouseEvent } from 'react';
import { SORT_TYPES, SortTypes } from '../../const';
import { useAppDispatch } from '../../hooks/use-dispatch';
import { useAppSelector } from '../../hooks/use-select';
import { setOffers, setPlacesSortType } from '../../store/actions';
import classNames from 'classnames';

function PlacesSorting(): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  const currentSortType = useAppSelector((state) => state.currentSortType);
  const stateOffers = useAppSelector((state) => state.offers);
  const defaultOffers = [...stateOffers];
  const lowPriceSortedOffers = [...stateOffers].sort(
    (a, b) => a.price - b.price
  );
  const highPriceSortedOffers = [...stateOffers].sort(
    (a, b) => b.price - a.price
  );
  const ratingSortedOffers = [...stateOffers].sort(
    (a, b) => b.rating - a.rating
  );
  const dispatch = useAppDispatch();

  const handleSortSelect = (currentType: string) => {
    switch (currentType) {
      case SortTypes.Popular:
        dispatch(setPlacesSortType(SortTypes.Popular));
        dispatch(setOffers(defaultOffers));
        break;
      case SortTypes.PriceLowToHigh:
        dispatch(setPlacesSortType(SortTypes.PriceLowToHigh));
        dispatch(setOffers(lowPriceSortedOffers));
        break;
      case SortTypes.PriceHighToLow:
        dispatch(setPlacesSortType(SortTypes.PriceHighToLow));
        dispatch(setOffers(highPriceSortedOffers));
        break;
      case SortTypes.TopRatedFirst:
        dispatch(setPlacesSortType(SortTypes.TopRatedFirst));
        dispatch(setOffers(ratingSortedOffers));
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
