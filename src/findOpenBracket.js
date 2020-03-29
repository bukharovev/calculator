import { isOpenBracket } from './predicates';

export default (stack, output) => {
  while (stack.length !== 0) {
    const element = stack.pop();
    if (isOpenBracket(element)) {
      return [stack, output];
    }
    output.push(element);
  }
  return [stack, output];
};
