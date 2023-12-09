import React, { useState } from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import myphoto from './ProfilePhoto.jpg'


export default function Sidebar() {
  const [activeItem, setActiveItem] = useState(0);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const isActive = (index) => {
    return index === activeItem ? "active" : "";
  };

  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
      <div className="profile">
        <img 
        alt="profile"
        src={myphoto}
        style={{ width: '60px', height: '60px' }}
        />
        <div className="credentials">
          <h4 id="name">Hari <span>Krishnan</span></h4>
          <p id="email">harikrishnan2285@gmail.com</p>
        </div>
      </div>
      <ul className="nav flex-column mb-auto">
        <li className={`nav-item ${isActive(0)}`}>
          <i className="fa fa-home" aria-hidden="true"></i>
          <Link to={'/'} onClick={() => handleItemClick(0)}>Home</Link>
        </li>
        <li className={`nav-item ${isActive(1)}`}>
          <i className="fa fa-search" aria-hidden="true"></i>
          <Link to={'/search'} onClick={() => handleItemClick(1)}>Search</Link>
        </li>
        <li className={`nav-item ${isActive(2)}`}>
          <i className="fa fa-file-text-o" aria-hidden="true"></i>
          <Link to={'/noteslayout'} onClick={() => handleItemClick(2)}>Notes</Link>
        </li>
        <li className={`nav-item ${isActive(3)}`}>
          <i className="fa fa-check-circle-o" aria-hidden="true"></i>
          <Link to={'/tasklayout'} onClick={() => handleItemClick(3)}>Tasks</Link>
        </li>
        <li className={`nav-item ${isActive(4)}`}>
          <i className="fa fa-archive" aria-hidden="true"></i>
          <Link to={'/archive'} onClick={() => handleItemClick(4)}>Arrchive</Link>
        </li>
        <li className={`nav-item ${isActive(5)}`}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
          <Link to={'/trash'} onClick={() => handleItemClick(5)}>Bin</Link>
        </li>
      </ul>
    </div>
  );
}
