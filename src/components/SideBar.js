import React from "react";
import './SideBar.css';

const SideBar = ({ title }) => {
  return (
    <div className='sidebar'>
      <h1>{title}</h1>
    </div>
  );
};

export default SideBar;
