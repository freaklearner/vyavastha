import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import PartnerList from "../pages/partnerManagement/partnerList";

const RouteManager = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/partner-management" element={<PartnerList />} />
      </Routes>
    </Router>
  );
};

export default RouteManager;
