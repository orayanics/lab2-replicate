import React from "react";
import { tracks } from "../assets/tracks.js";
import "../styles/song.css";
export default function Song() {
  return (
    <>
      <div>
        {tracks.map((track) => {
          return (
            <div className="flex-container flex-child">
              <div className="flex-container one">
                <p className="number">{track.number}</p>

                <img className="album-img" src={track.imgUrl} alt="img" />
                <p className="span title">{track.title}</p>
              </div>

              <div className="flex-container two">
                <p className="span">
                  {track.plays.toLocaleString("en-US").replace(/,/g, ",")}
                </p>
                <p className="span">{track.duration}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
