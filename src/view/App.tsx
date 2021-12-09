import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "antd/dist/antd.css";
import "./style/index.scss";
import Homepage from "./Homepage";
import HomepageMobile from "./HomepageMobile";
import CalendarMobile from "./CalendarMobile";

const App: React.FC = () => {
  const deviceType = (): "mobile" | "desktop" | "tablet" => {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
    } else if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      )
    ) {
      return "mobile";
    }
    return "desktop";
  };

  return (
    <BrowserRouter>
      <Routes>
        {deviceType() === "mobile" && (
          <>
            <Route path="/" element={<HomepageMobile />} />
            <Route path="/calendar" element={<CalendarMobile />} />
          </>
        )}
        {deviceType() === "desktop" && (
          <Route path="/" element={<Homepage />} />
        )}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
