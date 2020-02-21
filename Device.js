'use strict';

class Device {
    constructor(name) {
        this._name = name;
        this._state = false;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get state() {
        return this._state;
    }
    on() {
        this._state = true;
    }
    off() {
        this._state = false;
    }
}
