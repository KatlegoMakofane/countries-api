import './App.css';
import { Routes, Route } from "react-router-dom";

import AllCountries from "../src/components/AllCountries/AllCountries";
import CountryInfo from "../src/components/CountryInfo/CountryInfo"
function App() {
  return (
    <>
    <div className="header">
      <div className="container">
        <h5>Where in the world</h5>
      </div>
        
    </div>
    <div className="container">
      <Routes>
        <Route path="/" element={<AllCountries />} />
        <Route path="/country/:countryName" element={<CountryInfo />} />
      </Routes>
      <span>Created by @Katlego Makofane</span>
    </div>
  </>
  );
}

export default App;
