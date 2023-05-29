import { Layout, Space, Typography } from "antd";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CryptoCurrencies from "./pages/CryptoCurrencies";
import CryptoDetails from "./pages/CryptoDetails";
import News from "./pages/News";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies simplified={false}/>} />
              <Route path="/crypto/:id" element={<CryptoDetails />} />
              <Route path="/news" element={<News simplified={false}/>} />
            </Routes>
          </div>
        </Layout>
        <div className="footer">
          <Typography.Title
            level={5}
            style={{ color: "white", textAlign: "center" }}
          >
            Copyright © 2023
            <Link to="/">CryptoApp Inc.</Link> <br />
            All Rights Reserved.
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
