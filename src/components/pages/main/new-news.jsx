import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import {Link} from 'react-router-dom'

// import testImg from "../../../public/image/news-test.jpg";
import userIcon from "../../../public/image/user.jpeg";
import circle from "../../../public/image/circle-yelow.svg";
import triangleVector from "../../../public/image/triangle-vector.svg";
import doteGroup from "../../../public/image/footer-dote-group.svg";

const News = () => {
  const [items, setItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const regex = /(<([^>]+)>)/gi;
  useEffect(() => {
    async function getData() {
      const response = await axios.get("http://localhost:8000/api/news");

      setTimeout(() => {
        setItem(response.data.data);
        setIsLoading(false);
      }, 1000);
    }
    getData();
  }, []);

  return (
    <div className="mx-100 new-news mt-5">
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
          {items.map((item) => {
            return (
              <div className="col-md-4 news" key={item.id}>
                <div className="card">
                <Link to={`/news/${item.id}`}>
                  <img src={item.cover} className="card-img-top" alt="" />
                  </Link>

                  <div className="card-mark center">
                    <i className="demo-icon icon-bookmark-empty" />
                    {/* <i className="demo-icon icon-bookmark" /> */}
                  </div>
                  <div className="card-body">
                    

                    <Link to={`/news/${item.id}`}>
                    <div className="card-body-title">{item.title}
                    
                    </div>
                    </Link>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="">
                        <img src={userIcon} alt="" />
                        <span className="mx-2 gray-title">
                          {item.user.name}
                        </span>
                      </div>
                      <div>
                        <i className="demo-icon icon-calendar-2 icon-calendar-date mx-2" />
                        <span className="farsi-number secod-title word-spacing-4">
                          {/* 20 آذر 1401 */}
                          {new Date(item.created_at).toLocaleDateString('fa-IR')}
                        </span>
                      </div>
                    </div>
                    <p className="card-text mt-2">
                      {/* <div dangerouslySetInnerHTML={{ __html:item.description}} /> */}

                      {item.description.replace(regex, "").substring(0, 200)}
                    </p>
                  </div>
                  <span className="card-tags">تکنولوژی و فناوری</span>
                </div>
              </div>
            );
          })}
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
export default News;
