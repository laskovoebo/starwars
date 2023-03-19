export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: any;
  modalVisible: boolean;
  setModalVisible: (arg: boolean) => void;
}