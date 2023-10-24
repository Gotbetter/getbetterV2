import { atom, atomFamily } from 'recoil';

export type ModalType = {
  id: string;
  visible: boolean;
};

/** 모달 생성 Atom Family */
const modalsAtomFamily = atomFamily<ModalType, string>({
  key: 'modalsAtomFamily',
  default: (id) => ({
    id,
    visible: false,
  }),
});

/** 생성된 modal 들을 저장할 atom */
const modalIdsAtom = atom<string[]>({
  key: 'modalIdsAtom',
  default: [],
});

export { modalsAtomFamily, modalIdsAtom };
