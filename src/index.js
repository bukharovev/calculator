import parse from './parser';
// import { isOperator } from './predicates/
import calcInPolishNotation from './calcInPolishNotation';

const calculator = (expression) => {
  const reversePolishNotation = parse(expression);

  const result = calcInPolishNotation(reversePolishNotation);
  return result;
};

export default calculator;
