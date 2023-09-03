import { PlaceCard } from '../place-card/place-card';
import { TOffers } from '../../types/offers';
import { useCallback, MouseEvent } from 'react';
import NotFoundPage from '../../pages/not-found/not-found';

type TPlaceCardListProps = {
  offers: TOffers;
  onMouseHoverHandle: (id: string | undefined) => void;
};

export default function PlaceCardList({
  offers,
  onMouseHoverHandle,
}: TPlaceCardListProps): JSX.Element {
  const handleCardEnter = useCallback(
    (e: MouseEvent<HTMLLIElement>) => {
      if (onMouseHoverHandle === undefined) {
        return;
      }
      e.preventDefault();
      onMouseHoverHandle(e.currentTarget.id);
    },
    [onMouseHoverHandle]
  );

  const handleCardLeave = useCallback(
    (e: MouseEvent<HTMLLIElement>) => {
      if (onMouseHoverHandle === undefined) {
        return;
      }
      e.preventDefault();
      onMouseHoverHandle(undefined);
    },
    [onMouseHoverHandle]
  );

  if (offers === null) {
    return <NotFoundPage />;
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          {...({ handleCardEnter, handleCardLeave })}
        />
      ))}
    </div>
  );
}
