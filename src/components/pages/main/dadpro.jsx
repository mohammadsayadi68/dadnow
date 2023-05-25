import React from "react";
import testImg from "../../../public/image/news-test.jpg";
import userIcon from "../../../public/image/user.jpeg";
import circle from "../../../public/image/circle-blue.svg";
import clock from "../../../public/image/clock.svg";
import triangleVector from "../../../public/image/triangle-vector.svg";
import doteGroup from "../../../public/image/footer-dote-group.svg";


const dadpro = () => {
  return (
    <div className="mx-100 dadpro">
      <div className="container-flouid">
      <div className="triangleVector">
          <img src={triangleVector} className="" alt="" />
        </div>
        <div className="circle">
          <img src={circle} className="" alt="" />
        </div>
        <div className=" dote-group">
              <img src={doteGroup} className="" alt="" />
            </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-between align-items-center mb-4 pb-3">
            <div className=" section-titre d-flex aligin-items-center">
              <div className="border-right"></div>
              <div className="mx-2"> داد پرو</div>
            </div>
            <div className="gray-title center">
              <div> مشاهده بیشتر</div>
              <div className="icon-angle-left"></div>
            </div>
          </div>

          <div className="col-md-6  d-flex flex-column justify-content-center align-items-center">
            <img src={testImg} className="w-100 img" alt="" />
            <div className="dadpro-card w-80 p-30">
              <div className="card-title">
                تحلیلی بر وضعیت حقوقی شتاب دهنده‌های ایرانی ...
              </div>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <div className="">
                  <img src={userIcon} alt="" className="avatar" />
                  <span className="mx-2 gray-title">لیدا بابایی</span>
                </div>
              </div>
              <p className="card-text my-3">
                شکل‌گیری شتاب‌دهنده‌های ایرانی سیر متفاوتی نسبت به شتاب این امر
                از یک سو در قرارداد های شتاب‌دهی در شتاب دهنده‌های
              </p>
              <div className="d-flex ">
                <img src={clock} className="clock" alt="" />
                <div className="gray-title mx-2 ">زمان مطالعه:</div>
                <div className="secod-title farsi-number word-spacing-4">
                  4 دقیقه
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6  d-flex flex-column justify-content-center align-items-center">
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={testImg} className="w-100 img img-left" alt="" />
              <div className="dadpro-card p-30">
                <div className="card-title">
                  تحلیلی بر وضعیت حقوقی شتاب دهنده‌های ایرانی ...
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="">
                    <img src={userIcon} alt="" className="avatar" />
                    <span className="mx-2 gray-title">لیدا بابایی</span>
                  </div>
                </div>
                <p className="card-text my-3">
                  شکل‌گیری شتاب‌دهنده‌های ایرانی سیر متفاوتی نسبت به شتاب این
                  امر از یک سو در قرارداد های شتاب‌دهی در شتاب دهنده‌های
                </p>
                <div className="d-flex ">
                  <img src={clock} className="clock" alt="" />
                  <div className="gray-title mx-2 ">زمان مطالعه:</div>
                  <div className="secod-title farsi-number word-spacing-4">
                    4 دقیقه
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center mt-3">
              <img src={testImg} className="w-100 img img-left" alt="" />
              <div className="dadpro-card p-30">
                <div className="card-title">
                  تحلیلی بر وضعیت حقوقی شتاب دهنده‌های ایرانی ...
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="">
                    <img src={userIcon} alt="" className="avatar" />
                    <span className="mx-2 gray-title">لیدا بابایی</span>
                  </div>
                </div>
                <p className="card-text my-3">
                  شکل‌گیری شتاب‌دهنده‌های ایرانی سیر متفاوتی نسبت به شتاب این
                  امر از یک سو در قرارداد های شتاب‌دهی در شتاب دهنده‌های
                </p>
                <div className="d-flex ">
                  <img src={clock} className="clock" alt="" />
                  <div className="gray-title mx-2 ">زمان مطالعه:</div>
                  <div className="secod-title farsi-number word-spacing-4">
                    4 دقیقه
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
export default dadpro;
