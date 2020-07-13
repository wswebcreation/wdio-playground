import LoginScreen from '../../screenObjects/login';
import InventoryListScreen from '../../screenObjects/inventoryList';
import {restartApp} from '../../helpers/utils';
import {LOGIN_USERS} from '../../../configs/e2eConstants';

describe('Login', () => {
    beforeEach(() => {
        restartApp();
        LoginScreen.waitForIsShown();
    });

    fit('should be able to login with a standard user', () => {
        console.log('driver = ', driver)
        LoginScreen.signIn(LOGIN_USERS.STANDARD);
        expect(InventoryListScreen.isShown()).toEqual(true, 'Inventory List screen was not shown');
    });

    it('should not be able to login with a locked user', () => {
        LoginScreen.signIn(LOGIN_USERS.LOCKED);

        expect(LoginScreen.getErrorMessage()).toContain('Sorry, this user has been locked out.', 'The error message is not as expected');
    });

    it('should show an error when no username is provided', () => {
        LoginScreen.signIn(LOGIN_USERS.NO_USER_DETAILS);

        expect(LoginScreen.getErrorMessage()).toContain('Username is required', 'The error message is not as expected');
    });

    it('should show an error when no password is provided', () => {
        LoginScreen.signIn(LOGIN_USERS.NO_PASSWORD);

        expect(LoginScreen.getErrorMessage()).toContain('Password is required', 'The error message is not as expected');
    });

    it('should show an error when no match is found', () => {
        LoginScreen.signIn(LOGIN_USERS.NO_MATCH);

        expect(LoginScreen.getErrorMessage()).toContain('Username and password do not match any user in this service.', 'The error message is not as expected');
    });
});


const androidDriver = {
    sessionId: '{sessionId}',
    capabilities: {
        platform: 'LINUX',
        webStorageEnabled: false,
        takesScreenshot: true,
        javascriptEnabled: true,
        databaseEnabled: false,
        networkConnectionEnabled: true,
        locationContextEnabled: false,
        warnings: {},
        desired: {
            suppressKillServer: true,
            chromedriverPorts: [Array],
            chromedriverChromeMappingFile: '/root/.testobject_devices/work/chromedriver-mapping.json',
            adbPort: 15008,
            chromedriverExecutableDir: '/root/.testobject_devices/work/chromedrivers',
            systemPort: 8208,
            appPackage: 'com.swaglabsmobileapp',
            orientation: 'PORTRAIT',
            testobject_platform_name: 'Android',
            testobject_test_name: 'sample-app-mobile',
            appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
            testobject_device: 'Samsung Galaxy S.*',
            deviceName: 'Samsung_Galaxy_S10_ws',
            cacheId: 1593505859735,
            appActivity: 'com.swaglabsmobileapp.SplashActivity',
            testobject_tablet_only: false,
            newCommandTimeout: 180,
            idleTimeout: 180,
            automationName: 'UiAutomator2',
            testobject_api_key: '7FCCB924DC2F4D71941F64237D3CE5FA',
            platformName: 'Android',
            testobject_phone_only: true
        },
        suppressKillServer: true,
        chromedriverPorts: [[Array]],
        chromedriverChromeMappingFile: '/root/.testobject_devices/work/chromedriver-mapping.json',
        adbPort: 15008,
        chromedriverExecutableDir: '/root/.testobject_devices/work/chromedrivers',
        systemPort: 8208,
        appPackage: 'com.swaglabsmobileapp',
        orientation: 'PORTRAIT',
        testobject_platform_name: 'Android',
        testobject_test_name: 'sample-app-mobile',
        appWaitActivity: 'com.swaglabsmobileapp.MainActivity',
        testobject_device: 'Samsung_Galaxy_S10_ws',
        deviceName: '10.102.48.17:16025',
        cacheId: 1593505859735,
        appActivity: 'com.swaglabsmobileapp.SplashActivity',
        testobject_tablet_only: false,
        newCommandTimeout: 180,
        idleTimeout: 180,
        automationName: 'UiAutomator2',
        testobject_api_key: '{testobject_api_key}',
        platformName: 'Android',
        testobject_phone_only: true,
        deviceUDID: '10.102.48.17:16025',
        deviceApiLevel: 28,
        platformVersion: '9',
        deviceScreenSize: '1440x3040',
        deviceScreenDensity: 560,
        deviceModel: 'SM-G973F',
        deviceManufacturer: 'samsung',
        pixelRatio: 3.5,
        statBarHeight: 150,
        viewportRect: {left: 0, top: 150, width: 1440, height: 2573},
        testobject_test_report_api_url: 'https://app.testobject.com/api/rest/v2/reports/148',
        testobject_test_report_url: 'https://app.testobject.com/#/wim-selles/sauce-labs-sample-app-android/appium/executions/148',
        testobject_test_live_view_url: 'https://app.testobject.com/#/wim-selles/sauce-labs-sample-app-android/appium/view/148?dc=EU',
        testobject_user_id: 'wim-selles',
        testobject_project_id: 'sauce-labs-sample-app-android',
        testobject_test_report_id: 148,
        testobject_device_name: 'Samsung Galaxy S10',
        testobject_device_session_id: 'bf6b455a-6f25-4d9f-b288-b8201c98b130',
        deviceContextId: '894d572d-d5ed-4aa4-bb7e-f07c59386140'
    },
}
