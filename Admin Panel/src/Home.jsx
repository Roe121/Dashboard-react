import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";


const Home = () => {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>Tableau de bord</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Produits</h3>
            <BsFillArchiveFill className="card-icon" />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Categories</h3>
            <BsFillGrid3X3GapFill className="card-icon" />
          </div>
          <h1>23</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Clients</h3>
            <BsPeopleFill className="card-icon" />
          </div>
          <h1>35</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Alerts</h3>
            <BsFillBellFill className="card-icon" />
          </div>
          <h1>4</h1>
        </div>
      </div>
    </main>
  );
};

export default Home;
