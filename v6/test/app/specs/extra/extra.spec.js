describe('test', () => {
    it('should login', () => {
        $('~usernameInput').waitForDisplayed({timeout: 15000});

        $('~usernameInput').addValue('ehealthuat');
        $('~passwordInput').addValue('wellpoint1');
        $('~signInButton').click();

        $('~usernameInput').waitForDisplayed({timeout: 15000, reverse: true});
    });
});
