import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";

const GMap = () => {
  const [currentCoordinate, setCurrentCoordinates] = useState({
    lat: "",
    long: "",
  });
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setCurrentCoordinates({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  }, []);

  function Map() {
    return (
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{
          lat: currentCoordinate.lat,
          lng: currentCoordinate.long,
        }}
      >
        <Marker
          position={{ lat: currentCoordinate.lat, lng: currentCoordinate.long }}
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
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDEcxBYEDNORQY12G_W30I0WufUD3ooOPw "
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default GMap;
