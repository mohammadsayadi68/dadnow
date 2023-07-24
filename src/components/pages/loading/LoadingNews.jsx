import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingNews = () => {
  return Array(3)
    .fill({})
    .map((item,index) => {
      return (
        <div className="col-md-4" key={index}>
          <div className="card mt-4" >
          {/* style={{ width: "18rem" }} */}
            <Skeleton   style={{
                width: '100%',
                height:'250px'
            }}/>
            <Skeleton className="mt-5 "  height={30} />
            <Skeleton className="mt-2 mb-3 " height={30} />
          </div>
        </div>
      );
    });
};

export default LoadingNews ;
