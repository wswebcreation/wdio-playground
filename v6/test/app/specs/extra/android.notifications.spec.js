describe('Appium for Android', () => {
    it('should be able to get the notifications', () => {
        // for demo purpose
        driver.pause(3000);

        // Use Appium ADB commands to set the setting
        driver.execute(
            'mobile: shell',
            {
                command: 'cmd notification allow_listener io.appium.settings/io.appium.settings.NLService',
            },
        );

        const notifications = driver.execute(
            'mobile: getNotifications',
        );

        console.log('notifications = ', JSON.stringify(notifications, null, 2));

        // for demo purpose
        driver.pause(3000);
    });
});

// enabled_notification_listeners=io.appium.settings/io.appium.settings.notifications.mylistener:io.appium.settings/io.appium.settings.notifications:com.google.android.apps.nexuslauncher/com.android.launcher3.notification.NotificationListener:com.google.android.apps.restore/com.google.android.apps.pixelmigrate.component.NotificationConsolidatorService:io.appium.settings/io.appium.settings.mylistener
// enabled_notification_listeners=io.appium.settings/io.appium.settings.notifications.mylistener:io.appium.settings/io.appium.settings.notifications:com.google.android.apps.nexuslauncher/com.android.launcher3.notification.NotificationListener:com.google.android.apps.restore/com.google.android.apps.pixelmigrate.component.NotificationConsolidatorService:io.appium.settings/io.appium.settings.mylistener
