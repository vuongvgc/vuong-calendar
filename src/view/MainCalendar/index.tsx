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
  let eventData = [
    {
      events: [
        {
          title: "First section with Alex Stone",
          date: "2022-01-01",
          url: "",
          id: "1",
        },
        {
          id: "2",
          title: "Watch Football Mu-Chelsea",
          url: "https://www.google.com/",
          date: "2022-01-01",
        },
        {
          id: "3",
          title: "Go to Ho Chi Minh City",
          url: "",
          date: "2021-12-12",
        },
        {
          id: "4",
          title: "See Movie",
          url: "",
          date: "2021-12-1",
        },
        {
          id: "11",
          title: "Go to market",
          date: "2021-12-12",
          dataEvent: {
            location: "Coop mart Long An",
            description: "Go with family",
          },
        },
      ],
      textColor: "#5684AE",
      backgroundColor: "#f7d6b8",
      borderColor: "#0F4C81",
    },
    {
      events: [
        {
          id: "5",
          title: "Party with friend",
          start: "2021-12-01",
        },
        {
          id: "6",
          title: "Go business trip",
          start: "2021-12-05",
          end: "2021-12-15",
        },
        {
          id: "7",
          title: "Birthday's Girl Friend",
          date: "2021-12-12",
        },
        {
          id: "8",
          title: "Buy birthday gift",
          date: "2021-12-11",
        },
        {
          id: "9",
          title: "Go to the restaurant",
          date: "2021-12-11",
          description: "Go with Girl friend",
        },
      ],
      color: "#F9BE81", // an option!
      textColor: "#5684AE", // an option!
      borderColor: "#5684AE",
    },
  ];
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
