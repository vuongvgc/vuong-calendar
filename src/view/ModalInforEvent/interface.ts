import { ModalProps } from "antd";
import EventEntity from "../../Model/Event/entity";
export interface ModalData {
  isVisible: boolean;
  data: EventEntity | null;
}
export interface IModal extends ModalProps {
  data: ModalData;
  setModalData: any;
}
