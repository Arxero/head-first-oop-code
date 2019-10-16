"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bark {
    constructor(sound) {
        this.sound = sound.toLowerCase();
    }
    getSound() {
        return this.sound;
    }
    equals(bark) {
        if (bark instanceof Bark) {
            const otheBark = bark.getSound();
            if (this.sound.toLowerCase() === otheBark) {
                return true;
            }
        }
        return false;
    }
}
exports.Bark = Bark;
//# sourceMappingURL=Bark.js.map