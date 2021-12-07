import moment from "moment";

class EventEntity {
  id: string | undefined;
  title: string | undefined;
  description?: string | undefined;
  eventType: string | undefined;
  url?: string;
  date?: string;
  start?: string;
  end?: string;
  startTime?: string;
  endTime?: string;
  constructor(event: any) {
    if (!event) return;
    Object.assign(this, event);
    this.start = event.createdAt
      ? moment(event.start).format("YYYY-MM-DD")
      : "";
    this.end = event.end ? moment(event.end).format("YYYY-MM-DD") : "";
    this.date = event.date ? moment(event.date).format("YYYY-MM-DD") : "";
    this.startTime = event.startTime
      ? moment(event.startTime).format("HH:MM:SS")
      : "";
    this.endTime = event.endTime
      ? moment(event.endTime).format("HH:MM:SS")
      : "";
  }
  static createListEvent(listEvent: Array<any>) {
    if (!Array.isArray(listEvent)) return [];
    return listEvent.map((event: EventEntity) => {
      return new EventEntity(event);
    });
  }
  static createListEventForCalendar(listEvent: Array<any>) {
    if (!Array.isArray(listEvent)) return [];
    console.debug("list", listEvent);
    let eventNormal = listEvent.filter(
      (item: EventEntity) => item.eventType === "0"
    );

    let eventWebinar = listEvent.filter(
      (item: EventEntity) => item.eventType === "1"
    );
    console.debug("eventNormal", eventNormal, eventWebinar);
    let newEventArray = [
      {
        events: EventEntity.createListEvent(eventNormal),
        textColor: "#5684AE",
        backgroundColor: "#f7d6b8",
        borderColor: "#0F4C81",
        eventType: 0,
      },
      {
        events: EventEntity.createListEvent(eventWebinar),
        color: "#F9BE81", // an option!
        textColor: "#5684AE", // an option!
        borderColor: "#5684AE",
        eventType: 1,
      },
    ];
    return newEventArray;
  }
}
export default EventEntity;
