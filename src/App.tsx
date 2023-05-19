import { Layout } from "antd";
import Navbar from "./components/Navbar";
import  HomePage  from "./pages/HomePage";
import Exchanges  from "./pages/Exchanges";
import  CryptoCurrencies  from "./pages/CryptoCurrencies";
import  CryptoDetails  from "./pages/CryptoDetails";
import News  from "./pages/News";
import { Route, Router, Routes } from "react-router-dom";

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
              <Route path="/exchanges" element={<Exchanges />} />
              <Route path="/cryptocurrencies" element={<CryptoCurrencies />} />
              <Route path="/crypto/:id" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
