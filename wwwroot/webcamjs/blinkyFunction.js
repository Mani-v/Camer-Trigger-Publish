﻿window.blinkyFunctions = {
    blazorForm: null,
    startBlinky: function (formInstance) {
        window.blinkyFunctions.blazorForm = formInstance;
        setInterval(window.blinkyFunctions.updateStatus, 1000);
    },
    updateStatus: function () {
        if (window.blinkyFunctions.blazorForm == null) {
            return;
        }

        window.blinkyFunctions.blazorForm.invokeMethodAsync('UpdateStatus');
    }
}