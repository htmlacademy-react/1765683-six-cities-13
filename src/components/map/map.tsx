import { useRef, useEffect } from 'react';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Icon, Marker, layerGroup } from 'leaflet';
import { TOffers } from '../../types/offers';
import useMap from '../../hooks/use-map';
import classNames from 'classnames';
import 'leaflet/dist/leaflet.css';
import { TCity } from '../../types/city';

type MapProps = {
  className: string;
  city: TCity;
  points: TOffers;
  selectedPoint?: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps): JSX.Element {
  const { points, city, selectedPoint, className } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && selectedPoint === point.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);

        map.flyTo(
          [city.location.latitude, city.location.longitude],
          city.location.zoom
        );
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint, city]);

  return <section ref={mapRef} className={classNames(className, 'map')} />;
}

export default Map;
