{
  /**
   * Enum
   */
  // Javascript
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';
  enum Days {
    Monday = 1,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  // 💩 enum은 타입이 정확하게 보장되지 않으므로 쓰지 않는게 좋다 -> ✨ Union타입을 쓰면 좋음
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  let dayOfWeek: DaysOfWeek = 'Monday';
  // dayOfWeek = 'yshush' -> 안됨
}
