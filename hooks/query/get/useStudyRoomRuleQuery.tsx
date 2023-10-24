import { fetchStudyRoomRuleList } from '@api/studyroom';
import { useQuery } from 'react-query';
import { StudyRoomRuleType } from 'types/studyroom';

type useStudyRoomRuleQueryType = {
  isLoading: boolean;
  isError: boolean;
  data: StudyRoomRuleType[] | undefined;
};

const useStudyRoomRuleQuery = (): useStudyRoomRuleQueryType => {
  const { isLoading, isError, data } = useQuery({
    queryKey: 'studyRoomRules',
    queryFn: fetchStudyRoomRuleList,
    retry: 1,
    staleTime: 500000,
    select: (res) => res.data,
  });

  return { data, isLoading, isError };
};

export default useStudyRoomRuleQuery;
