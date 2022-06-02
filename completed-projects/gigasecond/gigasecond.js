//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

import { Date } from "core-js";

export const gigasecond = (date) => {
  const gigasec = 1000 *(10 ** 9)
  return new Date(date.getTime() + gigasec);
};
