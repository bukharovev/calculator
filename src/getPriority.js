export default (element) => {
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
