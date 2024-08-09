import Car from './10-car';

class EVCar extends Car {
  constructor({
    brand = '',
    motor = '',
    color = '',
    range = '',
  } = {}) {
    super(brand, motor, color);
    this._range = range;
  }

  get range() {
    return this._range;
  }

  set range(value) {
    if (typeof value === 'string' && value.length > 0) {
      this._range = value;
    } else {
      throw new TypeError('Range must be a non-empty string');
    }
  }

  static get [Symbol.species]() {
    return this;
  }
}

export default EVCar;
