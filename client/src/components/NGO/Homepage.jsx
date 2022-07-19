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
import "./NGO-Home.css";
import { toast } from "react-toastify";
import Pagination from "../PaginationComponent/Pagination";

const Homepage = (props) => {
  // default coordinates of Vancouver
  const [currentCoordinate, setCurrentCoordinates] = useState({
    lat: 49.28273,
    long: -123.120735,
  });
  const [complaintsArr, setComplaintsArr] = useState([]);
  const [zoomLevel, setZoomLevel] = useState(10);
  const initialText = "Change Status";
  const options = ["Accept", "Completed", "Spam"];
  const [isActive, setIsActive] = useState(false);
  let complaintsUrl = getApiPath() + "complaint/fetch";

  useEffect(
    (e) => {
      let complaintsUrl = getApiPath() + "complaint/fetch";
      axios
        .get(complaintsUrl)
        .then((res) => {
          setComplaintsArr(res.data.complaints);
        })
        .catch((err) => {
          console.log("Error :" + err);
        });
    },
    [setComplaintsArr]
  );

  let ShowOnMap = (e, coordinates) => {
    e.preventDefault();

    setCurrentCoordinates(coordinates);
    setZoomLevel(20);
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
            onCloseClick={() => {
              setSelectedComplaint(null);
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

  function HandleComplaintDropDown(option, reportID) {
    let updateComplaintUrl = getApiPath() + `complaint/updateById/${reportID}`;
    axios
      .patch(updateComplaintUrl, {
        state: option,
      })
      .then((res) => {
        toast.success(res.data.message, {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1200);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 500,
          hideProgressBar: false,
          closeOnClick: true,
        });
      });
  }

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  return (
    <div className="NGO-Home">
      <h2 className="NGO-Title">Recent Complaints</h2>
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
        </div>
        <div className="cardsContainer">
          <Pagination
            apiUrl={complaintsUrl}
            cardName="NGO-Home"
            ShowOnMap={ShowOnMap}
            options={options}
            HandleComplaintDropDown={HandleComplaintDropDown}
            initialText={initialText}
          />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
