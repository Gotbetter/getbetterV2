import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { studyRoomCreateRequest } from '@recoil/room/atom';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRecoilState } from 'recoil';

type useDetailInformationType = {
  startDate: string;
  week: number;
  maxUserNum: number;
  peopleLimits: number[];
  entryFee: number;
  entryFeeList: { label: string; value: number; key: number }[];
  weekList: { label: string; value: number; key: number }[];
  today: Date;
  hasAllInputs: boolean;
  isCalendarOpen: boolean;
  openCalendar: () => void;
  handleDetailInformation: (value: string | number, key: 'max_user_num' | 'week' | 'entry_fee') => void;
  handleCalendar: (e: DateTimePickerEvent, date: Date | undefined) => void;
};

const useDetailInformation = (): useDetailInformationType => {
  const [request, setRequest] = useRecoilState(studyRoomCreateRequest);
  const [hasAllInputs, setComplete] = useState(false);
  const [isCalendarOpen, setCalendarOpen] = useState(false);

  const peopleLimits = useMemo(() => [1, 2, 3, 4, 5, 6, 7, 8], []);
  const today = useMemo(() => new Date(), []);
  /** 참가비 리스트 **/
  const entryFeeList = useMemo(() => {
    const ENTRY_FEE_NUM = 20;
    const items = [];
    for (let i = 1; i <= ENTRY_FEE_NUM; i++) {
      items.push({ label: (i * 5000).toLocaleString('ko-KR') + '원', value: i * 5000, key: i });
    }
    return items;
  }, []);

  /** 주차 리스트 **/
  const weekList = useMemo(() => {
    const MAX_WEEK_COUNT = 47;
    const items = [];
    for (let i = 1; i <= MAX_WEEK_COUNT; i++) {
      items.push({ label: i + '주', value: i, key: i });
    }
    return items;
  }, []);

  const handleDetailInformation = useCallback(
    (value: string | number, key: string) =>
      setRequest((prev) => ({
        ...prev,
        [key]: value,
      })),
    [setRequest],
  );

  const handleCalendar = useCallback(
    (e: DateTimePickerEvent, date: Date | undefined) => {
      setCalendarOpen(false);
      const { type } = e;

      switch (type) {
        case 'set':
          setRequest((prev) => ({
            ...prev,
            start_date: `${date?.getFullYear()}-${('00' + (date?.getMonth() + 1)).slice(-2)}-${(
              '00' + date?.getDate()
            ).slice(-2)}`,
          }));
          break;
        default:
          break;
      }
    },
    [setRequest],
  );

  useEffect(() => {
    setComplete(request.start_date !== '');
  }, [request.start_date]);

  return {
    startDate: request.start_date,
    week: request.week,
    maxUserNum: request.max_user_num,
    entryFee: request.entry_fee,
    peopleLimits,
    entryFeeList,
    weekList,
    today,
    hasAllInputs,
    isCalendarOpen,
    openCalendar: () => setCalendarOpen(true),
    handleDetailInformation,
    handleCalendar,
  };
};

export default useDetailInformation;
