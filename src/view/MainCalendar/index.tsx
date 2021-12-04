import FullCalendar, {
  EventClickArg,
  EventHoveringArg,
} from "@fullcalendar/react";
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
  let eventData = [
    {
      events: [
        {
          title: "event1",
          date: "2022-01-01",
          dataEvent: {
            location: "New York",
            user: "Victor",
            note: "Play game",
          },
        },
        {
          title: "event2",
          date: "2022-01-01",
          dataEvent: {
            location: "New York",
            user: "Victor",
            note: "Play game",
          },
        },
        {
          title: "event3",
          date: "2022-01-01",
          dataEvent: {
            location: "New York",
            user: "Victor",
            note: "Play game",
          },
        },
        {
          title: "event2",
          date: "2022-01-05",
        },
        {
          title: "event3",
          date: "2022-01-05",
        },
      ],
      color: "#5684AE;",
      textColor: "#000000;",
    },
    {
      events: [
        {
          title: "event1",
          start: "2021-01-01",
        },
        {
          title: "event2",
          start: "2021-12-05",
          end: "2021-12-07",
        },
        {
          title: "event3",
          date: "2021-12-09",
        },
      ],
      color: "#F9BE81", // an option!
      textColor: "#0F4C81", // an option!
    },
  ];
  const handleEvent = (info: EventClickArg) => {
    console.debug("infor", info);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      eventSources={eventData}
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
      eventMouseEnter={(info: EventHoveringArg) => console.debug("hover", info)}
      dayMaxEvents={true}
    />
  );
};
export default MainCalendar;
