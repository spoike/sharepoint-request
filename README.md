# sharepoint-request

Simple `request` wrapper to access Sharepoint 2013 REST API for NodeJS applications

## Installation

Install with npm like this:

```sh
npm install sharepoint-request
```

## Usage

To start using the module, call it with a settings object with basic auth credentials and site url:

```javascript
var sp_request = require('sharepoint-request')({
    user: process.env.SP_USERNAME,
    pass: process.env.SP_PASSWORD,
    siteUrl: 'http://www.mysharepoint.com/subsite',
    strictSSL: true
});

// continue using sp_request, e.g. .get(...)
sp_request.get('/_api/lists', function(err, jsonData) {
    // ...
});
```

The sharepoint site needs to have basic auth on.

## API

### `get(path, cb)`

Makes a GET request on given path.

* `path {String}` 
    
  The path to request

* `cb {Function (err, jsonData)}` 
  
  The callback with error or data from the response

### `getLists(cb)`

Convenience function to get all lists using `/_api/lists`.

* `cb {Function (err, jsonData)}` 
  
  The callback with error or data from the response

## Colophon

MIT (c) 2015 Mikael Piotrowski