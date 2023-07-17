import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingUsers = () => {
  return Array(1)
    .fill({})
    .map(() => {
      return (
        <>
          <div className="my-5 mt-4 news center">
            <div className=" mt-4" style={{ width: "65%", height: "500px" }}>
            <Skeleton className="mt-2 mb-3 " height={30} />

              <Skeleton
                className=""
                style={{
                  width: "100%",
                  height: "300px",
                }}
              />
              <Skeleton className="mt-5 " height={30} />
              <Skeleton className="mt-2 mb-3 " height={30} />
            </div>
          </div>
        </>
      );
    });
};

export default LoadingUsers;
