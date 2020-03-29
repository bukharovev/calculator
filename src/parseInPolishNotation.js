import getPriority from './getPriority';
import findOpenBracket from './findOpenBracket';
import {
  isNumber, isOpenBracket, isClosedBracket, isBinaryOperator,
} from './predicates';

const peek = (stack) => stack[stack.length - 1];

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
      while ((getPriority(elementFromStask) >= getPriority(element)) && stack.length !== 0) {
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
