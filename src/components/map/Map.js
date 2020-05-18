import React from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from "./Marker";

const Map = ({ loc, color }) => {

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "YOUR_API_KEY" }}
        defaultCenter={loc}
        defaultZoom={17}
      >
        <Marker
          lat={loc.lat}
          lng={loc.lng}
          text="My Marker"
          color={color}
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map;
