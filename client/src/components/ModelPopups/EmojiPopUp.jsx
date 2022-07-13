import React from "react";
import BirdAvatar from "../images/Bird_Avatar.png";
import PandaAvatar from "../images/Panda_Avatar.png";
import HamsterAvatar from "../images/Hamster_Avatar.png";
import DogAvatar from "../images/Dog_Avatar.png";
import CatAvatar from "../images/Cat_Avatar.png";

const EmojiPopUp = (props) => {
  return (
    <>
      <div className="EmojiWrapContainer">
        <div className="closeBtnContainer">
          <button onClick={props.TogglePopUp} className="closePopUpBtn">
            X
          </button>
        </div>
        <div className="EmojiContainer">
          <a
            onClick={(e) => {
              props.setSelectedImage(e);
            }}
          >
            <img name="Bird" src={BirdAvatar} alt="Bird Avatar" />
          </a>
          <a
            onClick={(e) => {
              props.setSelectedImage(e);
            }}
          >
            <img name="Panda" src={PandaAvatar} alt="Panda Avatar" />
          </a>
          <a
            onClick={(e) => {
              props.setSelectedImage(e);
            }}
          >
            <img name="Hamster" src={HamsterAvatar} alt="Hamster Avatar" />
          </a>
          <a
            onClick={(e) => {
              props.setSelectedImage(e);
            }}
          >
            <img name="Dog" src={DogAvatar} alt="Dog Avatar" />
          </a>
          <a
            onClick={(e) => {
              props.setSelectedImage(e);
            }}
          >
            <img name="Cat" src={CatAvatar} alt="Cat Avatar" />
          </a>
        </div>
      </div>
    </>
  );
};

export default EmojiPopUp;
