type PlanCreateResponseType = {
  start_date: string;
  target_date: string;
  score: number;
  week: number;
  three_day_passed: boolean;
  rejected: boolean;
  user_id: number;
  room_id: number;
};

export { PlanCreateResponseType };
