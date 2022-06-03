//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
export const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const rotate = (str, move) => {
  str = str.split('').map((char) => {
    if (lowercaseAlphabet.includes(char)) {
      let index = lowercaseAlphabet.indexOf(char);
      return lowercaseAlphabet[(index + move) % 26];
    } else if (uppercaseAlphabet.includes(char)) {
      let index = uppercaseAlphabet.indexOf(char);
      return uppercaseAlphabet[(index + move) % 26];
    } else {
      return char;
    }
  });
  return str.join('');
};
