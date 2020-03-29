import {
  isNumber, isOpenBracket, isClosedBracket, isBinaryOperator,
} from './predicates';

const checkPriority = (element) => {
  const priorityMap = {
    '(': 0,
    ')': 0,
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
  };

  return priorityMap[element];
};


const peek = (stack) => stack[stack.length - 1];


const parse = (expression) => {
  if (expression === '') return [];

  const findOpenBracket = (stack, output) => {
    while (stack.length !== 0) {
      const symbol = stack.pop();
      if (isOpenBracket(symbol)) {
        return [stack, output];
      }
      output.push(symbol);
    }
    return [stack, output];
  };

  let stack = [];
  let output = [];
  const arrayOfElements = expression.split(' ');

  arrayOfElements.map((element) => {
    if (isNumber(element)) {
      output.push(Number(element));
    }

    if (isOpenBracket(element)) {
      stack.push(element);
    }

    if (isClosedBracket(element)) {
      [stack, output] = findOpenBracket(stack, output);
    }

    if (isBinaryOperator(element)) {
      let symbol = peek(stack);
      while ((checkPriority(symbol) >= checkPriority(element)) && stack.length !== 0) {
        symbol = stack.pop();
        output.push(symbol);
        symbol = peek(stack);
      }
      stack.push(element);
    }

    return { error: 'found incorrect symbol', symbol: element };
  });

  while (stack.length !== 0) {
    const symbol = stack.pop();
    output.push(symbol);
  }

  return output;
};

export default parse;
