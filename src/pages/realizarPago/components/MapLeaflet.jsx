import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

import SearchField from "./SearchField";
import './style.css';

const MapLeaflet = () => {
  
  return (
    <div>

    <MapContainer
      className="map-leaflet"
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <SearchField />
    

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
};

export default MapLeaflet;
