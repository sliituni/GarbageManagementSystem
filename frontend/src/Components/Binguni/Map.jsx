import React from 'react'
import {LoadScript} from '@react-google-maps/api'
import CustomGoogleMap from './CustomeGoogleMap'
const libraries=['places']
const GoogleMap = () => {

  return (
    <div id='map'>
      <LoadScript googleMapsApiKey='AIzaSyBZq5ejEeybo_1qhiWHIJlC66CZ3mrUrUI' libraries={libraries}>
<CustomGoogleMap/>
</LoadScript>
      </div>
  )

}

export default Map;


 

