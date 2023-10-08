import { studyRoomListStatusAtom } from '@recoil/home/atom';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

type useStudyRoomStatusType = {
  status: string;
  onPressStatus: (status: string) => void;
};

const useStudyRoomStatus = (): useStudyRoomStatusType => {
  const [status, setStatus] = useRecoilState(studyRoomListStatusAtom);

  const onPressStatus = useCallback((status: string) => setStatus(status), [setStatus]);

  return { status, onPressStatus };
};

export default useStudyRoomStatus;
