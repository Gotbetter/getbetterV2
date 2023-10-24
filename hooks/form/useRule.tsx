import { studyRoomCreateRequest } from '@recoil/room/atom';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

type useRuleType = {
  rule: string;
  selectRule: (title: string, index: number) => void;
  hasAllInputs: boolean;
  selectedIndex: number | null;
};
const useRule = (): useRuleType => {
  const [request, setRequest] = useRecoilState(studyRoomCreateRequest);
  const [hasAllInputs, setComplete] = useState(false);
  const [selectedIndex, setIndex] = useState<number | null>(null);

  useEffect(() => {
    setComplete(request.rule_code !== '');
  }, [request.rule_code]);

  const selectRule = useCallback(
    (rule: string, index: number) => {
      setIndex((prev) => (index === prev ? null : index));
      setRequest((prev) => ({ ...prev, rule_code: prev.rule_code === rule ? '' : rule }));
    },
    [setRequest],
  );

  return { rule: request.rule_code, selectRule, hasAllInputs, selectedIndex };
};

export default useRule;
