import { Route, Routes } from "react-router";
import LandingPage from "./LandingPage";

const RoutesManager = () => {
  return (
    <Routes>
      <Route path={"/"} element={<LandingPage />} exact />
    </Routes>
  );
};

export default RoutesManager;
