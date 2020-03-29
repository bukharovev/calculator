import { isNumber } from '../src/predicates';
import parseInReversePolishNotation from '../src/parseInReversePolishNotation';
import calcInReversePolishNotation from '../src/calcInReversePolishNotation';
import calculator from '../src/index';

test('isNumber', () => {
  expect(isNumber('')).toEqual(false);
  expect(isNumber('9')).toEqual(true);
  expect(isNumber('305')).toEqual(true);
  expect(isNumber('-230.05')).toEqual(true);
  expect(isNumber('-30f')).toEqual(false);
  expect(isNumber('-')).toEqual(false);
  expect(isNumber('+')).toEqual(false);
  expect(isNumber('text')).toEqual(false);
  expect(isNumber('-0.5')).toEqual(true);
});

test('parse', () => {
  expect(parseInReversePolishNotation('')).toEqual([]);
  expect(parseInReversePolishNotation('3 + ( 8 - 9 )')).toEqual([3, 8, 9, '-', '+']);
  expect(parseInReversePolishNotation('1 + 2 * 3')).toEqual([1, 2, 3, '*', '+']);
  expect(parseInReversePolishNotation('1 * 3 + 4 / 2')).toEqual([1, 3, '*', 4, 2, '/', '+']);
  expect(parseInReversePolishNotation('12 + 2.3 - -30')).toEqual([12, 2.3, '+', -30, '-']);
  expect(parseInReversePolishNotation('( ( 3 + 5 ) / ( 5 - 1 ) ) * 10')).toEqual([3, 5, '+', 5, 1, '-', '/', 10, '*']);
  expect(parseInReversePolishNotation('3 + 6 * 2 / ( 8 - 5.2 ) - 2')).toEqual([3, 6, 2, '*', 8, 5.2, '-', '/', '+', 2, '-']);
  expect(parseInReversePolishNotation('300 + 6 * 2 / ( 1 + 5 ) - 2.5')).toEqual([300, 6, 2, '*', 1, 5, '+', '/', '+', 2.5, '-']);
});

test('calcInReversePolishNotation', () => {
  expect(calcInReversePolishNotation([1, 2, '+', 4, '*', 3, '+'])).toBe(15);
  expect(calcInReversePolishNotation([7, 2, 3, '*', '-'])).toBe(1);
  expect(calcInReversePolishNotation([1, 2, '+', 2, '*'])).toBe(6);
});

test('calculate', () => {
  expect(calculator('0')).toEqual(0);
  expect(calculator('1 + 2 - 3')).toEqual(1 + 2 - 3); // 0
  expect(calculator('3 + ( 8 - 9 )')).toEqual(3 + (8 - 9)); // 2
  expect(calculator('3.4 - -8')).toEqual(3.4 - -8); // 1.4
  expect(calculator('3 + 6 * 2 / ( 8 - 5.2 ) - 2')).toEqual(3 + (6 * 2) / (8 - 5.2) - 2); // 5.285714285714286
});
