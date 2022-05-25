import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import data from '../../config/Config';
//import data from '../../config/Config';

const GoogleMaps = ({user}) => {
  
  const mapStyles = {        
    height: "60vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey={data['google-map-key']}>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={11}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default GoogleMaps;