'use strict';

describe("Thermostat", function() {

    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    it("Should be a ble to return the value of temperature", function() {
        expect(thermostat.temperature).toEqual(20);
    });

    it("Should increase the temperature when turned up", function() {
        thermostat.up();
        expect(thermostat.temperature).toEqual(21);
    });

    it("Should decrease the temperature when turned down", function() {
        thermostat.down();
        expect(thermostat.temperature).toEqual(19);
    });

    it("Stops the down function when the temperature is 10 degrees", function() {
        for(var i = 0; i < 11; i++) {
            thermostat.down();
        }
        expect(thermostat.temperature).toEqual(10);
    });

    it("Should return true if power saving is on", function() {
        expect(thermostat.powerSavingMode).toEqual("On");
    });

    it("Should return 'Off' if power saving is not on", function() {
        thermostat.switch()
        expect(thermostat.powerSavingMode).toEqual("Off");
    });

    it("When power saving mode is on, the up function stops when temperature is 25", function() {
        for(var i = 0; i < 6; i++) {
            thermostat.up();
        }
        expect(thermostat.temperature).toEqual(25);
    });

    it("When power saving mode is off, the up function stops when temperature is 32", function() {
        thermostat.switch();
        for(var i = 0; i < 13; i++) {
            thermostat.up();
        }
        expect(thermostat.temperature).toEqual(32);
    });

    it("Resets temperature to 20 when reset function is called", function() {
        thermostat.up();
        thermostat.reset();
        expect(thermostat.temperature).toEqual(20);
    });
    
});

describe("Energy usage", function(){

    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    it("Returns 'Low-usage' when temperature is < 18", function() {
        for(var i = 0; i < 3; i++) {
            thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('Low-usage');
    });

    it("Returns 'Medium-usage' when temperature is <= 25", function() {
        expect(thermostat.energyUsage()).toEqual('Medium-usage');
    });

    it("Returns 'High-usage' when temperature is > 25", function() {
        thermostat.switch();
        for(var i = 0; i < 13; i++) {
            thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('High-usage');
    });

});
