import { Route, Routes } from "react-router";
import LandingView from "./views/LandingView";
import { RoutesPatterns } from "./constants/routes";
import ResumeView from "./views/ResumeView";
import React from "react";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path={RoutesPatterns.HOME} element={<LandingView />} exact />
      <Route path={RoutesPatterns.RESUME} element={<ResumeView />} exact />
    </Routes>
  );
};

export default RoutesManager;
