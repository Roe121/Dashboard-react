import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Home from "./Sections/Home";
import Products from "./Sections/Products";
import Clients from "./Sections/Clients";
import Categoris from "./Sections/Categoris";

import CreateProduct from "./Components/Products/CreateProduct";

function App() {
  return (
    <div className="grid-container">
      <Router>
        <Header />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Clients" element={<Clients />} />
          <Route path="/Categoris" element={<Categoris />} />

           
          <Route path='/createProduct' element={<CreateProduct />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
