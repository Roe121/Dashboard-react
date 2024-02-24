import React from "react";
import { SideBarData } from "../src/data";
import {BsCart3} from 'react-icons/bs'

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsCart3 className="icon" /> SHOP
        </div>
        <span className="icon close_icon">X</span>
      </div>

      <ul className="sidebar-list">
        {SideBarData.map((item) => (
          <li className="sidebar-list-item">
            <a href="">
              {<item.icon className="icon" />}
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
