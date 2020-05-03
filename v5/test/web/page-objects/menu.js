class Menu {
    get menu() {
        return $('.bm-burger-button');
    }

    get inventoryListButton() {
        return $('#inventory_sidebar_link');
    }

    get aboutButton() {
        return $('#about_sidebar_link');
    }

    get logoutButton() {
        return $('#logout_sidebar_link');
    }

    get resetButton() {
        return $('#reset_sidebar_link');
    }

    /**
     * Open the menu
     *
     * @return {void}
     */
    open() {
        if(browser.isIOS){
            browser.execute('document.querySelector(\'.bm-burger-button button\').click()');
        } else {
            this.menu.click();
        }
        return browser.pause(500);
    }

    /**
     * Open the inventory list page
     *
     * @return {void}
     */
    openInventoryList() {
        return this.inventoryListButton.click();
    }

    /**
     * Open the about page
     *
     * @return {void}
     */
    openAboutPage() {
        return this.aboutButton.click();
    }

    /**
     * Logout
     *
     * @return {void}
     */
    logout() {
        return this.logoutButton.click();
    }

    /**
     * Reset the app state
     *
     * @return {void}
     */
    restAppState() {
        return this.resetButton.click();
    }
}

export default new Menu();
