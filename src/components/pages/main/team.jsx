import React from "react";
import circle from "../../../public/image/circle-yelow.svg";
import triangleVector from "../../../public/image/triangle-vector.svg";
import userImg from "../../../public/image/team-img.png";
import Google from "../../../public/image/Google.svg";

const team = () => {
  return (
    <div className="mx-100 team mt-5">
      <div className="container-flouid">
        <div className="triangleVector center">
          <img src={triangleVector} className="" alt="" />
        </div>
    
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <div className=" section-titre d-flex aligin-items-center">
              <div className="border-right"></div>
              <div className="mx-2"> تحریریه‌ی ما </div>
            </div>
          </div>
        </div>

        <div className="row d-flex justify-content-between">
          <div className="col-md-3">
            <div className="center flex-column">
              <div className="center flex-column team-card">
                <img src={userImg} className="team-card-img" alt="" />
                <div className="team-card-titre">صدرا عظیم</div>
                <div className="gray-title"> خبرنگار صفحات اجتماعی</div>
                <div className="d-flex">
                <div className="icon center">
                    <img src={Google} className="" alt="" />
                  </div>
                  <div className="icon center">
                    <i className="demo-icon icon-linkedin " />
                  </div>
              
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="center flex-column">
              <div className="center flex-column team-card">
                <img src={userImg} className="team-card-img" alt="" />
                <div className="team-card-titre">صدرا عظیم</div>
                <div className="gray-title"> خبرنگار صفحات اجتماعی</div>
                <div className="d-flex">
                <div className="icon center">
                    <img src={Google} className="" alt="" />
                  </div>
                  <div className="icon center">
                    <i className="demo-icon icon-linkedin " />
                  </div>
              
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="center flex-column">
              <div className="center flex-column team-card">
                <img src={userImg} className="team-card-img" alt="" />
                <div className="team-card-titre">صدرا عظیم</div>
                <div className="gray-title"> خبرنگار صفحات اجتماعی</div>
                <div className="d-flex">
                <div className="icon center">
                    <img src={Google} className="" alt="" />
                  </div>
                  <div className="icon center">
                    <i className="demo-icon icon-linkedin " />
                  </div>
              
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="center flex-column">
              <div className="center flex-column team-card">
                <img src={userImg} className="team-card-img" alt="" />
                <div className="team-card-titre">صدرا عظیم</div>
                <div className="gray-title"> خبرنگار صفحات اجتماعی</div>
                <div className="d-flex">
                <div className="icon center">
                    <img src={Google} className="" alt="" />
                  </div>
                  <div className="icon center">
                    <i className="demo-icon icon-linkedin " />
                  </div>
              
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="circle center">
          <img className="" alt="" />
          <img src={circle} className="" alt="" />
        </div>
      </div>
    </div>
  );
};
export default team;
