import operate from '../operate';

describe('Check calculator operations are as expected', () => {
  test('sum', () => {
    expect(operate(10, 4, '+')).toEqual('14');
  });
  test('substract', () => {
    expect(operate(18, 6, '-')).toEqual('12');
  }); test('multiply', () => {
    expect(operate(5, 3, 'x')).toEqual('15');
  }); test('divide', () => {
    expect(operate(32, 8, '÷')).toEqual('4');
  });
  test('mod', () => {
    expect(operate(21, 5, '%')).toEqual('1');
  });
});
