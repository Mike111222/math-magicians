import operate from '../operate';

describe('Check calculator operations are as expected', () => {
  test('should perform addition operation', () => {
    expect(operate('10', '4', '+')).toEqual('14');
  });

  test('should perform subtraction operation', () => {
    expect(operate('18', '6', '-')).toEqual('12');
  });

  test('should perform multiplication operation', () => {
    expect(operate('5', '3', 'x')).toEqual('15');
  });

  test('should perform division operation', () => {
    expect(operate('32', '8', '÷')).toEqual('4');
  });

  test('should handle division by zero', () => {
    expect(operate('10', '0', '÷')).toEqual("Can't divide by 0.");
  });

  test('should perform modulo operation', () => {
    expect(operate('21', '5', '%')).toEqual('1');
  });

  test('should handle modulo with zero divisor', () => {
    expect(operate('10', '0', '%')).toEqual("Can't find modulo as can't divide by 0.");
  });

  test('should throw an error for an unknown operation', () => {
    expect(() => operate('5', '3', '^')).toThrow("Unknown operation '^'");
  });
});
