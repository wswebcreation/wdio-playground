describe('JavaScript Alerts', () => {
    describe('Alert', () => {
        it('should be able to accept', () => {
            browser.url('https://the-internet.herokuapp.com/javascript_alerts');

            expect($('#result').getText()).toEqual('');

            $('[onclick="jsAlert()"]').click();
            browser.acceptAlert();

            expect($('#result').getText()).toEqual('You successfuly clicked an alert');
        });
    });

    describe('Confirm', () => {
        it('should be able to accept the confirm', () => {
            browser.url('https://the-internet.herokuapp.com/javascript_alerts');

            expect($('#result').getText()).toEqual('');

            $('[onclick="jsConfirm()"]').click();
            browser.acceptAlert();

            expect($('#result').getText()).toEqual('You clicked: Ok');
        });
        it('should be able to cancel the confirm', () => {
            browser.url('https://the-internet.herokuapp.com/javascript_alerts');

            expect($('#result').getText()).toEqual('');

            $('[onclick="jsConfirm()"]').click();
            browser.dismissAlert();

            expect($('#result').getText()).toEqual('You clicked: Cancel');
        });
    });

    describe('Prompt', () => {
        it('should be able to submit data', () => {
            const text = 'The prompt text is this';

            browser.url('https://the-internet.herokuapp.com/javascript_alerts');

            expect($('#result').getText()).toEqual('');

            $('[onclick="jsPrompt()"]').click();

            browser.sendAlertText(text);
            browser.acceptAlert();

            expect($('#result').getText()).toEqual(`You entered: ${ text }`);
        });
    });
});
