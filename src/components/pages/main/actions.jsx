import React from "react";
import test from "../../../public/image/action-test.png";
import clock from "../../../public/image/clock.svg";
import calendar from "../../../public/image/calendar.svg";
import userSquare from "../../../public/image/user-square.svg";
import circle from "../../../public/image/circle-yelow.svg";
// import doteGroup from "../../../public/image/action-dote-group.svg";

const actions = () => {
  return (
    <div className="action">
      <div className="">
        <div className=" justify-content-center">
          <div className="d-flex justify-content-between align-items-center header mx-100">
            <div className=" titre d-flex aligin-items-center">
              <div className="border-right"></div>
              <div className="mx-2 header-right">جدیدترین اخبار</div>
            </div>
            <div className="gray-title center">
              <div className="header-left"> مشاهده بیشتر</div>
              <div className="icon-angle-left"></div>
            </div>
          </div>
          <div class="circle">
            <img src={circle} class="" alt="" />
          </div>
            {/* <div className=" dote-group">
              <img src={doteGroup} className="" alt="" />
            </div> */}
          <div className="d-flex justify-content-center align-items-center list">
            <div className="item1 active">دوره‌های آموزشی</div>
            <div className="item2">نشست ها</div>
            <div className="item3">همایش ها</div>
          </div>
          <div className="action-card d-flex">
            <div className="action-body d-flex mx-5">
              <img src={test} class="card-img" alt="" />
              <div className="d-flex flex-column action-body-desc w-100 farsi-number">
                <div className="d-flex justify-content-between w-100">
                  <div className="titre">دوره فن بیان در حقوق</div>
                  <div className="">آنلاین</div>
                </div>
                <div className="word-spacing-4 secod-title fw-bold date">
                  <img src={calendar} className="" alt="" />
                  20 تا 24 آذز
                </div>
                <div className="word-spacing-4 secod-title fw-bold time">
                  <img src={clock} className="" alt="" />
                  20:30 تا 21:30
                </div>
                <div className="place">
                  <img src={userSquare} className="" alt="" />
                  موسسه آفرینش
                </div>
                <div className="d-flex justify-content-between align-items-center price">
                  <div className="">مبلغ</div>
                  <div className="fw-bold">24500000000 تومان</div>
                </div>
              </div>
            </div>
            <div className="action-body d-flex mx-5">
              <img src={test} class="card-img" alt="" />
              <div className="d-flex flex-column action-body-desc w-100 farsi-number">
                <div className="d-flex justify-content-between w-100">
                  <div className="titre">دوره فن بیان در حقوق</div>
                  <div className="">آنلاین</div>
                </div>
                <div className="word-spacing-4 secod-title fw-bold date">
                  <img src={calendar} className="" alt="" />
                  20 تا 24 آذز
                </div>
                <div className="word-spacing-4 secod-title fw-bold time">
                  <img src={clock} className="" alt="" />
                  20:30 تا 21:30
                </div>
                <div className="place">
                  <img src={userSquare} className="" alt="" />
                  موسسه آفرینش
                </div>
                <div className="d-flex justify-content-between align-items-center price">
                  <div className="">مبلغ</div>
                  <div className="fw-bold">24500000000 تومان</div>
                </div>
              </div>
            </div>
            <div className="action-body d-flex mx-5">
              <img src={test} class="card-img" alt="" />
              <div className="d-flex flex-column action-body-desc w-100 farsi-number">
                <div className="d-flex justify-content-between w-100">
                  <div className="titre">دوره فن بیان در حقوق</div>
                  <div className="">آنلاین</div>
                </div>
                <div className="word-spacing-4 secod-title fw-bold date">
                  <img src={calendar} className="" alt="" />
                  20 تا 24 آذز
                </div>
                <div className="word-spacing-4 secod-title fw-bold time">
                  <img src={clock} className="" alt="" />
                  20:30 تا 21:30
                </div>
                <div className="place">
                  <img src={userSquare} className="" alt="" />
                  موسسه آفرینش
                </div>
                <div className="d-flex justify-content-between align-items-center price">
                  <div className="">مبلغ</div>
                  <div className="fw-bold">24500000000 تومان</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default actions;
