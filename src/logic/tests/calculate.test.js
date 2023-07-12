import calculate from '../calculate';
import operate from '../operate';

describe('calculate test', () => {
  test('should return obj with null variables when buttonName is "AC"', () => {
    const obj = { total: null, next: null, operation: '+' };
    expect(calculate(obj, 'AC')).toEqual({ total: null, next: null, operation: null });
  });

  test('should update next value when buttonName is a number', () => {
    const obj = { total: null, next: null, operation: '+' };
    expect(calculate(obj, '8')).toEqual({ next: '8', operation: '+', total: null });
  });

  test('should return empty object when buttonName is "=" and no next value', () => {
    const obj = { total: null, next: null, operation: '+' };
    expect(calculate(obj, '=')).toEqual({});
  });

  test('should calculate total when buttonName is "=" and next and operation exist', () => {
    const obj = { total: '16', next: '8', operation: '+' };
    expect(calculate(obj, '=')).toEqual({
      total: operate('16', '8', '+'),
      next: null,
      operation: null,
    });
  });

  test('should clear next value when buttonName is "AC"', () => {
    const obj = { total: '10', next: '5', operation: '+' };
    expect(calculate(obj, 'AC')).toEqual({ total: null, next: null, operation: null });
  });

  test('should perform division operation', () => {
    const obj = { total: '12', next: '4', operation: '÷' };
    expect(calculate(obj, '=')).toEqual({
      total: operate('12', '4', '÷'),
      next: null,
      operation: null,
    });
  });

  test('should perform subtraction operation', () => {
    const obj = { total: '15', next: '7', operation: '-' };
    expect(calculate(obj, '=')).toEqual({
      total: operate('15', '7', '-'),
      next: null,
      operation: null,
    });
  });

  test('should convert next value to negative', () => {
    const obj = { total: null, next: '5', operation: null };
    expect(calculate(obj, '+/-')).toEqual({ total: null, next: '-5', operation: null });
  });
});
