//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (x, y) => {
  return x ** 2 + y ** 2 <= 1
    ? 10
    : x ** 2 + y ** 2 <= 25
    ? 5
    : x ** 2 + y ** 2 <= 100
    ? 1
    : 0;
};
