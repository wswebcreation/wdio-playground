import LoginPage from '../../page-objects/LoginPage';

describe('Sauce EMU-SIM', () => {
    let isW3C;
    beforeEach(() => {
        isW3C = driver.requestedCapabilities.hasOwnProperty('sauce:options');

        driver.url('');
        LoginPage.waitForIsDisplayed();
    });

    it(`should be able to run a W3C: ${isW3C} test`, () => {
        expect(driver.getTitle()).toEqual('Swag Labs');
    });
});
