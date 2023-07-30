import React from "react";
import clock from "../../../public/image/clock.svg";
import Gplay from "../../../public/image/play-g.svg";

const podcasts = ({podcast,setCurrentPodcast,playPodcast}) => {
    const handelCangePodcst=()=>{
        setCurrentPodcast(podcast);
        playPodcast();

    }
  return (
    <>
      <div className="items d-flex  justify-content-between align-items-center"   onClick={handelCangePodcst}
      >
        <div className="d-flex align-items-center px-3">
          <div className="play-btn d-flex  justify-content-center align-items-center">
            <img src={Gplay} alt="" />
          </div>
          <div className="mx-2">
            <div className="titre my-1">{podcast.title}</div>
            <div className="sub-titre farsi-number my-1">{podcast.part}</div>
          </div>
        </div>
        <div className="d-flex flex-column flex-sm-row align-items-center word-spacing-4 farsi-number px-3">
          <div className="">
            <img src={clock} alt="" className="mx-2 clock" />
            <span className="f-14"> 5 دقیقه</span>
          </div>
          <div className="wall"></div>
          <div className="">
            <i className="demo-icon icon-calendar-2 icon-calendar-date mx-2" ></i>
            <span className="f-14">
            {new Date(podcast.created_at).toLocaleDateString(
                              "fa-IR"
                            )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default podcasts;
