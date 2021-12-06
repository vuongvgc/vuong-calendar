import { Row, Col } from "antd";
import React from "react";
import LeftCalendar from "../LeftCalendar";
import MainCalendar from "../MainCalendar";

const Homepage: React.FC = () => {
  return (
    <Row className="homepage">
      <Col span={6} className="left-calendar__box">
        <LeftCalendar />
      </Col>
      <Col span={14} className="right-calendar__box">
        <MainCalendar />
      </Col>
    </Row>
  );
};
export default Homepage;
