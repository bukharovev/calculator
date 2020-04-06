/* eslint-disable class-methods-use-this */
import Predicate from '../helpers/Predicate';

class ParserReversePolishNotation {
  peek(stack) {
    return stack[stack.length - 1];
  }

  getPriority(element) {
    const priorityMap = {
      '(': 0,
      ')': 0,
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
      '^': 3,
    };
    return priorityMap[element];
  }

  findOpenBracket(stack, output) {
    while (stack.length !== 0) {
      const element = stack.pop();
      if (Predicate.isOpenBracket(element)) {
        return [stack, output];
      }
      output.push(element);
    }
    return [stack, output];
  }

  parse(expression) {
    if (expression === '') return [];

    let stack = [];
    let output = [];

    const arrayOfElements = expression.split(' ');

    // eslint-disable-next-line array-callback-return
    arrayOfElements.map((element) => {
      if (Predicate.isNumber(element)) {
        output.push(Number(element));
      }

      if (Predicate.isOpenBracket(element)) {
        stack.push(element);
      }

      if (Predicate.isClosedBracket(element)) {
        [stack, output] = this.findOpenBracket(stack, output);
      }

      if (Predicate.isBinaryOperator(element)) {
        let elementFromStask = this.peek(stack);
        // eslint-disable-next-line max-len
        while ((this.getPriority(elementFromStask) >= this.getPriority(element)) && stack.length !== 0) {
          output.push(stack.pop());
          elementFromStask = this.peek(stack);
        }
        stack.push(element);
      }
    });

    while (stack.length !== 0) {
      output.push(stack.pop());
    }

    return output;
  }
}

export default ParserReversePolishNotation;
