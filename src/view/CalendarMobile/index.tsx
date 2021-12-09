import React from "react";
import { TitleMobile } from "../MobileTitle";
import MainCalendar from "../MainCalendar";

const CalendarMobile: React.FC = () => {
  return (
    <div className="homepage calendar-mobile">
      <TitleMobile title="Calendar Event" />
      <MainCalendar />
    </div>
  );
};
export default CalendarMobile;
