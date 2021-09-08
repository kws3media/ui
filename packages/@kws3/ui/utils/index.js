export function truncate(str, len) {
  return str && str.length >= len + 3 ? str.substr(0, len) + "..." : str;
}

export function nl2br(input) {
  if (!input) {
    return "";
  }
  return (input + "").replace(/\n/g, "<br>");
}

export function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export var rAF =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.oRequestAnimationFrame ||
  window.msRequestAnimationFrame ||
  function (callback, element) {
    window.setTimeout(callback, 1000 / 60);
  };

export function debounce(fn, threshold, isAsap) {
  var timeout, result;
  function debounced() {
    var args = arguments,
      context = this;
    function delayed() {
      if (!isAsap) {
        result = fn.apply(context, args);
      }
      timeout = null;
    }
    if (timeout) {
      clearTimeout(timeout);
    } else if (isAsap) {
      result = fn.apply(context, args);
    }
    timeout = setTimeout(delayed, threshold || 100);
    return result;
  }
  debounced.cancel = function () {
    clearTimeout(timeout);
  };
  return debounced;
}

export function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
}

export function isEnterKey(e) {
  return e.keyCode && e.keyCode === 13;
}

export function isEscKey(e) {
  return e.keyCode && e.keyCode === 27;
}
