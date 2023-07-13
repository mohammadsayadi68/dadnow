import React from "react";
import news from "../../../public/image/news-banner.png";
import triangle from "../../../public/image/triangle-vector.svg";
import triangleYellow from "../../../public/image/triangle-yellow.svg";
import circleBlue from "../../../public/image/circle-blue.svg";
import circleYelow from "../../../public/image/circle-yelow.svg";
import userIcon from "../../../public/image/user.jpeg";
import clock from "../../../public/image/clock.svg";
import twitter from "../../../public/image/twitter-icon.svg";
import instagram from "../../../public/image/icons-instagram.svg";
import shareLink from "../../../public/image/link-circle.svg";
import NewNews from "../main/new-news";

const News = () => {
  return (
    <div className=" my-5 news">
      <div className="center">
        <h1>تحلیلی بر وضعیت حقوقی شتاب هنده های ایرانی,تعداد,نوع وقراردادها</h1>
      </div>
      <div className=" w-100 banner">
        <div className="relative">
          <img
            src={triangleYellow}
            alt=""
            className="absolute triangleYellow"
          />
          <div className="absolute triangleBlue">
            <img src={triangle} alt="" className=" " />
          </div>
        </div>
        <div className="mx-100">
          <img src={news} alt="" className="" />
        </div>
        <div className="relative">
          <div className="absolute circleBlue">
            <img src={circleBlue} alt="" className="" />
          </div>
          <div className="absolute circleYelow">
            <img src={circleYelow} alt="" className="" />
          </div>
        </div>
      </div>
      <div className="mx-100 d-flex align-items-center user">
        <img src={userIcon} alt="" className="card-avatar" />
        <div className="">
          <span className="mx-2 name">لیدا بابایی</span>
          <div className="d-flex mt-3">
            <div>
              <i className="demo-icon icon-calendar-2 icon-calendar-date f-16 mx-2" />
              <span className="farsi-number secod-title word-spacing-4">
                20 آذر 1401
              </span>
            </div>
            <div className="mx-4">
              <img src={clock} alt="" className="mx-2 clock" />
              <span className="farsi-number secod-title word-spacing-4">
                20:30
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-100 d-flex">
        <div className="body">
          <div className="d-flex">
            <div className="border-right-titre"></div>
            <div className="">
              <h2 className="min-desc">
                شکل‌گیری شتاب‌دهنده‌های ایرانی سیر متفاوتی نسبت به
                شتاب‌دهنده‌های خارجی دارد. این امر از یک سو در قراردادهای
                شتاب‌دهی در شتاب‌دهنده‌های ایرانی اثر گذاشته و از سوی دیگر باعث
                تفاوت در نوع و قالب آن‌ها شده است.در این نوشتار به بررسی سایر
                وضعیت حقوقی شتاب‌دهنده‌های ایرانی می‌پردازیم.
              </h2>
            </div>
          </div>
        </div>
        <div className="">
          <div className="share">
            <div className="share-icon center">
              <img src={twitter} alt="" />
            </div>
            <div className="share-icon center">
              <img src={instagram} alt="" />
            </div>
            <div className="share-icon center">
              <img src={shareLink} alt="" />
            </div>
          </div>
        </div>

      </div>
        <NewNews />
    </div>
  );
};

export default News;
