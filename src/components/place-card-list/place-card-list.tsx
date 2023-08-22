import { PlaceCard } from '../place-card/place-card';
import { TOffers } from '../../types/offers';
import { useState, useEffect } from 'react';
import NotFoundPage from '../../pages/not-found/not-found';

type TPlaceCardListProps = {
  offers: TOffers;
  onMouseHoverHandle: (id: string) => void;
};

export default function PlaceCardList({
  offers,
  onMouseHoverHandle,
}: TPlaceCardListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState('');

  useEffect(() => {
    if (activeCard) {
      onMouseHoverHandle(activeCard);
    }
  }, [activeCard, onMouseHoverHandle]);

  if (offers === null) {
    return <NotFoundPage />;
  }

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          offer={offer}
          onMouseHoverHandle={(id) => setActiveCard(id)}
        />
      ))}
    </div>
  );
}

