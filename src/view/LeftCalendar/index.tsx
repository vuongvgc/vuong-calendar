import { Button } from "antd";
import DatePicker from "sassy-datepicker";
import moment from "moment";
import React from "react";
import EventItem from "./Components/EventItem";
const LeftCalendar: React.FC = () => {
  const onChange = (date: any) => {
    // console.log(date);
  };

  return (
    <div className="left-calendar-box">
      <DatePicker onChange={onChange} className="calender-item" />
      <div className="event-content-box">
        <div className="event-content-header">
          <h3>Upcoming Events</h3>
          <Button type="primary">View All</Button>
        </div>
        <p className="event-today">
          Today, <span>{moment().format("DD MMM")}</span>
        </p>
        <EventItem />
      </div>
    </div>
  );
};
export default LeftCalendar;
