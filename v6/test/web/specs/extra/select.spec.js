describe('Select', () => {
    it('should work', () => {
        // Go to the page
        driver.url('https://www.mediacollege.com/internet/samples/html/country-list.html');

        // Wait for the element to be visible
        $('[name="country"]').waitForDisplayed({timeout: 15000});

        // Get the current value
        console.log('\n==============================================');
        console.log('Current value = ', $('[name="country"]').getValue());
        console.log('==============================================\n');
        // This is what a lot of people do
        // $('[name="country"]').click();
        // Or set the value like this, then is needs to be the VISIBLE value
        // $('[name="country"]').addValue('Netherlands (Holland, Europe)');
        // But this is a cross platform/browser/device way of doing it
        $('[name="country"]').selectByAttribute('value','NL');

        // For demo purpose only
        driver.pause(5000);

        // // If you are using the click or addValue you need to do this on iOS
        // if(driver.isIOS) {
        //     // Get the current webview, there might be multiple tabs open which all have their own id
        //     const currentWebview = driver.getContext();
        //     // Switch to native
        //     driver.switchContext('NATIVE_APP');
        //
        //     // Wait for the picker to be there
        //     $('-ios class chain:**/XCUIElementTypePickerWheel').waitForDisplayed({timeout: 15000});
        //     // Set the VISIBLE value
        //     // NOT WITH XPATH!!!!, TOO SLOW!!!! Use for example the `-ios class chain` which is much faster
        //     $('-ios class chain:**/XCUIElementTypePickerWheel').addValue('Netherlands (Holland, Europe)');
        //     // Click on done, NOT WITH XPATH, TOO SLOW, use a the accessibilityLabel
        //     $('~Done').click();
        //
        //     driver.switchContext(currentWebview);
        // }

        // Log the result
        console.log('\n==============================================');
        console.log('New value = ', $('[name="country"]').getValue());
        console.log('==============================================\n');

        // For demo purpose only
        driver.pause(5000);
    });
});
