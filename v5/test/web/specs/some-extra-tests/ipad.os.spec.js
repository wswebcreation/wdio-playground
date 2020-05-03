import {DEFAULT_TIMEOUT} from "../../../configs/e2eConstants";

describe('iPad OS', () => {
    it('should be able to let the keyboard float', () => {
        // Change the context to native
        driver.switchContext('NATIVE_APP');

        const urlButtonSelector = 'type == \'XCUIElementTypeButton\' && name CONTAINS \'URL\'';
        const urlButton = $(`-ios predicate string:${urlButtonSelector}`);

        // Wait for the url button to appear and click on it so the text field will appear
        urlButton.waitForDisplayed(DEFAULT_TIMEOUT);
        urlButton.click();

        // Wait for the keyboard to be there
        $('~Hide keyboard').waitForDisplayed(15000);

        // This is for demo purpose and the animation
        driver.pause(1000);

        // Open the keyboard menu and select the floating option
        $('~Hide keyboard').touchAction([
            'press',
            {
                action: 'wait',
                ms: 2000,
            },
            {
                action: 'moveTo',
                // The floating option is not available in the source before the touchAction
                // To make this work I've chosen to use the `.` on the keyboard because it is almost on
                // the same location as the `Floating` option would be
                element: $('~.'),
                // x: 0,
                // y: 0,
            },
            'release'
        ]);

        // Wait for the Keyboard to be resized
        $('~Floating keyboard grabber').waitForDisplayed(15000);

        // Move the keyboard on the screen
        $('~Floating keyboard grabber').touchAction([
            'longPress',
            {
                action: 'moveTo',
                x: 384,
                y: -450,
            },
            'release'
        ]);

        // This is for demo purpose and the animation
        driver.pause(1000);

        // Start typing
        const urlFieldSelector = 'type == \'XCUIElementTypeTextField\' && name CONTAINS \'URL\'';
        const urlField = $(`-ios predicate string:${urlFieldSelector}`);

        // Submit the url and add a break
        urlField.setValue('https://www.saucelabs.com');
        $('~go').click();

        // This is just for waiting for the page to load
        driver.pause(5000);

        // Open the address keyboard again
        urlButton.click();

        // Move it back to it's original position
        $('~Floating keyboard grabber').touchAction([
            'longPress',
            {
                action: 'moveTo',
                x: 0,
                y: 1024,
            },
            'release'
        ]);

        // Wait for the keyboard to appear
        $('~Hide keyboard').waitForDisplayed(15000);
        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: 10,
                    y: 250,
                },
            },
            {
                action: 'release',
            }
        ]);

        // This is for the demo purpose
        driver.pause(2000);
    });
});
