import parseInReversePolishNotation from './parseInReversePolishNotation';
import calcInReversePolishNotation from './calcInReversePolishNotation';

const calculator = (expression) => {
  const reversePolishNotation = parseInReversePolishNotation(expression);

  const result = calcInReversePolishNotation(reversePolishNotation);

  return result;
};

export default calculator;
