class AppHeader {
    get cart() {
        return $('.shopping_cart_link');
    }

    /**
     * Get the cart amount
     *
     * @return {string}
     */
    getCartAmount(){
        browser.pause(500)
        return this.cart.getText();
    }

    /**
     * Open the cart
     *
     * @return {void}
     */
    openCart(){
        return this.cart.click();
    }
}

export default new AppHeader();
