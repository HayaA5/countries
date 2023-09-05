import React from "react";
import GoogleMapReact from 'google-map-react';

export default function SimpleMap(props){
  const{lat, lng}=props;
  const zoom=7;
  const center={
    lat:lat,
    lng:lng
  }
  
const containerStyle = {
  width: '400px',
  height: '400px'
};

  return (
    <div style={containerStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCz6I3rqYYn5M38If1iWW-p38Rc_ivtwVo" }}
        defaultCenter={center}
        defaultZoom={zoom}
      />
    </div>
  );
}