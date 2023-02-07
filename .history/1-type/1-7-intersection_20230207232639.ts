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
}
