import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../Styles/LocationMap.css";

const LocationMap = ({ address }) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
        );
        const data = await response.json();
        
        if (data.length > 0) {
          const lat = parseFloat(data[0].lat);  
          const lon = parseFloat(data[0].lon); 
          setLocation({ lat, lng: lon });
        } else {
          console.error("Location not found");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchCoordinates();
  }, [address]);

  return (
    <div className="location-map">
      <h2 className="location-map-heading ">Location</h2>
      <p className="location-map-address">{address}</p>

      {location ? (
        <MapContainer center={location} zoom={15} className="map-container">
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={location}>
            <Popup>{address}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default LocationMap;
