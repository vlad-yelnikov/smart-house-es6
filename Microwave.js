'use strict';

class Microwave extends Device {
    constructor(name, power) {
        super(name);
        this._power = power;
        this._time = 0;
        this._mode = '';
    }
    get time() {
        return this._time;
    }
    set time(time) {
        this._time = time;
    }
    get mode() {
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
