{
  /**
   * Type Inference
   */
  // 타입을 추론해주지만 왠만하면 타입을 명시해주는 것이 좋다
  let text = 'hello';
  function print(message = 'hello') {
    console.log(message);
  }
  print('hello');

  function add(x: number, y: number): number {
    return x + y;
  }

  const result = add(1, 2);
}
