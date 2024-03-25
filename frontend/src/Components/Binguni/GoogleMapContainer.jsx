import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import CustomeGoogleMap from './CustomeGoogleMap';

const libraries = ['places'];

const GoogleMapContainer = () => {
  return (
    <div id='map'>
      <LoadScript googleMapsApiKey='YOUR_API_KEY_HERE' libraries={libraries}>
        <CustomeGoogleMap />
      </LoadScript>
    </div>
  );
};

export default GoogleMapContainer;
