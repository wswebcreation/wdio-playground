#!/bin/bash
#curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY -X POST -H "Content-Type: application/octet-stream" https://eu-central-1.saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/sample-app-android.apk?overwrite=true --data-binary @sample-app-android.apk
#curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY -X POST -H "Content-Type: application/octet-stream" https://eu-central-1.saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/sample-app-ios.zip?overwrite=true --data-binary @sample-app-ios.zip
#curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY -X POST -H "Content-Type: application/octet-stream" https://saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/sample-app-ios.zip?overwrite=true --data-binary @sample-app-ios.zip
curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY -X POST -H "Content-Type: application/octet-stream" https://saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/sample-app-android.apk?overwrite=true --data-binary @sample-app-android.apk
#curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY -X POST -H "Content-Type: application/octet-stream" https://eu-central-1.saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/draw.apk?overwrite=true --data-binary @draw.apk
