import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import axios from "axios";
import "./pagination.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

//  Component Props

// apiUrl : api url for which to connect

// PerPage : number of cards you wanna show per page

const Pagination = (props) => {
  // States to handle
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  const PerPage = props.PerPage ? props.PerPage : 6;
  const apiUrl = props.apiUrl ? props.apiUrl : "";
  // Loading data
  useEffect(() => {
    fetchData();
  }, []);
  function fetchData() {
    axios.get(apiUrl).then((result) => {
      setData(result.data);
    });
  }

  // Handle page click
  function handlePageClick({ selected: selectedPage }) {
    console.log("selectedPage", selectedPage);
    setCurrentPage(selectedPage);
  }
  // 0,10,20,30,40....

  const offset = currentPage * PerPage;
  const currentPageData = data
    .slice(offset, offset + PerPage)
    .map((result, index) => {
      return (
        <>
          <div key={index} className="CardWrapper">
            <div className="card">
              <div className="card-body">
                <div className="card-date">
                  <p>{result.date}</p>
                </div>
                <img src={result.Image} alt={result.title} />
                <h2 className="card-title">{result.title}</h2>
                <p className="card-description">{result.description}</p>
                <Link to="/singleEvent">
                  <button>View More...</button>
                </Link>
                <i className="fa fa-heart-o"></i>
                <img src="" alt="dustbin" />
                <Link to="/eventEdit">
                  <img src="" alt="edit" />
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    });
  // console.log("currentPageData", currentPageData);

  // total pages Calculator
  const pageCount = Math.ceil(data.length / PerPage);

  return (
    <div className="pagination-component">
      {/* <h1>React Pagination</h1> */}
      {currentPageData}
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
