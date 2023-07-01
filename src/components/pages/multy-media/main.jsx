import React from "react";
import { useState } from "react";
import Banner from "./banner";
import Live from "./live";
import Video from "./Video";
import Podcast from "./podcast";
import Mic from "../../../public/image/microphone-2.svg";
import Vplay from "../../../public/image/video-play.svg";
import Monitor from "../../../public/image/monitor-recorder.svg";

const Main = () => {
  const [isactive, setactive] = useState(<Podcast />);
  const [selected, setSelected] = useState("podcast");
  function active(actived) {
    if (actived == "live") {
      setactive(<Live />);
      setSelected("live");
    } else if (actived == "podcast") {
      setactive(<Podcast />);
      setSelected("podcast");
    } else if (actived == "video") {
      setactive(<Video />);
      setSelected("video");
    }
  }

  return (
    <div>
      <div className="mx-100 mt-5 media">
        <div className="container-flouid">
          <Banner />
          <div className="row">
            <div className="col-12">
              <div className=" d-flex">
                <div
                  className={"link " + (selected == "live" ? " active" : "")}
                  onClick={() => active("live")}
                >
                  <img src={Monitor} className="mx-3" />
                  پخش زنده
                </div>
                <div
                  className={
                    "link mx-3 " + (selected == "podcast" ? " active" : "")
                  }
                  onClick={() => active("podcast")}
                >
                  <img src={Mic} className="mx-3" />
                  پادکست
                </div>
                <div
                  className={"link " + (selected == "video" ? " active" : "")}
                  onClick={() => active("video")}
                >
                  <img src={Vplay} className="mx-3" />
                  ویدیو
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">{isactive}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
