export const isNumber = (symbol) => {
  const regExp = /^[-+]?[0-9]\d*(\.\d+)?$/;
  return symbol.match(regExp) !== null;
};

export const isOpenBracket = (symbol) => symbol === '(';

export const isClosedBracket = (symbol) => symbol === ')';

export const isBinaryOperator = (symbol) => {
  const binaryOperators = ['+', '-', '*', '/'];
  return binaryOperators.includes(symbol);
};
