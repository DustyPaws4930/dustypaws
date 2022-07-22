import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "./pagination.css";
import NGOEventCard from "../cards/NGOEventCard";
import NGORequestCard from "../cards/NGORequestCard";
import SingleEvent from "../Event/SingleEvent";

//  Component Props

// apiUrl : api url for which to connect

// PerPage : number of cards you wanna show per page

const Pagination = (props) => {
  // States to handle
  let [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);
  const pageName = props.cardName;
  // console.log(pageName);

  const PerPage = props.PerPage ? props.PerPage : 6;
  const apiUrl = props.apiUrl ? props.apiUrl : "";
  let [selectedEvent, setSelectedEvent] = useState({});
  let [popUp, setPopUp] = useState(false);

  let [initialText, setInitialText] = useState("");

  // Loading data
  useEffect(() => {
    setInitialText(props.initialText);
    axios.get(apiUrl).then((result) => {
      setData(result.data);
      if (pageName === "NGO-Home") {
        setData(result.data.complaints);
      }
    });
  }, [apiUrl, setData, setInitialText]);
  // Handle page click
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }

  const TogglePopUp = (event) => {
    setSelectedEvent(event);
    setPopUp(!popUp);
  };
  let PopUpContent;
  if (popUp) {
    PopUpContent = (
      <SingleEvent TogglePopUp={TogglePopUp} eventData={selectedEvent} />
    );
  }

  let HandleDropDownEvent = (option, reportId) => {
    props.HandleComplaintDropDown(option, reportId);
  };

  let ShowOnMapEvent = (e, location) => {
    props.ShowOnMap(e, location);
  };

  let offset = currentPage * PerPage;

  let currentPageData;
  if (pageName === "NGO-Home") {
    if (data.length > 0) {
      currentPageData = data
        .slice(offset, offset + PerPage)
        .map((result, index) => {
          return (
            <NGORequestCard
              result={result}
              options={props.options}
              ShowOnMap={ShowOnMapEvent}
              initialText={initialText}
              HandleComplaintDropDown={HandleDropDownEvent}
              index={index}
              key={index}
            />
          );
        });
    }
  } else if (pageName === "EventForm") {
    currentPageData = data
      .slice(offset, offset + PerPage)
      .map((result, index) => {
        return (
          <NGOEventCard
            index={index}
            TogglePopUp={TogglePopUp}
            result={result}
            key={index}
          />
        );
      });
  }

  // total pages Calculator
  let pageCount = Math.ceil(data.length / PerPage);

  return (
    <div className="pagination-component">
      {/* <h1>React Pagination</h1> */}
      {currentPageData}
      {PopUpContent}
      <ReactPaginate
        previousLabel={`<`}
        nextLabel={`>`}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={`pagination-nav-container`}
        previousLinkClassName={`pagination-prev`}
        nextLinkClassName={`pagination-next`}
        disabledClassName={`pagination-disabled`}
        activeClassName={`pagination-active`}
      />
    </div>
  );
};
export default Pagination;
