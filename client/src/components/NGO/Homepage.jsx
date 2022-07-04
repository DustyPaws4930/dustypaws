import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import AnimatedDropdown from "../dropdown/AnimatedDropdown";
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
import "./NGO-Home.css"

const Homepage = (props) => {
  const [currentCoordinate, setCurrentCoordinates] = useState({
    lat: 20,
    long: 20,
  });
  const [complaintsArr, setComplaintsArr] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(2);
  const [selected, setSelected] = useState('Change Status');
  const options = ["Accept", "Completed", "Spam"];
  const [isActive, setIsActive] = useState(false);
  

  function handleSelectedDrop(event){
    // console.log(event.target.value);
    // setSelected(event.target.value);
  }

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
                lat: parseFloat(complaint.location.lat),
                lng: parseFloat(complaint.location.long),
              }}
              onClick={() => {
                setCurrentCoordinates(complaint.location);
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
              lat: selectedComplatint.location.lat,
              lng: selectedComplatint.location.long,
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
    <div className="NGO-Home">
      <h2 className="NGO-Title">
        Recent Complaints
      </h2>
      <div className="map-container">
        <WrappedMap
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyDEcxBYEDNORQY12G_W30I0WufUD3ooOPw "
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px`, width: `auto` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>

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
                    src={complaint.Image}
                    alt={complaint.title}
                  />
                </div>
                <h4>{complaint.title}</h4>
                <p>{complaint.description}</p>
                <div className="status-dropdown">
                  {/* <option value="Accept" onChange={(event) => {handleSelectedDrop(event)}}>Accept</option>
                  <option value="Complete">Complete</option>
                  <option value="Spam">Spam</option> */}
                  <AnimatedDropdown options={options}  setSelected={setSelected} selected={selected} isActive={isActive} setIsActive={setIsActive}/>
                  {selected}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Homepage;
