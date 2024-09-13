import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';          
import 'primeicons/primeicons.css';                        


import Header from './component/Header.jsx';
import RiskAssessment from './RiskAssessmentMain.jsx';
import ScenarioPlanning from './ScenarioPlanning.jsx';
import ReportsExports from './ReportsExports.jsx';
import ReservoirStatus from './ReservoirStatus.jsx'
import WaterForecast from './WaterForecast.jsx'
import Home from './Home.jsx';



const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/waterforecast" element={<WaterForecast />} />
        <Route path="/reservoirstatus" element={<ReservoirStatus />} />
        <Route path="/riskassessment" element={<RiskAssessment />} />
        <Route path="/scenarioplanning" element={<ScenarioPlanning />} />
        <Route path="/reports" element={<ReportsExports />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
