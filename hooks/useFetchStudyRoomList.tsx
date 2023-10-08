import { fetchStudyRoomList } from '@api/studyroom';
import { useQuery } from 'react-query';
import { StudyRoomListType } from 'types/studyroom';

type useFetchStudyRoomListType = {
  data: StudyRoomListType[] | undefined;
  isLoading: boolean;
  isError: boolean;
};

const useFetchStudyRoomList = (filter: string): useFetchStudyRoomListType => {
  const { data, isLoading, isError } = useQuery({
    queryKey: 'studyRoomList',
    queryFn: fetchStudyRoomList,
    retry: 1,
    select: (res) => {
      switch (filter) {
        case '전체':
          return res.data;
        case '진행중': {
          return res.data.filter((studyRoom) => {
            // 현재 시각
            const today = new Date();
            const currentTime = today.getTime() - today.getTimezoneOffset() * 60000;
            // 스터디룸 시작일
            const startDate = new Date(studyRoom.start_date);
            // 방 끝나는 요일
            const endDate = new Date(startDate);
            endDate.setDate(startDate.getDate() + 7 * studyRoom.week);

            return currentTime >= startDate.getTime() && currentTime <= endDate.getTime();
          });
        }
        default:
          return res.data;
      }
    },
  });

  return { data, isLoading, isError };
};

export default useFetchStudyRoomList;
