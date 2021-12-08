import { Button, Col, Row } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import React from "react";
import { IEventItem } from "../interface";
const EventItem: React.FC<IEventItem> = (props) => {
  const { title, start, end, eventType } = props.event;
  const style =
    eventType === 0
      ? { backgroundColor: "#f7d6b8", borderColor: "#0F4C81" }
      : { background: "#F9BE81", borderColor: "#5684AE" };
  return (
    <Row className="event-item-box" justify="space-between" style={style}>
      <Col span={20}>
        <h4>{title}</h4>
        {start ? (
          <p>
            {start} - {end}
          </p>
        ) : (
          <p>All Day</p>
        )}

        {eventType === 0 && (
          <Row className="client-profile" justify="space-between">
            <Col span={4} className="client-img">
              <img
                src="https://scontent.fsgn5-9.fna.fbcdn.net/v/t1.6435-9/194117934_2152399871566823_6625325916512358728_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=82RwkonO9YAAX9aMhAg&tn=6PRv3N1k50JOT3q5&_nc_ht=scontent.fsgn5-9.fna&oh=c6dbe88ba2c6fcc2c6403c79fbb66166&oe=61D35AD9"
                alt="client img"
              />
            </Col>
            <Col span={20}>
              <Button type="link">View client profile</Button>
            </Col>
          </Row>
        )}
      </Col>
      {eventType === 0 && (
        <Col span={4}>
          <VideoCameraOutlined width="2rem" />
        </Col>
      )}
    </Row>
  );
};
export default EventItem;
