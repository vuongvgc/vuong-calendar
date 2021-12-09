import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./style/index.scss";
import Homepage from "./Homepage";
import HomepageMobile from "./HomepageMobile";
import CalendarMobile from "./CalendarMobile";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/mobile" element={<HomepageMobile />} />
        <Route path="/calendar" element={<CalendarMobile />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
