// utility function
function determineOverrideInSubclass(proto, property) {
  return [
    Object.getOwnPropertyNames(proto).includes(property),
    typeof proto[property] === 'function',
  ];
}

export default class Building {
  constructor(sqft) {
    this.sqft = sqft;

    const [available, isFunction] = determineOverrideInSubclass(
      Object.getPrototypeOf(this),
      'evacuationWarningMessage',
    );

    if (!available || !isFunction) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
  }

  // sqft
  set sqft(value) {
    if (typeof value === 'number') {
      this._sqft = value;
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {}
}
