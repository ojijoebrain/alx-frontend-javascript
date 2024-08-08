import Building from './5-building';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.getFloors()} floors`;
  }

  getFloors() {
    return this._floors;
  }
}

export default SkyHighBuilding;
