import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import ModalInforEvent from "../ModalInforEvent";
import { ModalData } from "../ModalInforEvent/interface";
import data from "../../Model/FakeData/event.json";
import EventEntity from "../../Model/Event/entity";
const MainCalendar: React.FC = () => {
  const [dataCalendar, setDataCalendar] = useState<any>();
  useEffect(() => {
    let newData = EventEntity.createListEventForCalendar(data);
    console.debug("newData", newData);
    setDataCalendar(newData);
  }, []);
  const [modalData, setModalData] = useState<ModalData>({
    isVisible: false,
    data: null,
  });
  const handleDateClick = (arg: any) => {
    // console.debug("arg", arg);
  };

  const renderEventContent = (eventInfo: any) => {
    // console.debug("eventInfo", eventInfo);
    return (
      <div
        className="event-box"
        style={{ borderLeft: `3px solid ${eventInfo.borderColor}` }}
      >
        <Typography.Text
          className="event-title"
          ellipsis={true}
          title={eventInfo.event.title}
        >
          {eventInfo.event.title}
        </Typography.Text>
      </div>
    );
  };
  const handleEvent = (info: EventClickArg) => {
    // console.debug("infor", info);
    if (!info.event.url) {
      setModalData({ isVisible: true, data: info });
    }
  };
  return (
    <div className="main-calendar-box">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        eventSources={dataCalendar}
        dateClick={(arg: any) => handleDateClick(arg)}
        eventContent={renderEventContent}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "myCustomButton",
        }}
        customButtons={{
          myCustomButton: {
            text: "Month",
            click: function () {
              alert("clicked the custom button!");
            },
          },
        }}
        eventClick={(info) => handleEvent(info)}
        dayMaxEvents={true}
        contentHeight="800px"
        viewClassNames="view-box-calendar"
        dayCellClassNames="day-box-calendar"
      />
      <ModalInforEvent data={modalData} setModalData={setModalData} />
    </div>
  );
};
export default MainCalendar;
