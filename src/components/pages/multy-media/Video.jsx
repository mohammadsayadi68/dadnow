import React from "react";
import cover from "../../../public/image/news-test.jpg";
import userIcon from "../../../public/image/user.jpeg";
import clock from "../../../public/image/clock.svg";
import play from "../../../public/image/play-btn.svg";

const Video = () => {
  return (
    <div className="container-fluid live">
      <div className="row">
        <div className="col-md-4 p-0">
          <div className="card">
            <div className="online center">
              <span>آنلاین</span>
            </div>
            <img src={cover} alt="" className="card-cover" />
          <div className="reletiv w-100">
          <div className="play-btn d-flex  justify-content-center align-items-center">
              <img src={play} alt="" />
            </div>
          </div>
            <div className=""></div>
            <div className="card-titre">بخشنامه دادستان کل کشور برای پذیرش</div>
            <div className="d-flex justify-content-between align-items-center mt-3 mx-2">
              <div className="">
                <img src={userIcon} alt="" className="card-avatar" />
                <span className="mx-2 gray-title">لیدا بابایی</span>
              </div>
              <div>
                <i className="demo-icon icon-calendar-2 icon-calendar-date f-16 mx-2" />
                <span className="farsi-number secod-title word-spacing-4">
                  20 آذر 1401
                </span>
              </div>
              <div>
                <img src={clock} alt="" className="mx-2 clock" />
                <span className="farsi-number secod-title word-spacing-4">
                  20:30
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-0">
          <div className="card">
            <div className="online center">
              <span>آنلاین</span>
            </div>
            <img src={cover} alt="" className="card-cover" />
          <div className="reletiv w-100">
          <div className="play-btn d-flex  justify-content-center align-items-center">
              <img src={play} alt="" />
            </div>
          </div>
            <div className=""></div>
            <div className="card-titre">بخشنامه دادستان کل کشور برای پذیرش</div>
            <div className="d-flex justify-content-between align-items-center mt-3 mx-2">
              <div className="">
                <img src={userIcon} alt="" className="card-avatar" />
                <span className="mx-2 gray-title">لیدا بابایی</span>
              </div>
              <div>
                <i className="demo-icon icon-calendar-2 icon-calendar-date f-16 mx-2" />
                <span className="farsi-number secod-title word-spacing-4">
                  20 آذر 1401
                </span>
              </div>
              <div>
                <img src={clock} alt="" className="mx-2 clock" />
                <span className="farsi-number secod-title word-spacing-4">
                  20:30
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 p-0">
          <div className="card">
            <div className="online center">
              <span>آنلاین</span>
            </div>
            <img src={cover} alt="" className="card-cover" />
          <div className="reletiv w-100">
          <div className="play-btn d-flex  justify-content-center align-items-center">
              <img src={play} alt="" />
            </div>
          </div>
            <div className=""></div>
            <div className="card-titre">بخشنامه دادستان کل کشور برای پذیرش</div>
            <div className="d-flex justify-content-between align-items-center mt-3 mx-2">
              <div className="">
                <img src={userIcon} alt="" className="card-avatar" />
                <span className="mx-2 gray-title">لیدا بابایی</span>
              </div>
              <div>
                <i className="demo-icon icon-calendar-2 icon-calendar-date f-16 mx-2" />
                <span className="farsi-number secod-title word-spacing-4">
                  20 آذر 1401
                </span>
              </div>
              <div>
                <img src={clock} alt="" className="mx-2 clock" />
                <span className="farsi-number secod-title word-spacing-4">
                  20:30
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Video