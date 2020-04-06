class Predicate {
  static isNumber(symbol) {
    const regExp = /^[-+]?[0-9]\d*(\.\d+)?$/;

    return symbol.match(regExp) !== null;
  }

  static isOpenBracket(symbol) {
    return symbol === '(';
  }

  static isClosedBracket(symbol) {
    return symbol === ')';
  }

  static isBinaryOperator(symbol) {
    const binaryOperators = ['+', '-', '*', '/', '^'];

    return binaryOperators.includes(symbol);
  }
}

export default Predicate;
