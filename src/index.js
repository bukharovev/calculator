import parse from './parse'
// import { isOperator } from './predicates/

const isOperator = (element) => {
  const operators = ['/', '*', '+', '-'];

  return operators.includes(element);
};

const calculate = (operand1, operand2, operator) => {
  const operatorsMap = {
    '+': (a, b) => a + b,
    '/': (a, b) => a / b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return operatorsMap[operator](operand1, operand2);
};

const calcInPolishNotation = (array) => {
  const stack = [];

  const result = array.reduce((acc, item) => {
    if (isOperator(item)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const value = calculate(operand1, operand2, item);
      stack.push(value);
      return value;
    }

    stack.push(item);
    return acc;
  }, 0)

  return result
};

const calculator = (expression) => {
	const reversePolishNotation = parse(expression)
	if (reversePolishNotation.error !== undefined) {
		return { error: reversePolishNotation.error }
	}
	const result = calcInPolishNotation(reversePolishNotation)
	
	console.log('result = ', result)
	return result
}

export default calculator
