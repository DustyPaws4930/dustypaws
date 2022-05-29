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

let HeroImage = () => {
  return (
    <>
      <div className="hero-image">
        <h1>Heroes</h1>
        <img src="" alt="" srcset="" />
      </div>
    </>
  );
};

export default HeroImage;
