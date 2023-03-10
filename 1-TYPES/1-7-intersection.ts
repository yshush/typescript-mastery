{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    core: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work);
  }

  internWork({
    name: 'ellie',
    core: 1,
    employeeId: 123,
    work: () => {},
  });
}
