export default class Airport {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  // name
  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    }
  }

  get name() {
    return this._name;
  }

  // code
  set code(value) {
    if (typeof value === 'string') {
      this._code = value;
    }
  }

  get code() {
    return this._code;
  }

  get [Symbol.toStringTag]() {
    return `${this.code}`;
  }
}
