export default (a, b) => {
  if (a.seniority > b.seniority) {
    return -1;
  }
  if (a.seniority < b.seniority) {
    return 1;
  }
  return 0;
};
