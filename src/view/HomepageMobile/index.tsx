import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import LeftCalendar from "../LeftCalendar";
import { TitleMobile } from "../MobileTitle";
import { useNavigate } from "react-router";

const HomepageMobile: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage homepage-mobile">
      <TitleMobile
        title="Home Event"
        iconRight={<ArrowRightOutlined onClick={() => navigate("/calendar")} />}
      />
      <LeftCalendar />
    </div>
  );
};
export default HomepageMobile;
