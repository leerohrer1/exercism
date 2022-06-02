//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (Dna) => {
  let Rna = Dna.split('').reduce((acc, letter) => { 
    letter === 'G' ? acc.push('C') : 
    letter === 'C' ? acc.push('G') : 
    letter === 'T' ? acc.push('A') : 
    letter === 'A' ? acc.push('U') : 
    acc.push(letter); 
    return acc;
  }, []).join(''); 
  return Rna;
};
