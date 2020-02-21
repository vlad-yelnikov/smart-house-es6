'use strict';

class Microwave extends Device {
    constructor(name, power) {
        super(name);
        this._power = power;
        this._time = 0;
        this._mode = '';
    }
    get Time() {
        return this._time;
    }
    set Time(time) {
        this._time = time;
    }
    get Mode() {
        return this._mode;
    }
    heat() {
        this._mode = 'heat';
    }
    defrost() {
        this._mode = 'defrost';
    }
    grill() {
        this._mode = 'grill';
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
