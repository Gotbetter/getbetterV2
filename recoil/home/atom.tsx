import { atom } from 'recoil';

const studyRoomListStatusAtom = atom<string>({
  key: 'studyRoomFilterAtom',
  default: '전체',
});

export { studyRoomListStatusAtom };
