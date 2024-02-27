import React, { useState } from "react";
import { SideBarData } from "../data";
import { BsCart3, BsFeather } from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar() {
  const [active, setActive] = useState("Tableau de bord");
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsFeather color="white" className="icon" />{" "}
          <span
            className="text-white"
          >
            Anima Planet
          </span>
        </div>
        <span className="icon close_icon">X</span>
      </div>

      <ul className="sidebar-list">
        {SideBarData.map((item) => (
          <li
            key={item.id}
            className={`${
              active === item.name
                ? "sidebar-list-item active"
                : "sidebar-list-item"
            }`}
            onClick={() => setActive(item.name)}
          >
            <Link to={item.link}>
              {<item.icon className="icon" />}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
