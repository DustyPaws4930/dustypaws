import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
    />
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const GMap = () => {
  return (
    <div>
      <h2>Map</h2>
      <WrappedMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDEcxBYEDNORQY12G_W30I0WufUD3ooOPw "
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default GMap;
