export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  // brand
  set brand(value) {
    if (typeof value === 'string') {
      this._brand = value;
    }
  }

  get brand() {
    return this._brand;
  }

  // motor
  set motor(value) {
    if (typeof value === 'string') {
      this._motor = value;
    }
  }

  get motor() {
    return this._motor;
  }

  // color
  set color(value) {
    if (typeof value === 'string') {
      this._color = value;
    }
  }

  get color() {
    return this._color;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    return new this.constructor[Symbol.species]();
  }
}
