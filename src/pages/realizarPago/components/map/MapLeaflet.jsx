import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-geosearch/dist/geosearch.css";

import SearchField from "./SearchField";
import useForm from "../../../../hooks/useForm";

import "./../style.css";

const MapLeaflet = () => {
  const [{ search } = state, handleInputChange] = useForm({ search: "" });
  function handleSubmit(e) {
    e.preventDefault();
    // const $inputGlass = document.querySelector('.glass');
    // console.log(search, $inputGlass)
  }
  return (
    <div>
      <form className="from p-0 pb-3" onSubmit={handleSubmit}>
        <input
          className="form-control"
          onChange={handleInputChange}
          type="text"
          name="search"
          value={search}
          placeholder="Enter a location"
        />
      </form>
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
