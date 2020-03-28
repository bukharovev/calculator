import calculate from '../src/index.js';
import parse from '../src/parse.js'

test('parse', () => {
  expect(parse('')).toEqual([])
  expect(parse('12 + 2.3 - -30')).toEqual([12, 2.3, '+', -30, '-'])
  expect(parse('1 + 2 * 3')).toEqual([1, 2, 3, '*', '+'])
  expect(parse('1 * 3 + 4 / 2')).toEqual([1, 3, '*', 4, 2, '/', '+'])
  expect(parse('3 + 6 * 2 / ( 8 - 5 ) - 2')).toEqual([3, 6, 2, '*', 8, 5, '-', '/', '+', 2, '-'])
  expect(parse('3 + 6 * 2 / ( 1 + 5 ) - 2')).toEqual([3, 6, 2, '*', 1, 5, '+', '/', '+', 2, '-'])
})

// test('calculate', () => {
//   expect(calculate('1+2-3')).toEqual(0);
//   //expect(calculate('')).toEqual();
// });