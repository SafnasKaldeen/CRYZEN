import React from "react";

const Pagination = ({ pageNum, onPageChange, next }) => {
  const handleNext = () => {
    onPageChange(pageNum + 1);
  };

  const handlePrevious = () => {
    if (pageNum > 1) {
      onPageChange(pageNum - 1);
    }
  };

  return (
    <div className="join pt-5">
      <button
        className="join-item btn"
        onClick={handlePrevious}
        disabled={pageNum === 1}
      >
        «
      </button>
      <button className="join-item btn">Page {pageNum}</button>
      <button className="join-item btn" onClick={handleNext} disabled={!next}>
        »
      </button>
    </div>
  );
};

export default Pagination;
