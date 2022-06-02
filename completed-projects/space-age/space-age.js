//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const age = (planet, seconds) => {
  const planetConversions = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 31557600,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132
  }

  if (planet === 'earth') {
    return Math.round((seconds / planetConversions['earth']) * 100 ) / 100;
   } else {
     return Math.round((seconds / planetConversions['earth'] / planetConversions[planet]) * 100) / 100;
   }
};
