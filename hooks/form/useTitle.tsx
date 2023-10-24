import { studyRoomCreateRequest } from '@recoil/room/atom';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

type useTitleType = {
  title: string;
  onChangeText: (title: string) => void;
  hasAllInputs: boolean;
};

const useTitle = (): useTitleType => {
  const [request, setRequest] = useRecoilState(studyRoomCreateRequest);
  const [hasAllInputs, setComplete] = useState(false);

  useEffect(() => {
    setComplete(request.title !== '');
  }, [request.title]);

  const onChangeText = useCallback((title: string) => setRequest((prev) => ({ ...prev, title })), [setRequest]);

  return { title: request.title, onChangeText, hasAllInputs };
};

export default useTitle;
