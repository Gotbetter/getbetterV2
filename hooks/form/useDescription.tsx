import { studyRoomCreateRequest } from '@recoil/room/atom';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

type useDescriptionType = {
  description: string;
  onChangeText: (title: string) => void;
  hasAllInputs: boolean;
};

const useDescription = (): useDescriptionType => {
  const [request, setRequest] = useRecoilState(studyRoomCreateRequest);
  const [hasAllInputs, setComplete] = useState(false);

  useEffect(() => {
    setComplete(request.description !== '');
  }, [request.description]);

  const onChangeText = useCallback(
    (description: string) => setRequest((prev) => ({ ...prev, description })),
    [setRequest],
  );

  return { description: request.description, onChangeText, hasAllInputs };
};

export default useDescription;
