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
  // π© enumμ νμμ΄ μ ννκ² λ³΄μ₯λμ§ μμΌλ―λ‘ μ°μ§ μλκ² μ’λ€ -> β¨ Unionνμμ μ°λ©΄ μ’μ
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  let dayOfWeek: DaysOfWeek = 'Monday';
  // dayOfWeek = 'yshush' -> μλ¨
}
