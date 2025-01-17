# Expo Image Component URI Encoding Issue

This repository demonstrates a bug where Expo's Image component fails to load images when the URI contains special characters (spaces, accented characters, etc.).  The issue is resolved by URL-encoding the URI before passing it to the Image component.

## Bug Description
The `Image` component from Expo doesn't throw any errors when it fails to load an image with special characters in its URI, making debugging difficult.  This example shows how to reproduce the bug and provides a solution.

## Reproduction
1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe that the image with special characters fails to load.

## Solution
The solution involves URL encoding the URI using the `encodeURI` function before passing it to the `Image` component.