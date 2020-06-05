import LoginScreen from '../../screenObjects/login';
import {restartApp} from '../../helpers/utils';
import InventoryListScreen from '../../screenObjects/inventoryList';
import {LOGIN_USERS} from '../../../configs/e2eConstants';

describe('WebdriverIO and Appium should be able to compare screenshots together', () => {
    beforeEach(() => {
        restartApp();
        LoginScreen.waitForIsShown();
    });

    it('should be able to save or compare a screen', () => {
        // SAVE SCREEN
        driver.saveScreen('saveScreen');

        // COMPARE SCREEN WITH ELEMENT BLOCKOUTS
        driver.compareScreen('new-default-compareScreen');

        // COMPARE SCREEN WITH BLOCK OUTS
        driver.compareScreen(
            'compareScreen-blockOuts',
            {
                blockOuts: [
                    // block out area 1
                    {
                        height: 100,
                        width: 100,
                        x: 250,
                        y: 900,
                    },
                    // block out area 2
                    {
                        height: 25,
                        width: 75,
                        x: 50,
                        y: 400,
                    }
                ]
            },
        );

        // COMPARE SCREEN WITH ELEMENT BLOCKOUTS
        driver.compareScreen(
            'new-compareScreen-elementBlockOuts',
            {
                elementBlockOuts: [
                    // block out element 1
                    {
                        element: LoginScreen.loginButton
                    },
                    // block out element 2 (shorthand) with margin
                    {
                        element: LoginScreen.username,
                        margin: 50
                    },
                ]
            },
        );
    });

    it('should be able to save or compare an element', () => {
        // // SAVE ELEMENT
        // driver.saveElement(LoginScreen.loginButton, 'saveElement');
        //
        // // SAVE ELEMENT WITH POSITIVE RESIZED DIMENSIONS
        // driver.saveElement(
        //     LoginScreen.loginButton,
        //     'saveElement-positive-resized', {
        //         resizeDimensions: {
        //             top: 200,
        //             right: 20,
        //             bottom: 100,
        //             left: 40,
        //         }
        //     });
        //
        // // SAVE ELEMENT WITH NEGATIVE RESIZED DIMENSIONS
        // driver.saveElement(
        //     LoginScreen.loginButton,
        //     'saveElement-negative-resized',
        //     {
        //         resizeDimensions: {
        //             top: -40,
        //             right: -20,
        //             bottom: -70,
        //             left: -250,
        //         },
        //     });
        //
        //
        // // COMPARE ELEMENT
        // driver.compareElement(
        //     LoginScreen.loginButton,
        //     'new-compareElement-crop-method',
        //     {
        //         resizeDimensions: {},
        //     },
        // );
        // driver.compareElement(
        //     LoginScreen.loginButton,
        //     'new-compareElement-direct-method',
        // );
        LoginScreen.signIn(LOGIN_USERS.STANDARD);
        InventoryListScreen.waitForIsShown();

        const result = driver.compareElement(
            InventoryListScreen.swagItem('Sauce Labs Backpack'),
            'backpack',
            {
                elementBlockOuts: [
                    // block out element 1
                    {
                        element: InventoryListScreen.swagItem('Sauce Labs Backpack').$$('~test-Price')[0],
                        margin: 50
                    },
                    {
                        element: InventoryListScreen.swagItem('Sauce Labs Backpack').$$('~test-Item title')[0]
                    },
                    {
                        element: InventoryListScreen.swagItem('Sauce Labs Backpack').$$('~test-ADD TO CART')[0],
                        margin: 50
                    },
                    // // block out element 2 (shorthand) with margin
                    // {
                    //     element: LoginScreen.username,
                    //     margin: 50
                    // },
                ]
            },
        );

        console.log('result = ', result)
    });
});
