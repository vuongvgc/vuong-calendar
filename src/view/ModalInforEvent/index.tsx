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
          <span> {data?.event.title}</span>
        </p>
      }
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p className="event-content">
        Date:
        <span>
          {data?.event.endStr
            ? `${data?.event.startStr} - ${data?.event.endStr}`
            : "All day"}
        </span>
      </p>
      <p className="event-content">
        Location: <span>{data?.event.extendedProps?.dataEvent?.location}</span>
      </p>
      <p className="event-content">
        Description:{" "}
        <span>{data?.event.extendedProps?.dataEvent?.description}</span>
      </p>
    </Modal>
  );
};
export default ModalInforEvent;
