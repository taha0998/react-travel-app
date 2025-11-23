import { Map, Marker } from "pigeon-maps";
import { osm } from "pigeon-maps/providers";

const MapComponent = ({ coords }) => {
  return (
    <div className="map-container">
      {coords && (
        <Map
          className="map-element"
          provider={osm}
          defaultCenter={coords}
          defaultZoom={12}
        >
          <Marker width={50} anchor={coords} />
        </Map>
      )}
    </div>
  );
};
export default MapComponent;
