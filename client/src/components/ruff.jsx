{complaintsArr.map((complaint, idx) => {
    return (
      <div
        key={idx}
        className="cardWrapper"
        id={
          complaint.state === "Completed" || complaint.state === "Spam"
            ? "setCompleted"
            : ""
        }
        onClick={(e) => {
          props.ShowOnMap(e, complaint.location);
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
        <p>{complaint.address}</p>
        <p>{complaint.description}</p>
        <div className="status-dropdown">
          {/* <option value="Accept" onChange={(event) => {handleSelectedDrop(event)}}>Accept</option>
          <option value="Complete">Complete</option>
          <option value="Spam">Spam</option> */}
          <AnimatedDropdown
            options={options}
            HandleComplaintDropDown={HandleComplaintDropDown}
            reportId={complaint._id}
            initialText={
              complaint.state === "Submitted"
                ? initialText
                : complaint.state
            }
          />
          {/* {selected} */}
        </div>
      </div>
    );
  })}