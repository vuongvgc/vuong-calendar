import React from "react";
import MainCalendar from "../Components/MainCalendar";
import { TitleMobile } from "../Components/MobileTitle";

const CalendarMobile: React.FC = () => {
  return (
    <div className="homepage calendar-mobile">
      <TitleMobile title="Calendar Event" />
      <MainCalendar />
    </div>
  );
};
export default CalendarMobile;
