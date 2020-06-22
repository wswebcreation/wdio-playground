describe('Paychex', () => {
    it('should be able to open a new environment', () => {

        $('.logo.show-login').waitForDisplayed();
        // Get the rectangles of the element
        const rectangles = driver.getElementRect($('.logo.show-login').elementId)
        const logoPosition = {
            // The x position will be the center of the element (starting point + half of the width of the button) times the pixel ratio
            // I'm reading the pixel ratio from the driver object, this is given back by the Android driver
            x: (parseInt(rectangles.x + (rectangles.width/2)) * driver.capabilities.pixelRatio),
            // The y position will be:
            // - the center of the element (starting point + half of the height of the button) times the pixel ratio
            // - plus the status bar height
            // I'm reading the pixel ratio and the statusbar height from the driver object, this is given back by the Android driver
            y: (parseInt(rectangles.y + (rectangles.height/2),10) * driver.capabilities.pixelRatio) + driver.capabilities.statBarHeight
        };
        // Now tap on the element
        driver.touchPerform([
            {
                action: 'tap',
                options: logoPosition,
            },
            {
                action: 'tap',
                options: logoPosition,
            },
            {
                action: 'tap',
                options: logoPosition,
            },
            {
                action: 'tap',
                options: logoPosition,
            },
            {
                action: 'tap',
                options: logoPosition,
            },
            {
                action: 'tap',
                options: logoPosition,
            },
        ]);

        // For demo purpose
        driver.pause(5000)
    });
});
