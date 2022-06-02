//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(numberString) {
    this._rows = numberString
      .split("\n")
      .map((element) => element.split(" ").map((element) => Number(element)));

    this._columns = [];
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    const columns = [];

    for (let i = 0; i <= this._rows.length; i++) {
      columns[i] = this._rows.map((row) => row[i]);
    }
    
    return columns;
  }
}
