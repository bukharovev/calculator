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

const findOpenBracket = (stack, output) => {
  while (stack.length !== 0) {
    const element = stack.pop();
    if (isOpenBracket(element)) {
      return [stack, output];
    }
    output.push(element);
  }
  return [stack, output];
};

const parse = (expression) => {
  if (expression === '') return [];

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
      let elementFromStask = peek(stack);
      while ((checkPriority(elementFromStask) >= checkPriority(element)) && stack.length !== 0) {
        output.push(stack.pop());
        elementFromStask = peek(stack);
      }

      stack.push(element);
    }

    return { error: 'found incorrect symbol', element };
  });

  while (stack.length !== 0) {
    output.push(stack.pop());
  }

  return output;
};

export default parse;
