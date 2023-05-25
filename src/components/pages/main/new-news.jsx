import React from "react";
import testImg from "../../../public/image/news-test.jpg";
import userIcon from "../../../public/image/user.jpeg";
import circle from "../../../public/image/circle-yelow.svg";
import triangleVector from "../../../public/image/triangle-vector.svg";
import doteGroup from "../../../public/image/footer-dote-group.svg";

const newNews = () => {
  return (
    <div className="mx-100 new-news">
      <div className="container-flouid">
        <div className="row justify-content-center">
          <div className="col-12 d-flex justify-content-between align-items-center mb-4 pb-3 ">
            <div className="absolute news-dote-group">
              <img src={doteGroup} className="" alt="" />
            </div>
            <div className=" titre d-flex aligin-items-center">
              <div className="border-right"></div>
              <div className="mx-2">جدیدترین اخبار</div>
            </div>
            <div className="gray-title center">
              <div> مشاهده بیشتر</div>
              <div className="icon-angle-left"></div>
            </div>
          </div>
          <div className="col news">
            <div className="card">
              <img src={testImg} className="card-img-top" alt="" />
              <div className="card-mark center">
                <i className="demo-icon icon-bookmark-empty" />
                {/* <i className="demo-icon icon-bookmark" /> */}
              </div>
              <div className="card-body">
                <div className="card-body-title">
                  بخشنامه‌ دادستان کل کشور برای پذیرش
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="">
                    <img src={userIcon} alt="" />
                    <span className="mx-2 gray-title">لیدا بابایی</span>
                  </div>
                  <div>
                    <i className="demo-icon icon-calendar-2 icon-calendar-date mx-2" />
                    <span className="farsi-number secod-title word-spacing-4">
                      20 آذر 1401
                    </span>
                  </div>
                </div>
                <p className="card-text mt-2">
                  به دادستان‌های مراکز استان‌ها خواست که نسبت دادستانی کل کشور
                  در بخش نامه‌ای خطاب وثایق معرفی شده ازنوع اموال منقول نظیر
                  خودرو اعمال شود به پذیرش
                </p>
              </div>
              <span className="card-tags">تکنولوژی و فناوری</span>
            </div>
          </div>
          <div className="col news">
            <div className="card">
              <div className="card-mark center">
                <i className="demo-icon icon-bookmark-empty" />
                {/* <i className="demo-icon icon-bookmark" /> */}
              </div>
              <img src={testImg} className="card-img-top" alt="" />
              <div className="card-body">
                <div className="card-body-title">
                  بخشنامه‌ دادستان کل کشور برای پذیرش
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="">
                    <img src={userIcon} alt="" />
                    <span className="mx-2 gray-title">لیدا بابایی</span>
                  </div>
                  <div>
                    <i className="demo-icon icon-calendar-2 icon-calendar-date mx-2" />
                    <span className="farsi-number secod-title word-spacing-4">
                      20 آذر 1401
                    </span>
                  </div>
                </div>
                <p className="card-text mt-2">
                  به دادستان‌های مراکز استان‌ها خواست که نسبت دادستانی کل کشور
                  در بخش نامه‌ای خطاب وثایق معرفی شده ازنوع اموال منقول نظیر
                  خودرو اعمال شود به پذیرش
                </p>
              </div>
              <span className="card-tags">تکنولوژی و فناوری</span>
            </div>
          </div>
          <div className="col news">
            <div className="card">
              <img src={testImg} className="card-img-top" alt="" />
              <div className="card-mark center">
                <i className="demo-icon icon-bookmark-empty" />
                {/* <i className="demo-icon icon-bookmark" /> */}
              </div>
              <div className="card-body">
                <div className="card-body-title">
                  بخشنامه‌ دادستان کل کشور برای پذیرش
                </div>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="">
                    <img src={userIcon} alt="" />
                    <span className="mx-2 gray-title">لیدا بابایی</span>
                  </div>
                  <div>
                    <i className="demo-icon icon-calendar-2 icon-calendar-date mx-2" />
                    <span className="farsi-number secod-title word-spacing-4">
                      20 آذر 1401
                    </span>
                  </div>
                </div>
                <p className="card-text mt-2">
                  به دادستان‌های مراکز استان‌ها خواست که نسبت دادستانی کل کشور
                  در بخش نامه‌ای خطاب وثایق معرفی شده ازنوع اموال منقول نظیر
                  خودرو اعمال شود به پذیرش
                </p>
              </div>
              <span className="card-tags">تکنولوژی و فناوری</span>
            </div>
          </div>
        </div>

        <div className="triangleVector">
          <img src={triangleVector} className="" alt="" />
        </div>
        <div className="circle">
          <img src={circle} className="" alt="" />
        </div>
      </div>
    </div>
  );
};
export default newNews;
