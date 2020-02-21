'use strict';

class House {
    constructor(name) {
        this._name = name;
        this._devices = [];
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    addDevice(device) {
        this._devices.push(device);
    }
    getDevice(name) {
        const condition = value => value.name == name;

        return this.getAllDevices().find(condition);
    }
    delDevice(name) {
        const device = this.getDevice(name);
        const index = this._devices.indexOf(device);
        this._devices.splice(index, 1);
    }
    getAllDevices() {
        return this._devices;
    }
}
