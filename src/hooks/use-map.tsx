import { useState, useRef, useEffect, MutableRefObject } from 'react';
import {Map, TileLayer} from 'leaflet';
import { CityType } from '../types/city';
import { OPEN_STREET_MAP, TITLE_LAYER_URL } from '../const';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  city: CityType
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.lat,
          lng: city.lng,
        },
        zoom: city.zoom,
      });

      const layer = new TileLayer(
        TITLE_LAYER_URL,
        {
          attribution:
            OPEN_STREET_MAP,
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [mapRef, city]);

  return map;
}

export default useMap;
