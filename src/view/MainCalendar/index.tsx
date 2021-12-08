import FullCalendar, { EventClickArg } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import React, { useEffect, useState } from "react";
import { Typography } from "antd";
import ModalInforEvent from "../ModalInforEvent";
import { ModalData } from "../ModalInforEvent/interface";
import data from "../../Model/FakeData/event.json";
import EventEntity from "../../Model/Event/entity";
const MainCalendar: React.FC = () => {
  const [dataCalendar, setDataCalendar] = useState<any>();
  const [modalData, setModalData] = useState<ModalData>({
    isVisible: false,
    data: null,
  });

  useEffect(() => {
    let newData = EventEntity.createListEventForCalendar(data);
    setDataCalendar(newData);
  }, []);

  const renderEventContent = (eventInfo: any) => {
    const style = eventInfo.borderColor && {
      borderLeft: `3px solid ${eventInfo.borderColor}`,
    };
    return (
      <div className="event-box" style={style}>
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
    if (!info.event.url) {
      let dataEvent = {
        id: info?.event.id,
        title: info?.event.title,
        start: info?.event.startStr,
        end: info?.event.endStr,
        location: info?.event.extendedProps?.location,
        description: info?.event.extendedProps?.description,
        eventType: info?.event.extendedProps?.eventType,
      };
      setModalData({ isVisible: true, data: dataEvent });
    }
  };
  return (
    <div className="main-calendar-box">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
        initialView="dayGridMonth"
        eventSources={dataCalendar}
        eventContent={renderEventContent}
        headerToolbar={{
          start: "today prev,next",
          center: "title",
          end: "dayGridMonth timeGridWeek",
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
