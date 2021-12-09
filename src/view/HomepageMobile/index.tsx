import { ArrowRightOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router";
import LeftCalendar from "../Components/LeftCalendar";
import { TitleMobile } from "../Components/MobileTitle";

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
