import PlaceCard from '../place-card/place-card';
import { TOffers } from '../../types/offers';

type TPlaceCardListProps = {
  offers: TOffers;
};

export default function PlaceCardList({ offers }: TPlaceCardListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <PlaceCard key={offer.id} offer={offer} />
      ))}
    </div>
  );
}
