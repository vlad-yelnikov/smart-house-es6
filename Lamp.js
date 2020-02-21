'use strict';

class Lamp extends Device {
    constructor(name, color, power) {
        super(name);
        this._color = color;
        this._power = power;
    }
    get color() {
        return this._color;
    }
    set color(color) {
        this._color = color;
    }
    get power() {
        return this._power.power;
    }
    set power(value) {
        return this._power.power(value);
    }
    increasePower(value) {
        return this._power.increasePower(value);
    }
    decreasePower(value) {
        return this._power.decreasePower(value);
    }
}
