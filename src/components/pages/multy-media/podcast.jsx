import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import avatar from "../../../public/image/news-test.jpg";
import play from "../../../public/image/play-btn.svg";
import archive from "../../../public/image/archive-add.svg";
import volume from "../../../public/image/volume-high.svg";
import send from "../../../public/image/send-2.svg";
import Gplay from "../../../public/image/play-g.svg";
import clock from "../../../public/image/clock.svg";
import Gpause from "../../../public/image/Gpause.svg";
import Podcasts from "./podcast-list";
const Podcast = () => {
  const [podcasts, setPodcast] = useState([]);
  const [currentPodcast, setCurrentPodcast] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVolume, setshowVolume] = useState(false);
  const [podcastInfo, setPodcastInfo] = useState({
    currentTime: 0,
    duration: 0,
    percent: 0,
    volume: 1,
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:8000/api/podcast");
      setTimeout(() => {
        setPodcast(response.data.data);
        setIsLoading(false);
      }, 1000);
    }
    setCurrentPodcast(podcasts[0]);
    getData();
  }, []);

  const audioRef = useRef(null);
  const playPodcast = () => {
    {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
        } else {
          audioRef.current.play();
          setIsPlaying(true);
        }
      }
    }
  };
  const timeUpdateHandler = (e) => {
    const currentTime = Math.round(e.target.currentTime);
    const duration = Math.round(e.target.duration);
    const percent = (currentTime / duration) * 100;
    setPodcastInfo({ ...podcastInfo, currentTime, duration, percent });
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
  // const handelCangePodcst = () => {};
  const tracjstyle = {
    width: `${podcastInfo.percent}%`,
  };
  const voiceHandler = (e) => {
    setPodcastInfo({ ...podcastInfo, volume: e.target.value });

    audioRef.current.volume = e.target.value / 10;
  };
  const volumestyle = {
    width: `${(podcastInfo.volume*10)}%`,
  };
  return (
    <>
      {isLoading ? (
        <></>
      ) : (
        <>
          <div className="mt-50">
            <div className="d-flex justify-content-between align-items-center">
              <div className=" section-titre d-flex aligin-items-center">
                <div className="border-right border-right-blue"></div>
                <div className="mx-2"> پادکست راه گارگزاران فردا </div>
              </div>
            </div>
            <div className="podcast">
              {currentPodcast ? (
                <div className="podcast-header d-flex ">
                  <img src={currentPodcast.cover} alt="" />
                  <div className="w-100 d-flex flex-column  mx-2">
                    <h2 className="titre">{currentPodcast.title}</h2>
                    <div className="time farsi-number ">
                      {" "}
                      {timeFormat(podcastInfo.currentTime)}/
                      {timeFormat(podcastInfo.duration)}
                    </div>
                    <div className="d-flex   align-items-center">
                      <div
                        className="play-btn d-flex  justify-content-center align-items-center"
                        onClick={playPodcast}
                      >
                        <img src={play} alt="" />
                      </div>

                      <div className="play-prog">
                        <input
                          className="w-100 "
                          type="range"
                          min={0}
                          max={podcastInfo.duration}
                          value={podcastInfo.currentTime}
                          onChange={dragHandler}
                        />
                        <div style={tracjstyle} className="play-time"></div>
                      </div>
                      <div className=" d-flex relative ">
                        <img src={archive} alt="" className="icon " />
                        <img src={volume} onClick={()=>{setshowVolume(!showVolume)}} alt="" className="icon mx-2" />
                        <img src={send} alt="" className="icon" />
                        <div className={`absolute volume d-none ${showVolume ? 'show-volume': '' }`}>
                          <div className="voiceHandler center">
                            <div className=" play-prog">
                              <input
                                className="w-100"
                                onChange={voiceHandler}
                                type="range"
                                min={1} 
                                max={10}
                              />
                              <div
                                style={volumestyle}
                                className="play-time"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <></>
              )}

              <div className="podcast-body">
                {currentPodcast ? (
                  <div className="items d-flex  justify-content-between align-items-center active">
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
                          src={currentPodcast.audio}
                        ></audio>
                      </div>

                      <div className="mx-2">
                        <div className="titre my-1">{currentPodcast.title}</div>

                        <div className="sub-titre farsi-number my-1">
                          قسمت 19
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-column flex-sm-row align-items-center word-spacing-4 farsi-number px-3">
                      <div className="">
                        <img src={clock} alt="" className="mx-2 clock" />
                        <span className="f-14">
                          {" "}
                          {/* {timeFormat(podcastInfo.currentTime)}/ */}
                          {timeFormat(podcastInfo.duration)}
                        </span>
                      </div>
                      <div className="wall"></div>
                      <div className="">
                        <i className="demo-icon icon-calendar-2 icon-calendar-date mx-2"></i>
                        <span className="f-14">
                          {new Date(
                            currentPodcast.created_at
                          ).toLocaleDateString("fa-IR")}
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className=""></div>
                )}

                {podcasts.map((podcast) => {
                  return (
                    <div className="" id="" key={podcast.id}>
                      <Podcasts
                        podcast={podcast}
                        setCurrentPodcast={setCurrentPodcast}
                        playPodcast={playPodcast}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
       
        </>
      )}
    </>
  );
};

export default Podcast;
