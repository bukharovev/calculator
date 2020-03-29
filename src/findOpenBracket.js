import { isOpenBracket } from './predicates';

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

export default findOpenBracket;
