export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    this._sqft = newSqft;
  }

  /* eslint-disable class-methods-use-this */
  evacuationWarningMessage() {
    const message = 'Class extending Building must override evacuationWarningMessage';
    throw new Error(message);
  }
}
