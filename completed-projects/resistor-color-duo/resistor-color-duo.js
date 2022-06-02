//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colorDuo) => {
  const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];
  return Number(`${COLORS.indexOf(colorDuo[0].toLowerCase())}${COLORS.indexOf(colorDuo[1].toLowerCase())}`); 
};
