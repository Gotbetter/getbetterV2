import { atomFamily } from 'recoil';

type RefreshAtomsFamilyType = {
  id: string;
  refreshing: boolean;
};

const refreshAtomsFamily = atomFamily<RefreshAtomsFamilyType, string>({
  key: 'refreshAtomsFamily',
  default: (id) => ({
    id,
    refreshing: false,
  }),
});

export { refreshAtomsFamily, RefreshAtomsFamilyType };
