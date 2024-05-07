import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const CustomGoogleMap = () => {
  const center = {
    lat: 6.911158564,
    lng: 79.964737
  };

  const markers = [
    { lat: 6.90419, lng: 79.95435 }, 
    { lat: 6.90566, lng: 79.96314 }, 
    { lat: 6.91895, lng: 79.9672 }, 
    { lat: 6.91348, lng: 79.9547 },
    { lat: 6.91556, lng: 79.9592 },  
    { lat: 6.91607, lng: 79.9724 },
    { lat: 6.90968, lng: 79.9710 },
    { lat: 6.90297, lng: 79.9726 }
  ];

  return (
    <div>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerStyle={{
          minHeight: "800px",
          minWidth: "23rem",
          maxWidth: "100%",
          borderRadius: "20px"
        }}
      >
        {/* Mapping through the markers array to render multiple markers */}
        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}
      </GoogleMap>
    </div>
  );
}

export default CustomGoogleMap;