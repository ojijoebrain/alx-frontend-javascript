export default class Building {
  constructor(sqft = 0) {
    this._sqft = sqft;

    if (new.target !== Building) {
      if (typeof this.evacuationWarningMessage !== 'function') {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
  }

  get sqft() {
    return this._sqft;
  }
}
