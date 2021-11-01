# get-osx-version

![Build Status](https://github.com/fscherwi/get-osx-version/actions/workflows/ci.yml/badge.svg)

Get the macOS versions from the current system!

# Install

```sh
npm install get-osx-version --save
```

# Usage

Output your current macOS version!

```javascript
const {macOSVersion} = require('get-osx-version');

console.log('macOS version: ' + macOSVersion());
```
