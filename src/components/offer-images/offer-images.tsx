import { TOffers } from '../../types/offers';

type OfferImagesProps = {
  offers: TOffers;
};

function OfferImages({ offers }: OfferImagesProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        <div className="offer__image-wrapper">
          <img className="offer__image" src="img/room.jpg" alt="Photo studio" />
        </div>
        {offers.map((offer) => (
          <div key={offer.id} className="offer__image-wrapper">
            <img
              className="offer__image"
              src={offer.previewImage}
              alt={offer.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferImages;
