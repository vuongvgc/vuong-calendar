import { ArrowLeftOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { useNavigate } from "react-router";
import React, { ReactNode } from "react";
interface ITitle {
  title: string;
  iconRight?: ReactNode;
}
export const TitleMobile: React.FC<ITitle> = (props) => {
  const navigate = useNavigate();
  return (
    <div className="title-mobile">
      <Row justify="space-around" align="middle">
        <Col span={2} className="nav-left">
          <ArrowLeftOutlined color="#ffffff" onClick={() => navigate(-1)} />
        </Col>
        <Col span={20}>
          <h2>{props.title}</h2>
        </Col>
        <Col span={2} className="nav-right">
          {props.iconRight}
        </Col>
      </Row>
    </div>
  );
};
