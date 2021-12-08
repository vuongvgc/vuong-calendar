import { Row, Col } from "antd";
import React from "react";
import LeftCalendar from "../LeftCalendar";
import MainCalendar from "../MainCalendar";

const Homepage: React.FC = () => {
  return (
    <Row className="homepage" justify="center" align="bottom">
      <Col xs={22} md={7} lg={7} className="left-calendar__box">
        <LeftCalendar />
      </Col>
      <Col xs={22} md={14} lg={14} className="right-calendar__box">
        <MainCalendar />
      </Col>
    </Row>
  );
};
export default Homepage;
