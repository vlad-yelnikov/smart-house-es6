'use strict';

const lamp = new Lamp('xiaomi', 'yellow', new PowerRegulator(100));
const microwave = new Microwave('LG', new PowerRegulator(100));
const house = new House('my house');

house.addDevice(microwave);
house.addDevice(lamp);
house.delayedOn('LG', 2000, () =>
    house.delayedOff('LG', 2000, () =>
        house.delayedOn('LG', 2000, () =>
            house.delayedOff('LG', 2000, () => console.log(microwave.state))
        )
    )
);
