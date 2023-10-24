import { atom } from 'recoil';

export type StudyRoomCreateRequestType = {
  title: string;
  max_user_num: number;
  start_date: string;
  week: number;
  current_week: number;
  entry_fee: number;
  rule_code: string;
  account: string;
  room_category_code: string;
  description: string;
};

/** 스터디룸 만들기 request */
const studyRoomCreateRequest = atom<StudyRoomCreateRequestType>({
  key: 'studyRoomCreateRequest',
  default: {
    title: '',
    max_user_num: 1,
    start_date: '',
    week: 1,
    current_week: 1,
    entry_fee: 5000,
    rule_code: '',
    account: '',
    room_category_code: '',
    description: '',
  },
});

export { studyRoomCreateRequest };
