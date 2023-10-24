import { ModalType } from '@recoil/common/modal/atom';
import { modalSelectorFamily } from '@recoil/common/modal/selector';
import { useRecoilState, useResetRecoilState } from 'recoil';
type useModalType = {
  modal: ModalType;
  openModal: () => void;
  hideModal: () => void;
  closeModal: () => void;
};

const useModal = (modalId: string): useModalType => {
  const [modal, setModal] = useRecoilState(modalSelectorFamily(modalId));
  const resetModal = useResetRecoilState(modalSelectorFamily(modalId));

  const openModal = () => {
    setModal((prev) => ({ ...prev, visible: true }));
  };

  const hideModal = () => {
    setModal((prev) => ({ ...prev, visible: false }));
  };

  const closeModal = () => {
    resetModal();
  };

  return { modal, openModal, hideModal, closeModal };
};

export default useModal;
