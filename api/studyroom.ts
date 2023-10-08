import APIResponseType from 'types/api';
import { StudyRoomListType } from 'types/studyroom';

import client from './client';

const fetchStudyRoomList = (): Promise<APIResponseType<StudyRoomListType[]>> => client.get('/rooms');

export { fetchStudyRoomList };
