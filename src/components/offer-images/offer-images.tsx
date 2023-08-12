import { IMG_COUNT } from '../../const';

type OfferImagesProps = {
  images: string[];
}

function OfferImages({ images }: OfferImagesProps): JSX.Element {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {Array.from({ length: IMG_COUNT }, (_, i) => (
          <div key={i} className="offer__image-wrapper">
            <img
              className="offer__image"
              src={images[i]}
              alt="photo preview"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OfferImages;
