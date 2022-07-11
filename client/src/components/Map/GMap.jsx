import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const GMap = (props) => {
  function Map() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{
          lat: props.currentCoordinate.lat,
          lng: props.currentCoordinate.long,
        }}
      >
        <Marker
          position={{
            lat: props.currentCoordinate.lat,
            lng: props.currentCoordinate.long,
          }}
        />
      </GoogleMap>
    );
  }
  const WrappedMap = withScriptjs(withGoogleMap(Map));
  return (
    <div>
      <h2>Map</h2>
      <WrappedMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDEcxBYEDNORQY12G_W30I0WufUD3ooOPw"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={
          <div
            className="ContainerElement"
          />
        }
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default GMap;
