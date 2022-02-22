import React, { useState } from "react";

const Pagination = ({ page, total, onPageUpdate}) => {
  return (
    <div className="pagination-container">
      <div className="arrow-left" onClick={() => onPageUpdate(page - 1)}>left</div>
      <span>Page <span className="current-page">{page}</span>{` of ${total}`}</span>
      <div className="arrow-left" onClick={() => onPageUpdate(page + 1)}>right</div>
    </div>
  )
};

export default Pagination;