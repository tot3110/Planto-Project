import React from "react"; // Don't put `{ React }`, just `React`
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Signup from './page/Signup';
import Dashboard from "./page/Dashboard";
import AddPlants from "./page/AddPlants";
import Users from "./page/Users";
import Transfers from "./page/Transfers";
import Analytics from "./page/Analytics";
import Savings from "./page/Savings";
import Records from "./page/Records";
import History from "./page/History";
import Settings from "./page/Settings";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addplants" element={<AddPlants />} />
        <Route path="/users" element={<Users />} />
        <Route path="/transfers" element={<Transfers />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/records" element={<Records />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;

