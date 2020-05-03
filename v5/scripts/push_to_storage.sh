#!/bin/bash
curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY -X POST -H "Content-Type: application/octet-stream" https://saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/auth-edge.exe?overwrite=true --data-binary @auth-edge.exe
