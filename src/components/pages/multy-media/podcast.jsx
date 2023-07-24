import React from "react";
import avatar from "../../../public/image/news-test.jpg";
import play from "../../../public/image/play-btn.svg";
import archive from "../../../public/image/archive-add.svg";
import volume from "../../../public/image/volume-high.svg";
import send from "../../../public/image/send-2.svg";
import Gplay from "../../../public/image/play-g.svg";
import clock from "../../../public/image/clock.svg";
import Gpause from "../../../public/image/Gpause.svg";

const Podcast = () => {
  return (
    <>
      <div className="mt-50">
        <div className="d-flex justify-content-between align-items-center">
          <div className=" section-titre d-flex aligin-items-center">
            <div className="border-right border-right-blue"></div>
            <div className="mx-2"> پادکست راه گارگزاران فردا </div>
          </div>
        </div>
        <div className="podcast">
          <div className="podcast-header d-flex ">
            <img src={avatar} alt="" />
            <div className="w-100 d-flex flex-column  mx-2">
              <h2 className="titre">چرا استارت آپ ها شگست میخورند؟</h2>
              <div className="time farsi-number ">05:20/15:10</div>
              <div className="d-flex   align-items-center">
                <div className="play-btn d-flex  justify-content-center align-items-center">
                  <img src={play} alt="" />
                </div>

                <div class="progress w-100 mx-2">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "45%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className=" d-flex ">
                  <img src={archive} alt="" className="icon " />
                  <img src={volume} alt="" className="icon mx-2" />
                  <img src={send} alt="" className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="podcast-body">
            <div className="items d-flex  justify-content-between align-items-center active">
              <div className="d-flex align-items-center px-3">
                <div className="play-btn d-flex  justify-content-center align-items-center">
                  <img src={Gpause} alt="" />
                </div>
                <div className="mx-2">
                  <div className="titre my-1">
                    چرا استارت آپ ها شکست میخورند؟
                  </div>
                  <div className="sub-titre farsi-number my-1">قسمت 19</div>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center word-spacing-4 farsi-number px-3">
                <div className="">
                  <img src={clock} alt="" className="mx-2 clock" />
                  <span className="f-14"> 5 دقیقه</span>
                </div>
                <div className="wall"></div>
                <div className="">
                  <i class="demo-icon icon-calendar-2 icon-calendar-date mx-2"></i>
                  <span className="f-14">20 آذز 1401</span>
                </div>
              </div>
            </div>
            <div className="items d-flex  justify-content-between align-items-center">
              <div className="d-flex align-items-center px-3">
                <div className="play-btn d-flex  justify-content-center align-items-center">
                  <img src={Gplay} alt="" />
                </div>
                <div className="mx-2">
                  <div className="titre my-1">
                    چرا استارت آپ ها شکست میخورند؟
                  </div>
                  <div className="sub-titre farsi-number my-1">قسمت 19</div>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center word-spacing-4 farsi-number px-3">
                <div className="">
                  <img src={clock} alt="" className="mx-2 clock" />
                  <span className="f-14"> 5 دقیقه</span>
                </div>
                <div className="wall"></div>
                <div className="">
                  <i class="demo-icon icon-calendar-2 icon-calendar-date mx-2"></i>
                  <span className="f-14">20 آذز 1401</span>
                </div>
              </div>
            </div>
            <div className="items d-flex  justify-content-between align-items-center">
              <div className="d-flex align-items-center px-3">
                <div className="play-btn d-flex  justify-content-center align-items-center">
                  <img src={Gplay} alt="" />
                </div>
                <div className="mx-2">
                  <div className="titre my-1">
                    چرا استارت آپ ها شکست میخورند؟
                  </div>
                  <div className="sub-titre farsi-number my-1">قسمت 19</div>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center word-spacing-4 farsi-number px-3">
                <div className="">
                  <img src={clock} alt="" className="mx-2 clock" />
                  <span className="f-14"> 5 دقیقه</span>
                </div>
                <div className="wall"></div>
                <div className="">
                  <i class="demo-icon icon-calendar-2 icon-calendar-date mx-2"></i>
                  <span className="f-14">20 آذز 1401</span>
                </div>
              </div>
            </div>
            <div className="items d-flex  justify-content-between align-items-center">
              <div className="d-flex align-items-center px-3">
                <div className="play-btn d-flex  justify-content-center align-items-center">
                  <img src={Gplay} alt="" />
                </div>
                <div className="mx-2">
                  <div className="titre my-1">
                    چرا استارت آپ ها شکست میخورند؟
                  </div>
                  <div className="sub-titre farsi-number my-1">قسمت 19</div>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center word-spacing-4 farsi-number px-3">
                <div className="">
                  <img src={clock} alt="" className="mx-2 clock" />
                  <span className="f-14"> 5 دقیقه</span>
                </div>
                <div className="wall"></div>
                <div className="">
                  <i class="demo-icon icon-calendar-2 icon-calendar-date mx-2"></i>
                  <span className="f-14">20 آذز 1401</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-50">
        <div className="d-flex justify-content-between align-items-center">
          <div className=" section-titre d-flex aligin-items-center">
            <div className="border-right border-right-blue"></div>
            <div className="mx-2"> پادکست راه گارگزاران فردا </div>
          </div>
        </div>
        <div className="podcast">
          <div className="podcast-header d-flex ">
            <img src={avatar} alt="" />
            <div className="w-100 d-flex flex-column  mx-2">
              <h2 className="titre">چرا استارت آپ ها شگست میخورند؟</h2>
              <div className="time farsi-number ">05:20/15:10</div>
              <div className="d-flex   align-items-center">
                <div className="play-btn d-flex  justify-content-center align-items-center">
                  <img src={play} alt="" />
                </div>

                <div class="progress w-100 mx-2">
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "45%" }}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div className=" d-flex ">
                  <img src={archive} alt="" className="icon " />
                  <img src={volume} alt="" className="icon mx-2" />
                  <img src={send} alt="" className="icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="podcast-body">
            <div className="items d-flex  justify-content-between align-items-center active">
              <div className="d-flex align-items-center px-3">
                <div className="play-btn d-flex  justify-content-center align-items-center">
                  <img src={Gpause} alt="" />
                </div>
                <div className="mx-2">
                  <div className="titre my-1">
                    چرا استارت آپ ها شکست میخورند؟
                  </div>
                  <div className="sub-titre farsi-number my-1">قسمت 19</div>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center word-spacing-4 farsi-number px-3">
                <div className="">
                  <img src={clock} alt="" className="mx-2 clock" />
                  <span className="f-14"> 5 دقیقه</span>
                </div>
                <div className="wall"></div>
                <div className="">
                  <i class="demo-icon icon-calendar-2 icon-calendar-date mx-2"></i>
                  <span className="f-14">20 آذز 1401</span>
                </div>
              </div>
            </div>
            <div className="items d-flex  justify-content-between align-items-center">
              <div className="d-flex align-items-center px-3">
                <div className="play-btn d-flex  justify-content-center align-items-center">
                  <img src={Gplay} alt="" />
                </div>
                <div className="mx-2">
                  <div className="titre my-1">
                    چرا استارت آپ ها شکست میخورند؟
                  </div>
                  <div className="sub-titre farsi-number my-1">قسمت 19</div>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center word-spacing-4 farsi-number px-3">
                <div className="">
                  <img src={clock} alt="" className="mx-2 clock" />
                  <span className="f-14"> 5 دقیقه</span>
                </div>
                <div className="wall"></div>
                <div className="">
                  <i class="demo-icon icon-calendar-2 icon-calendar-date mx-2"></i>
                  <span className="f-14">20 آذز 1401</span>
                </div>
              </div>
            </div>
            <div className="items d-flex  justify-content-between align-items-center">
              <div className="d-flex align-items-center px-3">
                <div className="play-btn d-flex  justify-content-center align-items-center">
                  <img src={Gplay} alt="" />
                </div>
                <div className="mx-2">
                  <div className="titre my-1">
                    چرا استارت آپ ها شکست میخورند؟
                  </div>
                  <div className="sub-titre farsi-number my-1">قسمت 19</div>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center word-spacing-4 farsi-number px-3">
                <div className="">
                  <img src={clock} alt="" className="mx-2 clock" />
                  <span className="f-14"> 5 دقیقه</span>
                </div>
                <div className="wall"></div>
                <div className="">
                  <i class="demo-icon icon-calendar-2 icon-calendar-date mx-2"></i>
                  <span className="f-14">20 آذز 1401</span>
                </div>
              </div>
            </div>
            <div className="items d-flex  justify-content-between align-items-center">
              <div className="d-flex align-items-center px-3">
                <div className="play-btn d-flex  justify-content-center align-items-center">
                  <img src={Gplay} alt="" />
                </div>
                <div className="mx-2">
                  <div className="titre my-1">
                    چرا استارت آپ ها شکست میخورند؟
                  </div>
                  <div className="sub-titre farsi-number my-1">قسمت 19</div>
                </div>
              </div>
              <div className="d-flex flex-column flex-sm-row align-items-center word-spacing-4 farsi-number px-3">
                <div className="">
                  <img src={clock} alt="" className="mx-2 clock" />
                  <span className="f-14"> 5 دقیقه</span>
                </div>
                <div className="wall"></div>
                <div className="">
                  <i class="demo-icon icon-calendar-2 icon-calendar-date mx-2"></i>
                  <span className="f-14">20 آذز 1401</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Podcast;
