import { createPlan } from '@api/plan';
import { createStudyRoom } from '@api/studyroom';
import { studyRoomCreateRequest } from '@recoil/room/atom';
import { useState } from 'react';
import { UseMutateFunction, useMutation, useQueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import APIResponseType from 'types/api';
import { StudyRoomCreateResponseType } from 'types/studyroom';

type useStudyRoomMutaionType = {
  roomId: number | undefined;
  isSuccess: boolean;
  isError: boolean;
  mutate: UseMutateFunction<APIResponseType<StudyRoomCreateResponseType>, unknown, void, unknown>;
};

const useStudyRoomMutation = (): useStudyRoomMutaionType => {
  const [roomId, setRoomId] = useState<number>();
  const request = useRecoilValue(studyRoomCreateRequest);
  const queryClient = useQueryClient();

  const {
    mutate,
    isError: isErrorCreateStudyRoom,
    isSuccess: isSuccessCreateStudyRoom,
  } = useMutation(() => createStudyRoom(request), {
    onSuccess: (res) => {
      const { data } = res;
      queryClient.invalidateQueries(['studyRoomList']);
      setRoomId(data.room_id);
      createLeaderPlan(data.participant_id);
    },
  });

  const {
    mutate: createLeaderPlan,
    isSuccess: isSuccessCreateLeaderPlan,
    isError: isErrorCreateLeaderPlan,
  } = useMutation((participant_id: number) => createPlan(participant_id));

  return {
    roomId,
    isSuccess: isSuccessCreateStudyRoom && isSuccessCreateLeaderPlan,
    isError: isErrorCreateStudyRoom || isErrorCreateLeaderPlan,
    mutate,
  };
};

export default useStudyRoomMutation;
