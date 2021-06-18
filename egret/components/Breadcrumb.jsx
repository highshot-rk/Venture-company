import React from "react";

const Breadcrumb = ({ routeSegment }) => {
  return (
    <div className="breadcrumb">
      <div>Admin Panel</div>
      <span>{routeSegment}</span>
    </div>
  );
};

export default Breadcrumb;
