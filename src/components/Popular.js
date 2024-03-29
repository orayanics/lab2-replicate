import { useState } from "react";
import Song from "./Song";

import play from "../assets/play.png";

export default function Popular(props) {
  const [follow, setFollow] = useState(props.isFollowing);

  function handleClick(e) {
    e.preventDefault();
    setFollow(!follow);
  }
  return (
    <>
      <div className="song-body">
        <div className="flex-container align-left artist-options">
          <img className="play-img" src={play} alt="play" />
          <button className="btn-follow" onClick={handleClick}>
            {!follow ? (
              "Follow"
            ) : (
              "Following"
            )}
          </button>

          <div className="dots"></div>
        </div>

        <h2>Popular</h2>
        <Song />
      </div>
    </>
  );
}
