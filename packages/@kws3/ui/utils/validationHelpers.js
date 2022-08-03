const notEmpty = (v) => v && v.trim() !== "";

const noDigits = (v) => !/\d/.test(v);

const withMsg = (msg, fn) => (v, otherFields) => fn(v, otherFields) ? "" : msg;

export { notEmpty, noDigits, withMsg };
