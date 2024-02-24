import React, { useState } from "react";
import { SideBarData } from "../src/data";
import { BsCart3 } from "react-icons/bs";

function Sidebar() {
  const [active, setActive] = useState("Tableau de bord");
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
          <li
            className={`${
              active === item.name
                ? "sidebar-list-item active"
                : "sidebar-list-item"
            }`}
            onClick={() => setActive(item.name)}
          >
            <a href="#">
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
