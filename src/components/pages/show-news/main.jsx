import React from "react";
// import bannerNews from "../../../public/image/news-banner.png";
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

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const News = () => {
  const { id } = useParams();
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getNews() {
      const response = await axios.get(`http://localhost:8000/api/news/${id}`);
      setTimeout(() => {
        // console.log(response.data);
        setNews(response.data.data);
        setLoading(false);
      }, 1000);
    }
    getNews();
  }, []);

  return (
    <div className=" my-5 news">
      <div className="center">
        <h1>{news.title}</h1>
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
        <div className="mx-100 center">
          <img src={news.cover} alt="" className="top-cover" />
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
          <span className="mx-2 name">
            {
              news.user.name
              
              
            }
          </span>
          <div className="d-flex mt-3">
            <div>
              <i className="demo-icon icon-calendar-2 icon-calendar-date f-16 mx-2" />
              <span className="farsi-number secod-title word-spacing-4">
                {new Date(news.created_at).toLocaleDateString("fa-IR")}
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
      <div className="mx-100 d-flex mb-100">
        <div className="body">
          <div className="d-flex">
            <div className="border-right-titre"></div>
            <div className="">
              <h2 className="min-desc">{news.title}</h2>
            </div>
          </div>
          <div className="mt-50 pl-20">
            <div dangerouslySetInnerHTML={{ __html: news.description }} />
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
