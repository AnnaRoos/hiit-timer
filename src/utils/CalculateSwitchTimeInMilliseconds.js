export const calculateSwitchTimeInMilliseconds = (
  distance,
  breakTimeInMilliseconds,
  intervalTimeInMilliseconds,
  rounds,
  onInterval
) => {
  if (onInterval) {
    const deduction =
      rounds * breakTimeInMilliseconds +
      (rounds - 1) * intervalTimeInMilliseconds;
    return distance - deduction;
  } else {
    const deduction =
      rounds * breakTimeInMilliseconds + rounds * intervalTimeInMilliseconds;
    return distance - deduction;
  }
};
