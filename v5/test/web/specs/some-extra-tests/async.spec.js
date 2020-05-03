describe('executeAsyncScript', () => {
    beforeEach(()=>{
        browser.url('https://foxandxss.github.io/angular-toastr/');
        $('[ng-click="clearToasts()"]').click();
        $('#toastTimeout').setValue('150');
    });

    it('should be able to wait for a toaster with the waitForVisible method', () => {
        $('[ng-click="openPinkToast()"]').click();
        expect($('#toast-container').waitForDisplayed(5000)).toEqual(true, 'The toaster should be there.')
    });

    it('should be able to wait for a toaster with the executeAsync method', () => {
        browser.pause(5000);
        $('[ng-click="openPinkToast()"]').click();
        expect(browser.executeAsync(asyncCheck, '#toast-container')).toEqual(true, 'The toaster should be there.')
    });
});

/**
 * Check if the loader spinner is gone with an async script
 * @param {string} selector
 * @param done
 *
 * @return {boolean}
 */
function asyncCheck(selector, done) {
    var animationDone = false, timeoutId, intervalId;
    var maxTimeout = 15000;

    intervalId = setInterval(function checkFinishButtonDone() {
        var button = document.querySelector(selector);
        if (button !== null && isVisible(button)) {
            animationDone = true;
            clearInterval(timeoutId);
            clearInterval(intervalId);
            done(animationDone);
        }
    }, 50);

    /* cancel interval check after maxTimeout */
    timeoutId = setTimeout(function cancelIntervals() {
        clearInterval(timeoutId);
        clearInterval(intervalId);
        done(animationDone);
    }, maxTimeout);

    function isVisible(elem) {
        var style = getComputedStyle(elem);

        /* check some default styles */
        if (style.display === 'none') return false;
        if (style.visibility !== 'visible') return false;
        if (+style.opacity < 0.1) return false;
        if (elem.offsetWidth + elem.offsetHeight + elem.getBoundingClientRect().height + elem.getBoundingClientRect().width === 0) {
            return false;
        }

        /* Check if position of element is not outside the screen */
        const elemCenter = {
            x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
            y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
        };
        if (elemCenter.x < 0) return false;
        if (elemCenter.x > (document.documentElement.clientWidth || window.innerWidth)) return false;
        if (elemCenter.y < 0) return false;
        if (elemCenter.y > (document.documentElement.clientHeight || window.innerHeight)) return false;
        var pointContainer = document.elementFromPoint(elemCenter.x, elemCenter.y);
        do {
            if (pointContainer === elem) return true;
        } while (pointContainer = pointContainer.parentNode);
        return false;
    }
}
