import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import CustomeGoogleMap from './CustomeGoogleMap';

const libraries = ['places'];

const GoogleMapContainer = () => {
  return (
    <div id='map'>
      <LoadScript googleMapsApiKey='AIzaSyArw3XGRpnfAidEd760CGEXW7vKD-XjyyA' libraries={libraries}>
        <CustomeGoogleMap />
      </LoadScript>
    </div>
  );
};

export default GoogleMapContainer;
