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

export { sortByDecrease, sortByIncrease };
