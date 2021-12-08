import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { IModal } from "./interface";

const ModalInforEvent: React.FC<IModal> = (props) => {
  const { data, isVisible } = props.data;
  useEffect(() => {
    if (isVisible) {
      setIsModalVisible(true);
    }
  }, [isVisible]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleOk = () => {
    setIsModalVisible(false);
    props.setModalData({ isVisible: false, data: null });
  };
  const handleCancel = () => {
    setIsModalVisible(false);
    props.setModalData({ isVisible: false, data: null });
  };
  return (
    <Modal
      title={
        <p className="event-title-modal">
          Event Information:
          <span> {data?.title}</span>
        </p>
      }
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p className="event-content">
        Date:
        <span>{data?.start ? `${data?.start} - ${data?.end}` : "All day"}</span>
      </p>
      <p className="event-content">
        Location: <span>{data?.location}</span>
      </p>
      <p className="event-content">
        Description: <span>{data?.description}</span>
      </p>
    </Modal>
  );
};
export default ModalInforEvent;
