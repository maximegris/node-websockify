# Liquibase Changelog Maven Plugin 
[![Build Status](https://travis-ci.org/maximegris/node-websockify.svg?branch=master)](https://travis-ci.org/maximegris/node-websockify) 
[![License](https://img.shields.io/badge/license-Apache2-blue.svg?style=flat)](https://github.com/maximegris/node-websockify/blob/master/LICENSE.md)


Node-websockify is a WebSocket-to-TCP proxy/bridge you can use in a NodeJS program.

## Usage ##

Import this module in your project

```bash
npm install --save maximegris/node-websockify
```

Require the module and call the main function in your programm code

```javascript
var websockify = require('node-websockify');
websockify({
source: 'url:port',
target: 'url:port',
web : './directory',
cert: 'certSSL',
key: 'certSSL-key'
});
```

Example :

```javascript
var websockify = require('node-websockify');
websockify({
  source: '127.0.0.1:8080',
  target: '192.168.0.100:5900'
});
```

## Options ##

| Alias  | Values  | Default  |
|---|---|---|
| source | URL of websocket Server | null |
| target | URL of the VNC Server  | null  |
| web | Directory of static sources exposed by the server | null  (optional) |
| cert | Pattern of file to add in master changelog. Get all files in resources directory if not defined | null (optional) |
| key | Apply a custom sort pattern on some files. During comparison, if one or both files don't match the pattern, it use String.equals | null (optional) |

