import React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateReportPage from "./pages/CreateReportPage";
import ReportsMapPage from "./pages/ReportsMapPage";
import Home from "./pages/Home";

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-report" element={<CreateReportPage />} />
            <Route path="/reports-map" element={<ReportsMapPage />} />
        </Routes>
    </Router>
);

export default App;
