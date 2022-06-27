import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { getApiPath } from "../../Common";
import yellowIcon from "../images/Yellow_location.png";
import redIcon from "../images/Red_Locaion.png";
import greenIcon from "../images/Green_Location.png";

const Homepage = (props) => {
  const [currentCoordinate, setCurrentCoordinates] = useState({
    lat: 20,
    long: 20,
  });
  const [complaintsArr, setComplaintsArr] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(2);
  useEffect((e) => {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   setCurrentCoordinates({
    //     lat: position.coords.latitude,
    //     long: position.coords.longitude,
    //   });
    // });

    let complaintsUrl = getApiPath() + "complaint/fetch";
    axios
      .get(complaintsUrl)
      .then((res) => {
        setComplaintsArr(res.data.complaints);
      })
      .catch((err) => {
        console.log("Error :" + err);
      });
  }, []);

  let ShowOnMap = (e, coordinates) => {
    e.preventDefault();
    setCurrentCoordinates(coordinates);
    setZoomLevel(10);
  };

  // GetIcon
  const GetIcon = (complaint) => {
    console.log(redIcon);
    if (complaint.priority === 0) {
      return redIcon;
    } else if (complaint.priority === 1) {
      return yellowIcon;
    } else {
      return greenIcon;
    }
  };

  // Google Map Function to get Google Map
  function Map() {
    const [selectedComplatint, setSelectedComplaint] = useState(null);
    return (
      <GoogleMap
        defaultZoom={zoomLevel}
        defaultCenter={{
          lat: currentCoordinate.lat,
          lng: currentCoordinate.long,
        }}
      >
        {complaintsArr.map((complaint) => {
          return (
            <Marker
              key={complaint._id}
              position={{
                lat: parseFloat(JSON.parse(complaint.location).lat),
                lng: parseFloat(JSON.parse(complaint.location).long),
              }}
              onClick={() => {
                setCurrentCoordinates(JSON.parse(complaint.location));
                setSelectedComplaint(complaint);
              }}
              icon={{
                url: GetIcon(complaint),
                scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          );
        })}

        {selectedComplatint && (
          <InfoWindow
            position={{
              lat: JSON.parse(selectedComplatint.location).lat,
              lng: JSON.parse(selectedComplatint.location).long,
            }}
          >
            <div>
              <h3>{selectedComplatint.title}</h3>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div>
      <WrappedMap
        isMarkerShown
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDEcxBYEDNORQY12G_W30I0WufUD3ooOPw "
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px`, width: `auto` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />

      <div className="complaintContainer">
        <div className="headerSettingContainer">
          <h1>Complaints</h1>
          <div className="settingContainer">
            <h3>Setting Popup</h3>
          </div>
        </div>
        <div className="cardsContainer">
          {complaintsArr.map((complaint, idx) => {
            return (
              <div
                key={idx}
                className="cardWrapper"
                onClick={(e) => {
                  ShowOnMap(e, JSON.parse(complaint.location));
                }}
              >
                <div className="imageWrapper">
                  <img
                    style={{
                      resizeMode: "stretch",
                      height: 100,
                      width: 200,
                    }}
                    src={"data:image/jpg;base64," + complaint.Image}
                    alt={complaint.title}
                  />
                </div>
                <h4>{complaint.title}</h4>
                <p>{complaint.description}</p>
                <select>
                  <option value="Accept">Accept</option>
                  <option value="Complete">Complete</option>
                  <option value="Spam">Spam</option>
                </select>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
