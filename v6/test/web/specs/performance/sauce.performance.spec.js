import LoginScreen from "../../page-objects/LoginPage";
import {LOGIN_USERS} from "../../../configs/e2eConstants";

describe('Sauce Performance Testing', () => {
    beforeEach(() => {
        browser.url('')
        LoginScreen.signIn(LOGIN_USERS.PERFORMANCE);
    });

    it('logs (sauce:performance) should check if all metrics were captured', () => {
        const metrics = [
            'estimatedInputLatency',
            'timeToFirstByte',
            'domContentLoaded',
            'firstVisualChange',
            'firstPaint',
            'firstContentfulPaint',
            'firstMeaningfulPaint',
            'lastVisualChange',
            'firstCPUIdle',
            'firstInteractive',
            'load',
            'speedIndex',
        ];
        const performance = browser.execute('sauce:log', {type: 'sauce:performance'});

        metrics.forEach(metric =>
            expect(metric in performance).toEqual(true, `${metric} metric is missing`)
        );
    });

    /**
     * The custom command will return 'pass' if the test falls within the predicted baseline
     * or 'fail'  if the performance metric falls outside the predicted baseline.
     * customers can decide how strict they want to be in failing tests by setting their own
     * failure points.
     */
    it('(sauce:performance) custom command should assert pageload and speedIndex has not regressed', () => {
        const output = browser.execute('sauce:performance', {
            name: 'Sauce Labs Performance Example',
            metrics: ['speedIndex', 'load'],
        })
        const {result, details} = output

        expect(result).toEqual(
            'pass',
            `Regression detected for metrics ${JSON.stringify(details, null, 4)}`,
        );
    });
});
