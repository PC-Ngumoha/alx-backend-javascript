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

    const proto = Object.getPrototypeOf(this);

    if (proto !== Building.prototype) {
      const [available, isFunction] = determineOverrideInSubclass(
        proto,
        'evacuationWarningMessage',
      );

      if (!available || !isFunction) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
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
}
