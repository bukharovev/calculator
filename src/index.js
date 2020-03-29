import parseInPolishNotation from './parseInPolishNotation';
import calcInPolishNotation from './calcInPolishNotation';

const calculator = (expression) => {
  const reversePolishNotation = parseInPolishNotation(expression);
  const result = calcInPolishNotation(reversePolishNotation);

  return result;
};

export default calculator;
