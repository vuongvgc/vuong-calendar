import moment from "moment";
import { FORMAT_DATE } from "./contants";

class EventEntity {
  id: string | undefined;
  title: string | undefined;
  description?: string | undefined;
  location?: string | undefined;
  eventType: number | undefined;
  url?: string;
  date?: string;
  start?: string;
  end?: string;
  constructor(event: any) {
    if (!event) return;
    Object.assign(this, event);
    this.start = event.start
      ? moment(event.start).format(FORMAT_DATE)
      : undefined;
    this.end = event.end ? moment(event.end).format(FORMAT_DATE) : undefined;
    this.date = event.date ? moment(event.date).format(FORMAT_DATE) : undefined;
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
    let createEventList = EventEntity.createListEvent(listEvent);
    createEventList.forEach((item: any) => {
      Object.keys(item).forEach(
        (key) => item[key] === undefined && delete item[key]
      );
    });
    let eventNormal = createEventList.filter(
      (item: EventEntity) => item.eventType === 0
    );
    let eventWebinar = createEventList.filter(
      (item: EventEntity) => item.eventType === 1
    );
    console.debug("eventNormal", eventNormal, eventWebinar);
    let newEventArray = [
      {
        events: eventNormal,
        textColor: "#5684AE",
        backgroundColor: "#f7d6b8",
        borderColor: "#0F4C81",
        eventType: 0,
      },
      {
        events: eventWebinar,
        color: "#F9BE81",
        textColor: "#5684AE",
        borderColor: "#5684AE",
        eventType: 1,
      },
    ];
    return newEventArray;
  }
}
export default EventEntity;
