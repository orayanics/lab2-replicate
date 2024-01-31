import React from "react";
import Verified from "../assets/verified.png";

export default function Header(props) {
  const imgUrl = props.img;
  return (
    <>
      <div className="flex-container align-left header-body">
        <img className="artist-img" src={imgUrl} alt="Hev Abi" />

        <div>
          <div className="flex-container row verified">
            <img className="verified-img" src={Verified} alt="Verified" />
            <p>Verified Artist</p>
          </div>

          <div className="flex-container column artist">
            <h1>{props.artist}</h1>
            <p>{props.listeners} monthly listeners</p>
          </div>
        </div>
      </div>
    </>
  );
}
