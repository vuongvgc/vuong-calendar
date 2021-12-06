import { Button, DatePicker } from "antd";
import moment from "moment";
import React from "react";
import EventItem from "./Components/EventItem";
const LeftCalendar: React.FC = () => {
  const onChange = (date: any, dateString: any) => {
    console.log(date, dateString);
  };
  return (
    <div className="left-calendar-box">
      <DatePicker
        onChange={onChange}
        open={true}
        dropdownClassName="left-calendar-box_item"
      />
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
