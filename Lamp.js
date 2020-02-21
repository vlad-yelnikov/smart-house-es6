'use strict';

class Lamp extends Device {
    constructor(name, color, power) {
        super(name);
        this._color = color;
        this._power = power;
    }
    get Color() {
        return this._color;
    }
    set Color(color) {
        this._color = color;
    }
    get Power() {
        return this._power.getPower();
    }
    set Power(value) {
        return this._power.setPower(value);
    }
    increasePower(value) {
        return this._power.increasePower(value);
    }
    decreasePower(value) {
        return this._power.decreasePower(value);
    }
}
