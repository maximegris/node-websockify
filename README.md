# WebSocket-to-TCP proxy/bridge in NodeJS (forked & inspired by https://github.com/novnc/websockify)
[![Build Status](https://travis-ci.org/maximegris/node-websockify.svg?branch=master)](https://travis-ci.org/maximegris/node-websockify) 
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://github.com/maximegris/node-websockify/blob/master/LICENSE.md)


Node-websockify is a WebSocket-to-TCP proxy/bridge you can use in a NodeJS program. 

As said it is inspired of the javascript library of https://github.com/novnc/websockify. Sadly this librairy can't be used directly in a nodeJS program taht's why I created this project.

## Usage ##

Import this module in your project

```bash
npm install --save node-websockify
```

Require the module and call the main function in your programm code

```javascript
var websockify = require('@maximegris/node-websockify');
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
var websockify = require('@maximegris/node-websockify');
websockify({  source: '127.0.0.1:8080', target: '192.168.0.100:5900'});
```

## Options ##

| Alias  | Values  | Default  |
|---|---|---|
| source | URL of websocket Server | null |
| target | URL of the VNC Server  | null  |
| web | Directory of static sources exposed by the server | null  (optional) |
| cert | Path of the SSL certificate | null (optional) |
| key | Key of the SSL certificate | null (optional) |

