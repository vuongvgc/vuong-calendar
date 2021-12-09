import { Button, Col, Row } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import React from "react";
import { IEventItem } from "../interface";
import { EVENT_TYPE } from "../../../../Model/Event/contants";
const EventItem: React.FC<IEventItem> = (props) => {
  const { title, start, end, eventType } = props.event;
  const style =
    eventType === 0
      ? { backgroundColor: "#f7d6b8", borderColor: "#0F4C81" }
      : { background: "#F9BE81", borderColor: "#5684AE" };
  return (
    <Row className="event-item-box" justify="space-between" style={style}>
      <Col span={20}>
        <h4>
          <span>{eventType === EVENT_TYPE.EVENT && "Webinar: "}</span>
          {title}
        </h4>
        {start ? (
          <p>
            {start} - {end}
          </p>
        ) : (
          <p>All Day</p>
        )}

        {eventType === EVENT_TYPE.APPOINTMENT && (
          <Row className="client-profile" justify="space-between">
            <Col span={4} className="client-img">
              <img src="https://picsum.photos/200" alt="client img" />
            </Col>
            <Col span={20}>
              <Button type="link" onClick={(e) => e.stopPropagation()}>
                <a
                  href="https://www.facebook.com/vuongvgc/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View client profile
                </a>
              </Button>
            </Col>
          </Row>
        )}
      </Col>
      {eventType === EVENT_TYPE.APPOINTMENT && (
        <Col span={4}>
          <VideoCameraOutlined width="2rem" />
        </Col>
      )}
    </Row>
  );
};
export default EventItem;
