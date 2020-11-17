'use strict';

class Thermostat {
    temperature = 20;
    minimumTemp = 10;
    powerSavingMode = "On";
    

    up() {
        if (this.powerSavingMode == "On" && this.temperature < 25) {
            this.temperature += 1;
        } else if (this.powerSavingMode == "Off" && this.temperature < 32) {
            this.temperature += 1;
        }
    }

    down() {
        if (this.temperature == this.minimumTemp) {
            return;
        }
            this.temperature -= 1;
    }

    switch() {
        if (this.powerSavingMode == "On") {
            this.powerSavingMode = "Off";
        } else if (this.powerSavingMode == "Off") {
            this.powerSavingMode == "On";
        }
    }

    reset() {
        this.temperature = 20;
    }

    energyUsage() {
        if(this.temperature < 18) {
            return "Low-usage";
        } if (this.temperature <= 25) {
            return "Medium-usage";
        }
        return "High-usage";
    }

}
