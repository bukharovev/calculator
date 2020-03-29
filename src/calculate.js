const calculate = (operand1, operand2, operator) => {
  const operatorsMap = {
    '+': (a, b) => a + b,
    '/': (a, b) => a / b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return operatorsMap[operator](operand1, operand2);
};

export default calculate;
