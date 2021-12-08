import { Button } from "antd";
import DatePicker from "sassy-datepicker";
import moment from "moment";
import React, { useEffect, useState } from "react";
import EventItem from "./Components/EventItem";
import EventEntity from "../../Model/Event/entity";
import data from "../../Model/FakeData/event.json";
import { FORMAT_DATE } from "../../Model/Event/contants";
import ModalInforEvent from "../ModalInforEvent";
import { ModalData } from "../ModalInforEvent/interface";

const LeftCalendar: React.FC = () => {
  const [dateChoose, setDateChoose] = useState<string | null>(
    moment().format(FORMAT_DATE)
  );
  const [dataEvent, setDataEvent] = useState<EventEntity[]>();
  const [modalData, setModalData] = useState<ModalData>({
    isVisible: false,
    data: null,
  });
  useEffect(() => {
    let newData = EventEntity.createListEvent(data);
    if (newData && dateChoose) {
      let dataFilter = newData.filter((item: EventEntity) => {
        return [item.date, item.end, item.start].some(
          (it) => it === dateChoose
        );
      });
      setDataEvent(dataFilter);
    } else {
      setDataEvent(newData);
    }
  }, [dateChoose]);

  const onChange = (date: any) => {
    setDateChoose(moment(date).format(FORMAT_DATE));
  };

  return (
    <div className="left-calendar-box">
      <DatePicker onChange={onChange} className="calender-item" />
      <div className="event-content-box">
        <div className="event-content-header">
          <h3>Upcoming Events</h3>
          <Button type="primary" onClick={() => setDateChoose(null)}>
            View All
          </Button>
        </div>
        <p className="event-today">
          Today, <span>{moment().format("DD MMM")}</span>
        </p>
        <div className="event-list-box">
          {dataEvent ? (
            dataEvent.map((item: EventEntity) => {
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setModalData({ isVisible: true, data: item });
                  }}
                >
                  <EventItem event={item} />
                </div>
              );
            })
          ) : (
            <p>No event</p>
          )}
        </div>
      </div>
      <ModalInforEvent data={modalData} setModalData={setModalData} />
    </div>
  );
};
export default LeftCalendar;
