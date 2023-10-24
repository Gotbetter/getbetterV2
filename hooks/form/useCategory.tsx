import { studyRoomCreateRequest } from '@recoil/room/atom';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

type useCategoryType = {
  category: string;
  onPress: (category: string) => void;
  hasAllInputs: boolean;
};

const useCategory = (): useCategoryType => {
  const [request, setRequest] = useRecoilState(studyRoomCreateRequest);
  const [hasAllInputs, setComplete] = useState(false);

  useEffect(() => {
    setComplete(request.room_category_code !== '');
  }, [request.room_category_code]);

  const onPress = useCallback(
    (category: string) =>
      setRequest((prev) => ({
        ...request,
        room_category_code: prev.room_category_code !== category ? category : '',
      })),
    [request, setRequest],
  );

  return { category: request.room_category_code, onPress, hasAllInputs };
};

export default useCategory;
