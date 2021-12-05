import { EventClickArg } from "@fullcalendar/react";
import { ModalProps } from "antd";
export interface ModalData {
  isVisible: boolean;
  data: EventClickArg | null;
}
export interface IModal extends ModalProps {
  data: ModalData;
  setModalData: any;
}
