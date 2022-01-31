import React, { Suspense,lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
const R: React.FC = () => {
  const HomeScreen = lazy(() => import("../Pages/Home"));

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route   path="/Home" caseSensitive={false} element={<HomeScreen />} />
          <Route path="/" caseSensitive={false} element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
export default R;
