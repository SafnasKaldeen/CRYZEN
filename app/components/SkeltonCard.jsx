// SkeletonCard.jsx

import React from "react";

const SkeletonCard = () => (
  <div className="card bg-zinc-900 w-full max-w-xs">
    <div className="skeleton h-40 w-full mb-4 rounded-t-lg content-center justify-center align-middle">
      {/* <img src="/logo.png" className="object-fit w-36" /> */}
    </div>
    <div className="p-4">
      <div className="skeleton h-3 w-3/4 mb-2"></div>
      <div className="skeleton h-2 w-1/2 mb-4"></div>
    </div>
  </div>
);

export default SkeletonCard;
