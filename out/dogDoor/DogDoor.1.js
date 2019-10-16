"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DogDoor {
    constructor() {
        this.allowedBarks = [];
        this.isDoorOpen = false;
    }
    open() {
        this.isDoorOpen = true;
        console.log('The dog door opens.');
        this.autoClose();
    }
    close() {
        this.isDoorOpen = false;
        console.log('The dog door closes.');
    }
    isOpen() {
        return this.isDoorOpen;
    }
    autoClose() {
        setTimeout(() => {
            this.close();
        }, 2000);
    }
    addAllowedBark(bark) {
        this.allowedBarks.push(bark);
    }
    getAllowedBarks() {
        return this.allowedBarks;
    }
}
exports.DogDoor = DogDoor;
//# sourceMappingURL=DogDoor.1.js.map