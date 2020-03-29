import calculate from './calculate';
import { isBinaryOperator } from './predicates';


const calcInPolishNotation = (array) => {
  const stack = [];

  const result = array.reduce((acc, item) => {
    if (isBinaryOperator(item)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const value = calculate(operand1, operand2, item);
      stack.push(value);
      return value;
    }

    stack.push(item);
    return acc;
  }, 0);

  return result;
};

export default calcInPolishNotation;
