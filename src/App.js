import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Change import from Switch to Routes
import Details from "./Details";
import Home from "./pages/Home";
import Layouts from "./components/Layouts/Layouts";

const App = () => {
  
  return (
    <Router>
      <Routes>
        {" "}
        {/* Replace Switch with Routes */}
        <Route path="/" element={<Layouts />}>
          <Route
            path="/"
            element={
              <Home />
            }
          />
          <Route path="/detail" element={<Details />} />
        </Route>
      </Routes>
    </Router>
  );
};



export default App;
