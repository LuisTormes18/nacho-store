import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { GeoSearchControl, AlgoliaProvider } from "leaflet-geosearch";

const SearchField = () => {
  const provider = new AlgoliaProvider();
  const map = useMap();

  const searchControl = new GeoSearchControl({ provider });

  useEffect(() => {
    map.addControl(searchControl);
    return () => map.removeControl(searchControl);
  }, []);

  return null;
};
export default SearchField;