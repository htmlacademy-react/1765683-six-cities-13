import { THost } from '../../types/offers';
import classNames from 'classnames';

type OfferHostProps = {
  host: THost;
  description: string;
};

function OfferHost({ host, description }: OfferHostProps): JSX.Element {
  const { avatarUrl, isPro, name } = host;

  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <div className="offer__host-user user">
        <div
          className={classNames(
            {
              'offer__avatar-wrapper offer__avatar-wrapper--pro': isPro,
              'offer__avatar-wrapper user__avatar-wrapper': !isPro,
            },
            'offer__avatar-wrapper'
          )}
        >
          <img
            className="offer__avatar user__avatar"
            src={avatarUrl}
            width={74}
            height={74}
            alt="Host avatar"
          />
        </div>
        <span className="offer__user-name">{name}</span>
        <span className="offer__user-status">Pro</span>
      </div>
      <div className="offer__description">
        <p className="offer__text">{description}</p>
      </div>
    </div>
  );
}

export default OfferHost;
