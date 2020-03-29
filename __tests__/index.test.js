import calculate from '../src/index.js';
import parse from '../src/parse.js'

test('parse', () => {
  expect(parse('')).toEqual([])
  expect(parse('3 + ( 8 - 9 )')).toEqual([3, 8, 9, '-', '+'])
  expect(parse('( ( 3 + 5 ) / ( 5 - 1 ) ) * 10')).toEqual([3, 5, '+', 5, 1, '-', '/', 10, '*'])
  expect(parse('1 + 2 * 3')).toEqual([1, 2, 3, '*', '+'])
  expect(parse('1 * 3 + 4 / 2')).toEqual([1, 3, '*', 4, 2, '/', '+'])
  expect(parse('12 + 2.3 - -30')).toEqual([12, 2.3, '+', -30, '-'])
  expect(parse('3 + 6 * 2 / ( 8 - 5.2 ) - 2')).toEqual([3, 6, 2, '*', 8, 5.2, '-', '/', '+', 2, '-'])
  expect(parse('3 + 6 * 2 / ( 1 + 5 ) - 2')).toEqual([3, 6, 2, '*', 1, 5, '+', '/', '+', 2, '-'])
})

test('calculate', () => {
  expect(calculate('0')).toEqual(0)
  expect(calculate('3 & 5')).toEqual({"error": "found incorrect symbol"})
  expect(calculate('1 + 2 - 3')).toEqual(1 + 2 - 3) // 0
  expect(calculate('3 + ( 8 - 9 )')).toEqual(3 + ( 8 - 9 )) // 2
  expect(calculate('3.4 - -8')).toEqual(3.4 - -8) // 1.4
  expect(calculate('3 + 6 * 2 / ( 8 - 5.2 ) - 2')).toEqual(3 + 6 * 2 / ( 8 - 5.2 ) - 2) //5.285714285714286
});