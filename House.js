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
        return this._devices.find(device => device.name == name);
    }
    delDevice(name) {
        const device = this.getDevice(name);
        const index = this._devices.indexOf(device);
        this._devices.splice(index, 1);
    }
    getAllDevices() {
        return this._devices;
    }
    delayedOn(name, delay, callback) {
        const device = this.getDevice(name);
        setTimeout(() => {
            device.on();
            callback();
        }, delay);
    }
    delayedOff(name, delay, callback) {
        const device = this.getDevice(name);
        setTimeout(() => {
            device.off();
            callback();
        }, delay);
    }
}
