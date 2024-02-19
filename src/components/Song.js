import React from "react";
import { tracks } from "../assets/tracks.js";
import "../styles/song.css";
export default function Song() {
  const mostPlayedTrack = tracks.reduce((prev, current) =>
    prev.plays > current.plays ? prev : current
  );
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
                {track === mostPlayedTrack ? (
                  <p className="most-played">Most Played</p>
                ) : null}{" "}
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
