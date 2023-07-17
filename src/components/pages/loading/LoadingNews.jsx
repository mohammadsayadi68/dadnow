import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingUsers = () => {
  return Array(6)
    .fill({})
    .map(() => {
      return (
        <div className="col-4">
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

export default LoadingUsers;
