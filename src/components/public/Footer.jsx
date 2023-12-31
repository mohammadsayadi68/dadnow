import React from "react";
import footerVector from "../../public/image/law-vector.svg";
import footerDote from "../../public/image/footer-dote-group.svg";
import triangleVector from "../../public/image/triangle-vector.svg";
import circle from "../../public/image/circle-yelow.svg";
import logo from "../../public/image/Podilaw-mag-dark.svg";
import location from "../../public/image/vector-location.svg";
import call from "../../public/image/vector-call.svg";
import arrow from "../../public/image/vector-arrow.svg";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-body w-100 ">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="footer-body-desc">
                <div className="triangleVector">
                  <img src={triangleVector} className="" alt="" />
                </div>
                <div className="footer-logo d-flex ">
                  <img src={logo} alt="" className="item1" />
                  <div className="item2">دادنو</div>
                </div>
                <p className="w-100">
                  با این موضوع روبه رو هستند که محتویات اصلی صفحات اماده نیست
                  طراحان سایت هنگام طراحی قالب سایت معمولا
                </p>
                <p className="w-100">
                  با این موضوع روبه رو هستند که محتویات اصلی صفحات اماده نیست
                  طراحان سایت هنگام طراحی قالب سایت معمولا
                </p>
                <p className="w-100">
                  با این موضوع روبه رو هستند که محتویات اصلی صفحات اماده نیست
                  طراحان سایت هنگام طراحی قالب سایت معمولا
                </p>
              </div>
            </div>
            <div className="col-lg-6 mt-2">
              <div className="row ">
                <div className="col-6 footer-left  m-0 m-md-auto">
                  <ul>
                    <li className=" footer-left-titre">لینک های مفید</li>
                    <li className="">
                      <a href="">مقالات</a>
                    </li>
                    <li className="">
                      <a href="">لینک های مفید</a>
                    </li>
                    <li className="">
                      <a href="">گزارش ها</a>
                    </li>
                    <li className="">
                      <a href="">تماس ها</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 footer-left m-0 m-md-auto">
                  <ul>
                    <li className=" footer-left-titre">
                      {" "}
                      <i className="fa fa-user"></i> راه های ارتباطی
                    </li>
                    <li className="footer-left-item"><img src={location} alt="" className="" />  تهران-ناهید شرقی</li>
                    <li className="footer-left-item"><img src={call} alt=""  className=""/> 0215468</li>
                    <li className="footer-left-item"><img src={arrow} alt="" className="" />POD@GMAIL.COM</li>
                    <li className="footer-left-item d-flex">
                      <div className="icon">
                        <i className="icon-telegram" />
                      </div>
                      <div className="mx-3">
                        <i className="icon-instagram" />
                      </div>
                      <div className="">
                        <i className="demo-icon icon-linkedin" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={footerVector} className="footer-vector" alt="" />
      <img src={footerDote} className="footer-dote" alt="" />
      <img src={triangleVector} className="footer-dote triang" alt="" />
      <div className="circle">
        <img src={circle} className="" alt="" />
      </div>
    </div>
  );
};

export default Footer;
