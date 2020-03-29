import { isNumber } from '../src/predicates';
import parse from '../src/parseInPolishNotation';
import calcInPolishNotation from '../src/calcInPolishNotation';
import calculator from '../src/index';

test('isNumber', () => {
  expect(isNumber('')).toEqual(false);
  expect(isNumber('30')).toEqual(true);
  expect(isNumber('-30.05')).toEqual(true);
  expect(isNumber('-30f')).toEqual(false);
  expect(isNumber('-')).toEqual(false);
  expect(isNumber('+')).toEqual(false);
  expect(isNumber('text')).toEqual(false);
  expect(isNumber('-0.5')).toEqual(true);
});

test('parse', () => {
  expect(parse('')).toEqual([]);
  expect(parse('3 + ( 8 - 9 )')).toEqual([3, 8, 9, '-', '+']);
  expect(parse('1 + 2 * 3')).toEqual([1, 2, 3, '*', '+']);
  expect(parse('1 * 3 + 4 / 2')).toEqual([1, 3, '*', 4, 2, '/', '+']);
  expect(parse('12 + 2.3 - -30')).toEqual([12, 2.3, '+', -30, '-']);
  expect(parse('( ( 3 + 5 ) / ( 5 - 1 ) ) * 10')).toEqual([3, 5, '+', 5, 1, '-', '/', 10, '*']);
  expect(parse('3 + 6 * 2 / ( 8 - 5.2 ) - 2')).toEqual([3, 6, 2, '*', 8, 5.2, '-', '/', '+', 2, '-']);
  expect(parse('300 + 6 * 2 / ( 1 + 5 ) - 2.5')).toEqual([300, 6, 2, '*', 1, 5, '+', '/', '+', 2.5, '-']);
});

test('reverse polish notation', () => {
  expect(calcInPolishNotation([1, 2, '+', 4, '*', 3, '+'])).toBe(15);
  expect(calcInPolishNotation([7, 2, 3, '*', '-'])).toBe(1);
  expect(calcInPolishNotation([1, 2, '+', 2, '*'])).toBe(6);
});

test('calculate', () => {
  expect(calculator('0')).toEqual(0);
  expect(calculator('1 + 2 - 3')).toEqual(1 + 2 - 3); // 0
  expect(calculator('3 + ( 8 - 9 )')).toEqual(3 + (8 - 9)); // 2
  expect(calculator('3.4 - -8')).toEqual(3.4 - -8); // 1.4
  expect(calculator('3 + 6 * 2 / ( 8 - 5.2 ) - 2')).toEqual(3 + (6 * 2) / (8 - 5.2) - 2); // 5.285714285714286
});
