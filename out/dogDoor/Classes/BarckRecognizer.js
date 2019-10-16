"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BarckRecognizer {
    constructor(doorIn) {
        this.door = doorIn;
    }
    recognize(bark) {
        for (const allowedBark of this.door.getAllowedBarks()) {
            if (allowedBark.equals(bark)) {
                console.log('Bark recognizer opens the door...');
                this.door.open();
                return;
            }
        }
        console.log('This dog is not allowed.');
    }
}
exports.BarckRecognizer = BarckRecognizer;
//# sourceMappingURL=BarckRecognizer.js.map