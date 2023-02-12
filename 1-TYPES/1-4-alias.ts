{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'yshush';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'yshush',
    age: 20,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let yshushName: Name;
  yshushName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
}
