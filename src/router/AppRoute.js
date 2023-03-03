import React from "react";
import HomePage from "../pages/HomePage"
import FalconePage from "../pages/FalconePage"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFoundPage from "../pages/404";
function AppRoute() {
    return (
        <Router>
          <Routes>
            <Route exact path="/" element={<FalconePage/>}/>
            <Route exact path="/home" element={<HomePage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
      </Router>
    );
}
export default AppRoute;