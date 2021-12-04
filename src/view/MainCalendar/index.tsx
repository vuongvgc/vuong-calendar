import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import React from "react";

const MainCalendar: React.FC = () => {
  const handleDateClick = (arg: any) => {
    console.debug("arg", arg);
  };
  const renderEventContent = (eventInfo: any) => {
    console.debug("eventInfo", eventInfo);
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: "event 1", date: "2021-12-01" },
        { title: "event 2", date: "2021-12-02" },
      ]}
      dateClick={(arg: any) => handleDateClick(arg)}
      eventContent={renderEventContent}
    />
  );
};
export default MainCalendar;
