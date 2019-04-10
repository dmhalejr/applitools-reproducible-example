#!/bin/bash

# This should be removed once this is merged: https://github.com/applitools/Eyes.Sdk.JavaScript/pull/71
EYES_SDK_OLD_TYPES="./node_modules/eyes.sdk/typings/index.d.ts"
EYES_SDK_NEW_TYPES="./scripts/typings/eyes.sdk/index.d.ts"

if cmp -s "$EYES_SDK_OLD_TYPES" "$EYES_SDK_NEW_TYPES" ; then
  echo "Type does not need to update"
else
  echo "Remove old typing that is broken"
  rm -rf $EYES_SDK_OLD_TYPES

  echo "Add our copy before updated"
  cp $EYES_SDK_NEW_TYPES $EYES_SDK_OLD_TYPES
fi

EYES_SELENIUM_OLD_TYPES="./node_modules/eyes.selenium/typings/index.d.ts"
EYES_SELENIUM_NEW_TYPES="./scripts/typings/eyes.selenium/index.d.ts"

if cmp -s "$EYES_SELENIUM_OLD_TYPES" "$EYES_SELENIUM_NEW_TYPES" ; then
  echo "Type does not need to update"
else
  echo "Remove old typing that is broken"
  rm -rf $EYES_SELENIUM_OLD_TYPES

  echo "Add our copy before updated"
  cp $EYES_SELENIUM_NEW_TYPES $EYES_SELENIUM_OLD_TYPES
fi