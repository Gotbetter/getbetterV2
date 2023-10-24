import { StudyRoomCreateRequestType } from '@recoil/room/atom';
import APIResponseType from 'types/api';
import { StudyRoomCreateResponseType, StudyRoomListType, StudyRoomRuleType } from 'types/studyroom';

import client from './client';

const fetchStudyRoomList = (): Promise<APIResponseType<StudyRoomListType[]>> => client.get('/rooms');

const fetchStudyRoomRuleList = (): Promise<APIResponseType<StudyRoomRuleType[]>> => client.get('/common/rules');

const createStudyRoom = (request: StudyRoomCreateRequestType): Promise<APIResponseType<StudyRoomCreateResponseType>> =>
  client.post('/rooms', request);

export { createStudyRoom, fetchStudyRoomList, fetchStudyRoomRuleList };
