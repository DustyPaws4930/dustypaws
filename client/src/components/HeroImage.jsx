import React from "react";
import Resizer from "react-image-file-resizer";

const resizeFile = (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      300,
      400,
      "JPEG",
      80,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });

  const imgResizing = {
    width:"300px",
    height:"300px"
  }

let HeroImage = () => {
  return (
    <>
      <div className="hero-image">
        <h1>Heroes</h1>
        <img src="" alt="" style={imgResizing} />
      </div>
    </>
  );
};

export default HeroImage;
