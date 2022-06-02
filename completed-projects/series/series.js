//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    this._series = series;
  }

  slices(sliceLength) {
    if (this._series.length < 1) {
      throw new Error("series cannot be empty");
    }
    if (this._series.length < sliceLength) {
      throw new Error("slice length cannot be greater than series length");
    }
    if (sliceLength === 0) {
      throw new Error("slice length cannot be zero");
    }
    if (sliceLength < 1) {
      throw new Error("slice length cannot be negative");
    }

    return this._series.split("").map((e) => Number(e))
    .map((e, i, a) => a.slice(i, i + sliceLength))
    .filter((e) => e.length === sliceLength);
  }
}
