'use strict';

class PowerRegulator {
    constructor(power) {
        if (power >= 0 && power <= 100) this._power = power;
    }
    get power() {
        return this._power;
    }
    set power(value) {
        if (value >= 0 && value <= 100) this._power = value;
    }
    increasePower(value) {
        if (this._power + value <= 100) this._power += value;
    }
    decreasePower(value) {
        if (this._power - value >= 0) this._power -= value;
    }
}