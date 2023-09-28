export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  // size
  set size(value) {
    if (typeof value === 'number') {
      this._size = value;
    }
  }

  get size() {
    return this._size;
  }

  // location
  set location(value) {
    if (typeof value === 'string') {
      this._location = value;
    }
  }

  get location() {
    return this._location;
  }

  // Primitives
  [Symbol.toPrimitive](type) {
    let output;
    if (type === 'number') {
      output = this.size;
    } else if (type === 'string') {
      output = this.location;
    }
    return output;
  }
}
