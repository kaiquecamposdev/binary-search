const countdown = (i: number) => {
  console.log(i);
  // base case
  if (i <= 0) return;
  countdown(i - 1);
};

export const countdownEx = () => {
  countdown(5);
}