import React from "react";
import clock from "../../../public/image/clock.svg";
import Gplay from "../../../public/image/play-g.svg";
import Gpause from "../../../public/image/Gpause.svg";
import { useState, useRef } from "react";

const currentPodcast =({podcast})  => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [podcastInfo, setPodcastInfo] = useState({
      currentTime: 0,
      duration: 0,
    });
  
    const audioRef = useRef(0);
    const playPodcast = () => {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    };
    const timeUpdateHandler = (e) => {
      const currentTime = e.target.currentTime;
      const duration = e.target.duration;
      setPodcastInfo({ ...podcastInfo, currentTime, duration });
    };
    const timeFormat = (time) => {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    };
    const dragHandler = (e) => {
      setPodcastInfo({ ...podcastInfo, currentTime: e.target.value });
      audioRef.current.currentTime = e.target.value;
    };

  return (
    <>
      <div
        className={`items d-flex  justify-content-between align-items-center ${
          isPlaying ? "active" : ""
        }`}
        key={podcast.id}
      >
        <div className="d-flex align-items-center px-3">
          <div
            className="play-btn d-flex  justify-content-center align-items-center"
            onClick={playPodcast}
          >
            <img src={isPlaying ? Gpause : Gplay} alt="" />
            <audio
              onLoadedMetadata={timeUpdateHandler}
              onTimeUpdate={timeUpdateHandler}
              ref={audioRef}
              src={podcast.audio}
            ></audio>
          </div>

          <div className="mx-2">
            <div className="titre my-1">{podcast.title}</div>

            <div className="sub-titre farsi-number my-1">قسمت 19</div>
          </div>
          <input
            type="range"
            id="volume"
            min={0}
            max={podcastInfo.duration}
            value={podcastInfo.currentTime}
            onChange={dragHandler}
          />
        </div>

        <div className="d-flex flex-column flex-sm-row align-items-center word-spacing-4 farsi-number px-3">
          <div className="">
            <img src={clock} alt="" className="mx-2 clock" />
            <span className="f-14">
              {" "}
              {timeFormat(podcastInfo.currentTime)}/{" "}
              {timeFormat(podcastInfo.duration)}
            </span>
          </div>
          <div className="wall"></div>
          <div className="">
            <i className="demo-icon icon-calendar-2 icon-calendar-date mx-2"></i>
            <span className="f-14">20 آذز 1401</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default currentPodcast;
