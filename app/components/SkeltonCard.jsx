import React from "react";

const SkeletonCard = () => (
  <div className="card glass w-80 h-auto p-4">
    <img className="skeleton h-60 w-full mb-4 rounded-t-lg" src="/logo.png" />
    <div className="skeleton h-3 w-3/4 mb-2"></div>
    <div className="skeleton h-2 w-1/2 mb-4"></div>
  </div>
);

export default SkeletonCard;
