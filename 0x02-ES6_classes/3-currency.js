export default class Currency {
  constructor(code, name) {
    this.code = code;
    this.name = name;
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

  displayFullCurrency() {
    return `${this.name} (${this.code})`;
  }
}
