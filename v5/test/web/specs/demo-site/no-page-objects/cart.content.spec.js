describe('Cart content', () => {
    it('should be to able to verify the cart content in the old fashion way', () => {
        // Open the page
        browser.url('');
        // Wait for the page to be visible
        $('#login_button_container').waitForVisible(15000);

        // Now login
        $('#user-name').addValue('standard_user');
        $('#password').addValue('secret_sauce');
        $('.login-button').click();


        // Wait for the screen to be displayed
        expect($('.inventory_list').waitForVisible(15000)).toEqual(
            true,
            'Inventory List screen was not shown',
        );

        // Add some swag items
        $$('.inventory_item')[ 0 ].$('.add-to-cart-button').click();
        $$('.inventory_item')[ 2 ].$('.add-to-cart-button').click();
        $$('.inventory_item')[ 4 ].$('.add-to-cart-button').click();

        // Validate the amount of items added to the cart
        expect($('.shopping_cart_link').getText()).toEqual('3');

        // Open the cart
        $('.shopping_cart_link').click();
        expect($('#cart_contents_container').waitForVisible(15000)).toEqual(
            true,
            'Cart was was not shown',
        );

        // Now validate the cart
        expect($$('.cart_item').length).toEqual(3, 'The amount is not as expected');
        expect($$('.cart_item')[0].getText()).toContain('Sauce Labs Backpack', 'Item text is not correct');
        expect($$('.cart_item')[1].getText()).toContain('Sauce Labs Bolt T-Shirt', 'Item text is not correct');
        expect($$('.cart_item')[2].getText()).toContain('Sauce Labs Onesie', 'Item text is not correct');
    });
});


