describe('Load times', () => {
    beforeAll(()=>{
        // To get the page load time
        browser.addCommand('getPageLoadTime', function () {
            return browser.executeAsync(asyncPageLoadTime);
        });

        // To get the load time between clicking on an element and the time it takes to wait for an element to be present
        browser.addCommand('getClickAndWaitDurationTime', function (buttonSelector, waitElementSelector) {
            return browser.executeAsync(getClickAndWaitDurationTime, buttonSelector.selector, waitElementSelector.selector);
        });
    });

    it('should give back page and click loading times', () => {
        browser.url('https://www.saucedemo.com');
        const browserName = browser.capabilities.browserName
        const homeLoadTime = browser.getPageLoadTime();

        expect(homeLoadTime).toBeLessThan(3000);

        // Just log the times with the browser name
        console.log(`${browserName} -> homeLoadTime = `, homeLoadTime);

        // Login
        $('#user-name').waitForDisplayed();
        $('#user-name').setValue('standard_user');
        $('#password').setValue('secret_sauce');
        $('#login-button').click();

        // Wait for the product screen to be loaded
        $('.inventory_container').waitForDisplayed();

        const productsLoadTime = browser.getPageLoadTime();
        expect(productsLoadTime).toBeLessThan(3000);

        // Just log the times with the browser name
        console.log(`${browserName} -> productsLoadTime = `, productsLoadTime);

        // Click on a button and get the duration time
        const clickAndWaitTime = browser.getClickAndWaitDurationTime(
            $('#inventory_container > div > div:nth-child(1) > div.pricebar > button'),
            $('.shopping_cart_badge'),
        );

        expect(clickAndWaitTime).toBeLessThan(500);

        // Just log the times with the browser name
        console.log(`${browserName} -> clickAndWaitTime = `, clickAndWaitTime);
    });
});

function asyncPageLoadTime(done,) {
    function check() {
        if (performance.getEntriesByType("navigation")[0].loadEventEnd) {
            timing()
        } else setTimeout(check, 0); //put it back in queue
    }

    function timing() {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

        done(pageLoadTime);
    }

    check();
}


/**
 * Check if the loader spinner is gone with an async script
 * @param {string} selector
 * @param done
 *
 * @return {boolean}
 */
function getClickAndWaitDurationTime(buttonSelector, waitElementSelector, done) {
    var timeoutId, intervalId;
    var maxTimeout = 60000;
    performance.mark('beginClickAndWait');
    document.querySelector(buttonSelector).click();

    intervalId = setInterval(function checkFinishButtonDone() {
        var button = document.querySelector(waitElementSelector);
        if (button !== null && isVisible(button)) {
            clearInterval(timeoutId);
            clearInterval(intervalId);
            done(getDataAndStopMeasurements());
        }
    }, 1);

    /* cancel interval check after maxTimeout */
    timeoutId = setTimeout(function cancelIntervals() {
        clearInterval(timeoutId);
        clearInterval(intervalId);
        getDataAndStopMeasurements();
        done('no duration could be measured');
    }, maxTimeout);

    function getDataAndStopMeasurements() {
        performance.mark('endClickAndWait');
        performance.measure('measureClickAndWait', 'beginClickAndWait', 'endClickAndWait');

        const {duration = 0} = performance.getEntriesByName('measureClickAndWait')[0]

        performance.clearMeasures();
        console.log('duration = ', duration);

        return duration;
    }

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
//
// // To get the page load time
// browser.addCommand('getPageLoadTime', function () {
//     return browser.executeAsync(asyncPageLoadTime);
// });
//
// // To get the load time between clicking on an element and the time it takes to wait for an element to be present
// browser.addCommand('getClickAndWaitDurationTime', function (buttonSelector, waitElementSelector) {
//     return browser.executeAsync(getClickAndWaitDurationTime, buttonSelector.selector, waitElementSelector.selector);
// });
