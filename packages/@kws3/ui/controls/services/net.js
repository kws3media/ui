import EventEmitter from "microevent";
import "promis";
import Ajax from "./ajax";

var network = function () {
  var self = this,
    key = { access_token: "", refresh_token: "", expires_in: null };

  EventEmitter.mixin(self);

  function send(params, isRaw, noApiKey) {
    return new Promise(function (fulfil, reject) {
      if (typeof params.headers == "undefined") {
        params.headers = {};
      }
      if (!noApiKey) {
        params.headers["Api-key"] = key.access_token;
      }

      Ajax(params, function (code, response, xhr) {
        var resp = {};
        if (code >= 200 && code < 400) {
          if (isRaw) {
            fulfil(response);
          } else {
            try {
              resp = JSON.parse(response);
            } catch (e) {
              console.log(e);
            }

            if (typeof resp.records != "undefined") {
              fulfil({
                code: code,
                response: resp.records,
                xhr: xhr,
                headers: xhr.getAllResponseHeaders(),
                _meta: resp._meta,
              });
            } else {
              //self.trigger("httpError", 501);
              reject({ code: code, response: response });
            }
          }
        }
      });
    });
  }

  self.raw = function (params, noApiKey) {
    return send(params, true, noApiKey);
  };

  self.ajax = function (params) {
    return send(params);
  };
};

//this ensures a singleton of this class
export default new network();
