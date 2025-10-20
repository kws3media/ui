import { cloneObject } from "@kws3/ui/utils";
import { derived, get, writable } from "svelte/store";

/** @type {import("@kws3/ui/types").MakeForms} */
// @ts-ignore
const makeForms = (items) => {
  if (Array.isArray(items)) {
    return items.map((item) => formMaker(item));
  } else {
    return formMaker(items);
  }
};

/**
 * @param {import("@kws3/ui/types").FormMakerConfig} config
 * @returns
 */
const formMaker = (config) => {
  let data = config.data || {};
  let validators = config.validators || {};
  let strictMode = config.strictMode || false;
  let tracker_data = {
    saving: false,
    saved: false,
    error: false,
  };

  const formData = writable(cloneObject(data));

  const tracker = writable(cloneObject(tracker_data));

  const touched = derived(formData, ($formData, set) => {
    let fields = Object.keys($formData);
    let res = fields.reduce((o, v) => ((o[v] = false), o), {});

    /**
     * @param {string} field
     * @param {{ [x: string]: any }} oldData
     * @param {{ [x: string]: any }} newData
     * @returns
     */
    let compare = (field, oldData, newData) => {
      if (typeof oldData === "undefined" && typeof newData !== "undefined") {
        return true;
      }
      if (typeof newData === "undefined" && typeof oldData !== "undefined") {
        return true;
      }
      if (Array.isArray(newData[field])) {
        if (
          !Array.isArray(oldData[field]) ||
          (Array.isArray(oldData[field]) &&
            oldData[field].length !== newData[field].length)
        ) {
          return true;
        }
      } else if (
        typeof newData[field] === "object" &&
        newData[field] !== null
      ) {
        let ret = {};
        for (let key in newData[field]) {
          ret[key] = compare(key, oldData[field], newData[field]);
        }
        return ret;
      } else {
        if (!strictMode) {
          if (
            (oldData[field] === null &&
              [0, "", false].indexOf(newData[field]) !== -1) ||
            (oldData[field] === 0 && newData[field] === false) ||
            (oldData[field] === 1 && newData[field] === true)
          ) {
            return false;
          }
        }

        if (oldData[field] !== newData[field]) {
          return true;
        }
      }
      return false;
    };

    if (fields.length) {
      fields.forEach((field) => {
        res[field] = compare(field, data, $formData);
      });
    }

    set(res);
  });

  const errors = derived(formData, ($formData, set) => {
    let fields = Object.keys(validators) || [];
    let res = fields.reduce((o, v) => ((o[v] = ""), o), {});
    /**
     * @param {string} field
     * @param {function | function[]} validator
     * @returns
     */
    let validate = (field, validator) => {
      let message = "";
      if (validator || typeof validator !== "undefined") {
        if (Array.isArray(validator)) {
          for (let i = 0; i < validator.length; i++) {
            message = validate(field, validator[i]);
            if (message) {
              break;
            }
          }
        } else {
          message = validator($formData[field], $formData);
        }
      }
      return message;
    };

    if (fields.length) {
      fields.forEach((field) => {
        res[field] = validate(field, validators[field]);
      });
    }
    set(res);
  });

  const isTouched = derived(touched, ($touched, set) => {
    let find = (fields) =>
      Object.values(fields).some((field) => {
        if (typeof field === "object") {
          return find(field);
        } else {
          return field === true;
        }
      });
    set(find($touched));
  });

  const isValid = derived(errors, ($errors) =>
    Object.values($errors).every((v) => v === ""),
  );

  /** @param {{ [key: string]: any }} newData */
  function update(newData) {
    data = newData;
    reset();
  }

  /** @param {import("@kws3/ui/types").FormMakerConfig["validators"]} newValidators */
  function setValidators(newValidators) {
    validators = newValidators;
    formData.set(get(formData));
  }

  /** @param {Event | null} e */
  function reset(e = null) {
    e && e.preventDefault();
    formData.set(cloneObject(data));
    tracker.set(cloneObject(tracker_data));
  }

  return {
    formData,
    errors,
    touched,
    isValid,
    isTouched,
    tracker,
    update,
    reset,
    setValidators,
  };
};

/**
 * @param {string} v
 * @returns
 */
const notEmpty = (v) => v && v.trim() !== "";

/**
 * @param {string} v
 * @returns
 */
const noDigits = (v) => !/\d/.test(v);

/**
 * @param {string} msg
 * @param {function} fn
 * @returns
 */
const withMsg =
  (msg, fn) => (/** @type {any} */ v, /** @type {object} */ otherFields) =>
    fn(v, otherFields) ? "" : msg;

export { makeForms, noDigits, notEmpty, withMsg };
