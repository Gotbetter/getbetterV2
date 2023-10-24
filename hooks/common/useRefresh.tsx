import { RefreshAtomsFamilyType } from '@recoil/common/refresh/atom';
import { refreshSelectorFamily } from '@recoil/common/refresh/selector';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

type useRefreshType = {
  refresh: RefreshAtomsFamilyType;
  onRefresh: () => void;
};

const useRefresh = (refreshId: string): useRefreshType => {
  const [refresh, setRefresh] = useRecoilState(refreshSelectorFamily(refreshId));

  /** 새로고침 */
  const onRefresh = useCallback(() => {
    setRefresh((prev) => ({ ...prev, refreshing: true }));
    setTimeout(() => {
      setRefresh((prev) => ({ ...prev, refreshing: false }));
    }, 1000);
  }, [setRefresh]);

  return { refresh, onRefresh };
};

export default useRefresh;
