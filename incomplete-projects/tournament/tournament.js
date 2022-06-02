//
// This is only a SKELETON file for the 'Tournament' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const tournamentTally = (results) => {
  if (results === "") {
    return `Team                           | MP |  W |  D |  L |  P`;
  }
  const resultsToSplice = results.toString().split(";");
  const arrayToTally = [];

  while (arrayToTally.length < resultsToSplice.length) {
    arrayToTally.push(resultsToSplice.splice(-3, 3));

    console.log("results array: " + results);
    console.log("arrayToTally: " + arrayToTally);
  }
};
