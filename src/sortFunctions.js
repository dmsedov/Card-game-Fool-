const sortByDecrease = (a, b) => {
  if (a.seniority > b.seniority) {
    return -1;
  }
  if (a.seniority < b.seniority) {
    return 1;
  }
  return 0;
};

const sortByIncrease = (a, b) => {
  if (a.seniority > b.seniority) {
    return 1;
  }
  if (a.seniority < b.seniority) {
    return -1;
  }
  return 0;
};
const sortByType = (a, b) => {
  if (a.type !== b.type && a.type === 'trump') {
    return 1;
  }
  if (a.type !== b.type && a.type === 'ordinary') {
    return -1;
  }
  return 0;
};
export { sortByDecrease, sortByIncrease, sortByType };
