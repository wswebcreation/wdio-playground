describe('Complex flow', () => {
    it('should be able to verify the performance of a website', () => {
        // browser.execute('sauce:debug', {
        //     method: 'Emulation.setUserAgentOverride',
        //     params: { userAgent: '\'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 7 Build/MOB30X) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3765.0 Safari/537.36' }
        // })
        // browser.execute('sauce:debug', {
        //     method: 'Emulation.setDeviceMetricsOverride',
        //     params: {
        //         width: 600,
        //         height: 960,
        //         deviceScaleFactor: 2,
        //         mobile: true
        //     }
        // })
        // browser.throttleNetwork('Wifi')
        // browser.execute('sauce:debug', {
        //     method: 'Emulation.setCPUThrottlingRate',
        //     params: { rate: 4 }
        // })

        browser.url('https://www.boots.com/');

        // Close the ship to overlay
        browser.keys('\uE007')

        $('=Shop all sale').click()

        $('#signInQuickLink').click()

        // /**
        //  * run jankiness check
        //  */
        // const result = browser.execute('sauce:jankinessCheck');
        //
        // /**
        //  * assert the jankiness score to be above 90%
        //  */
        // expect(result.score > 0.9).toEqual(true);
    });
});
