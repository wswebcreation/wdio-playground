describe('Login', () => {
    it('should be able to login with a standard user', () => {
        // Open the page
        browser.url('');
        // Wait for the page to be visible
        $('#login_button_container').waitForVisible(15000);

        // Now login
        $('#user-name').addValue('standard_user');
        $('#password').addValue('secret_sauce');
        $('.login-button').click();

        // Wait for the screen to be displayed
        expect($('.inventory_list').waitForVisible(15000)).toEqual(true, 'Inventory List screen was not shown');
    });

    it('should not be able to login with a locked user', () => {
        // Open the page
        browser.url('');
        // Wait for the page to be visible
        $('#login_button_container').waitForVisible(15000);

        // Now login
        $('#user-name').addValue('locked_out_user');
        $('#password').addValue('secret_sauce');
        $('.login-button').click();

        expect($('[data-test="error"]').waitForVisible(15000)).toEqual(true, 'Error message is shown');
        expect($('[data-test="error"]').getText()).toContain(
            'Epic sadface: Sorry, this user has been locked out.',
            'The error message is not as expected',
        );
    });

    it('should show an error when no username is provided', () => {
        // ..
    });

    it('should show an error when no password is provided', () => {
        // ..
    });
});
