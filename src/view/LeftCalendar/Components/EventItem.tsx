import { Button, Col, Row } from "antd";
import { VideoCameraOutlined } from "@ant-design/icons";
import React from "react";
const EventItem: React.FC = () => {
  return (
    <Row className="event-item-box" justify="space-between">
      <Col span={20}>
        <h4>First section with Alex stan</h4>
        <p>9:30AM - 10:30A GMT+8</p>
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
      </Col>
      <Col span={4}>
        <VideoCameraOutlined width="2rem" />
      </Col>
    </Row>
  );
};
export default EventItem;
