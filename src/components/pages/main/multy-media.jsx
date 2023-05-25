import React from "react";
import testImg from "../../../public/image/multy-media-right.png";
import medyatopleft from "../../../public/image/multymedia-left-top.png";
import company from "../../../public/image/Company.png";
import circle from "../../../public/image/circle-blue.svg";
import triangleVector from "../../../public/image/triangle-vector.svg";
import doteGroup from "../../../public/image/footer-dote-group.svg";

const media = () => {
  return (
    <div className=" multy-media mt-5">
        <div className="triangleVector absolute">
          <img src={triangleVector} className="" alt="" />
        </div>
      <div className="px-100">
        {/* <div class="circle">
          <img src={circle} class="" alt="" />
        </div> */}
        <div className=" dote-group absolute">
          <img src={doteGroup} className="" alt="" />
        </div>
        <div className="container-flouid">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center mb-4 pb-3">
              <div className=" section-titre d-flex aligin-items-center mt-4">
                <div className="border-right border-right-orange"></div>
                <div className="mx-2">چند رسانه ای</div>
              </div>
              <div className="gray-title center">
                <div> مشاهده بیشتر</div>
                <div className="icon-angle-left"></div>
              </div>
            </div>

            <div className="col-md-6  d-flex flex-column justify-content-center align-items-center  ">
              <div className="relative w-100">
                <img src={testImg} className=" img-big" alt="" />
                <div className=" img-desc">
                  <div className="titre">پادکست راه فردا</div>
                  <div className="body mt-2">چرا آپ ها شکست میخورند؟</div>
                  <div className="timer mt-1 farsi-number">قسمت 20</div>
                </div>
              </div>
            </div>
            <div className="col-md-6  d-flex flex-column justify-content-center align-items-center">
              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="relative w-100">
                  <img src={medyatopleft} className=" img left-img" alt="" />
                  <div className=" img-desc">
                    <div className="titre">پادکست راه فردا</div>
                    <div className="body mt-2">چرا آپ ها شکست میخورند؟</div>
                    <div className="timer mt-1 farsi-number">قسمت 20</div>
                  </div>
                </div>
              </div>

              <div className="d-flex flex-column justify-content-center align-items-center">
                <div className="relative w-100">
                  <img
                    src={company}
                    className=" img left-img left-img-bottom"
                    alt=""
                  />
                  <div className=" img-desc">
                    <div className="titre">پادکست راه فردا</div>
                    <div className="body mt-2">چرا آپ ها شکست میخورند؟</div>
                    <div className="timer mt-1 farsi-number">قسمت 20</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default media;
