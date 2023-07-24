import React from "react";
import player from "../../../public/image/big-player.png";
import microphone from "../../../public/image/microphone.png";
import clock from "../../../public/image/clock.svg";
import play from "../../../public/image/play-btn.svg";

const banner = () => {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-between align-items-center">
        <div className=" section-titre d-flex aligin-items-center">
          <div className="border-right border-right-orange"></div>
          <div className="mx-2"> چندرسانه‌ای </div>
        </div>
      </div>
      <div className="col-12 banner d-flex justify-content-center justify-content-md-start align-items-center">
        <img src={player} className="big-player" alt="" />
        <div className="desc">
          <div className="d-flex  justify-content-start align-items-center">
            <img src={microphone} alt="" className="microphone" />
            <div className="mx-2">
              <div className="card-title mb-1">
                چرا استارت آپ‌ها شکست میخورند؟
              </div>
              <div className=" gray-title mt-1">راه دانش</div>
            </div>
          </div>
          <div className="d-flex  justify-content-between align-items-end">
            <div className="d-flex align-items-center">
              <img src={clock} alt="" className="clock" />
              <div className="mx-2 card-sub-title">زمان پادکست : 4 دقیقه</div>
            </div>
            <div className="play-btn d-flex  justify-content-center align-items-center">
              <img src={play} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
