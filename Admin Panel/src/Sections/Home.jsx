import React, { useState, useEffect } from "react";
import axios from "axios";
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
  Rectangle,
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from "recharts";

const Home = () => {
  const data2 = [
    {
      subject: 'Data 1',
      A: 120,
      B: 110,
      fullMark: 150,
    },
    {
      subject: 'Data 2',
      A: 98,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Data 3',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Data 4',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Data 5',
      A: 85,
      B: 90,
      fullMark: 150,
    },
    {
      subject: 'Data 6',
      A: 65,
      B: 85,
      fullMark: 150,
    },
  ];
  
  const data = [
    {
      name: "Page A",
      ventes: 4000,
      achats: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      ventes: 3000,
      achats: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      ventes: 2000,
      achats: 1560,
      amt: 2290,
    },
    {
      name: "Page D",
      ventes: 2780,
      achats: 1908,
      amt: 2000,
    },
    {
      name: "Page E",
      ventes: 5890,
      achats: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      ventes: 2390,
      achats: 2800,
      amt: 2500,
    },
    {
      name: "Page G",
      ventes: 3490,
      achats: 4300,
      amt: 2100,
    },
  ];

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalClients, setTotalClients] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/getTotalProducts")
      .then((response) => {
        setTotalProducts(response.data.totalProducts);
      })
      .catch((error) => {
        console.error("Error fetching total products:", error);
      });

    axios
      .get("http://localhost:3001/getTotalClients")
      .then((response) => {
        setTotalClients(response.data.totalClients);
      })
      .catch((error) => {
        console.error("Error fetching total products:", error);
      });
  }, []);

  return (
    <main className="main-container">
      <div className="main-title">
        <h3 className="text-dark">Tableau de bord</h3>
      </div>
      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Produits</h3>
            <BsFillArchiveFill className="card-icon" />
          </div>
          <h1>{totalProducts}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Ventes</h3>
            <BsFillGrid3X3GapFill className="card-icon" />
          </div>
          <h1>23500</h1>
        </div>

        <div className="card">
          <div className="card-inner">
            <h3>Clients</h3>
            <BsPeopleFill className="card-icon" />
          </div>
          <h1>{totalClients}</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Alertes</h3>
            <BsFillBellFill className="card-icon" />
          </div>
          <h1>4</h1>
        </div>
      </div>

      <div className="charts">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar
              dataKey="ventes"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
              dataKey="achats"
              fill="#82ca9d"
              activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="ventes"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="achats" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data2}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>

      </div>
    </main>
  );
};

export default Home;
