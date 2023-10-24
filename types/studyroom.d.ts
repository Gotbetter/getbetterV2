type StudyRoomListType = {
  room_id: number;
  title: string;
  description: string;
  week: number;
  room_category: string;
  start_date: string;
  entry_fee: number;
  max_user_num: number;
  current_user_num: number;
};

type StudyRoomDetailsType = {
  room_id: number;
  title: string;
  description: string;
  week: number;
  room_category: string;
  start_date: string;
  entry_fee: number;
  max_user_num: number;
  current_user_num: number;
};

type StudyRoomCreateResponseType = StudyRoomDetailsType & {
  participant_id: number;
};

type StudyRoomRuleType = {
  order: number;
  rule_attribute1: string;
  rule_attribute2: string;
  rule_code: string;
  rule_description: string;
};

export { StudyRoomListType, StudyRoomRuleType, StudyRoomDetailsType, StudyRoomCreateResponseType };
