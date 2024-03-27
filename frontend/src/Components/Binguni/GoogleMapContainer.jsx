import React from 'react';
import { LoadScript } from '@react-google-maps/api';
import CustomeGoogleMap from './CustomeGoogleMap';

const libraries = ['places'];

const GoogleMapContainer = () => {
  return (
    <div id='map' className='container' style={{ width: '100%', height: '100%' }}>
    <h3 style={{color:'#34A853', fontWeight:'bold', letterSpacing: '6px'}}>GARBAGE COLLECTION LOCATION</h3><br/>
      <LoadScript googleMapsApiKey='AIzaSyArw3XGRpnfAidEd760CGEXW7vKD-XjyyA' libraries={libraries}>
        <CustomeGoogleMap />
      </LoadScript>
    </div>
  );
};

export default GoogleMapContainer;
