"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Remote {
    constructor(doorIn) {
        this.door = doorIn;
    }
    pressButton() {
        console.log('Pressing the remote control button...');
        if (this.door.isOpen()) {
            this.door.close();
        }
        else {
            this.door.open();
        }
    }
}
exports.Remote = Remote;
//# sourceMappingURL=Remote.js.map