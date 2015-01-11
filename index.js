var request = require('request');

function buildJsonResponse(cb) {
    return function(err, res, body) {
        if (err || !body) {
            return cb(err);
        }
        var json = JSON.parse(body);
        if (!json) {
            return cb('Request contains no JSON data');
        }
        cb(null, json);
    };
}

module.exports = function(settings) {

    var sp = {};

    sp.get = function(path, cb) {
        var config = {
            headers: {
                Accept: "application/json;odata=verbose"
            },
            strictSSL: settings.strictSSL,
            url: settings.siteUrl + path
        };

        request.get(config, buildJsonResponse(cb)).auth(settings.user, settings.pass, true);
        return sp;
    };

    sp.getLists = function(cb) {
        sp.get("/_api/lists", cb);
        return sp;
    };

    return sp;

};