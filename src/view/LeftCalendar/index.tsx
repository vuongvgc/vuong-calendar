import { Button } from "antd";
import DatePicker from "sassy-datepicker";
import moment from "moment";
import React, { useEffect, useState } from "react";
import EventItem from "./Components/EventItem";
import EventEntity from "../../Model/Event/entity";
import data from "../../Model/FakeData/event.json";

const LeftCalendar: React.FC = () => {
  const [dateChoose, setDateChoose] = useState<string>(
    moment().format("YYYY-MM-DD")
  );
  const [dataEvent, setDataEvent] = useState<EventEntity[]>();

  useEffect(() => {
    let newData = EventEntity.createListEvent(data);
    if (newData) {
      let dataFilter = newData.filter((item: EventEntity) => {
        console.debug("item", item.date, item.end, item.start);
        console.debug("dateChoose", dateChoose);
        console.debug(
          "rs",
          [item.date, item.end, item.start].some((it) => it === dateChoose)
        );
        return [item.date, item.end, item.start].some(
          (it) => it === dateChoose
        );
      });
      setDataEvent(dataFilter);
    }
  }, [dateChoose]);
  useEffect(() => {
    console.debug("dataEvent", dataEvent);
  }, [dataEvent]);

  const onChange = (date: any) => {
    setDateChoose(moment(date).format("YYYY-MM-DD"));
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
        <div className="event-list-box">
          {dataEvent
            ? dataEvent.map((item: EventEntity) => {
                return <EventItem event={item} key={item.id} />;
              })
            : "No data"}
        </div>
      </div>
    </div>
  );
};
export default LeftCalendar;
