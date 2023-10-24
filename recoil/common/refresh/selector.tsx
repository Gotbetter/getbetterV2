import { DefaultValue, selectorFamily } from 'recoil';

import { RefreshAtomsFamilyType, refreshAtomsFamily } from './atom';

/**
 * @param {refreshId} : 새로고침 기능을 관리하려는 화면의 id
 * 넘겨 받은 refreshId를 저장하는 atom family를 생성하고 refreshIds atom에 등록
 */
const refreshSelectorFamily = selectorFamily<RefreshAtomsFamilyType, string>({
  key: 'modalSelectorFamily',
  get:
    (refreshId) =>
    ({ get }) =>
      get(refreshAtomsFamily(refreshId)),

  set:
    (refreshId) =>
    ({ get, set, reset }, refresh) => {
      if (refresh instanceof DefaultValue) {
        reset(refreshAtomsFamily(refreshId));
        return;
      }

      set(refreshAtomsFamily(refreshId), refresh);
    },
});

export { refreshSelectorFamily };