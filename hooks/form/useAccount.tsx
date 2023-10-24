import { studyRoomCreateRequest } from '@recoil/room/atom';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

type useAccountType = {
  account: string;
  onChangeText: (account: string) => void;
  hasAllInputs: boolean;
};
const useAccount = (): useAccountType => {
  const [request, setRequest] = useRecoilState(studyRoomCreateRequest);
  const [hasAllInputs, setComplete] = useState(false);

  useEffect(() => {
    setComplete(request.account !== '');
  }, [request.account]);

  const onChangeText = useCallback((account: string) => setRequest((prev) => ({ ...prev, account })), [setRequest]);

  return { account: request.account, onChangeText, hasAllInputs };
};

export default useAccount;
