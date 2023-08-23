//import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

// const center = {
//     lat:33,
//     lng:44
// //   lat: -3.745,
// //   lng: -38.523
// };

export default function Map(props){
  const{lat, lng}=props;
  const center={
    lat:lat,
    lng:lng
  }
    return (
       <LoadScript
         googleMapsApiKey="AIzaSyCz6I3rqYYn5M38If1iWW-p38Rc_ivtwVo"
       >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={7}
        >
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
      </LoadScript>
    )
  
}