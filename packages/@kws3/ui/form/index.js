import { cloneObject } from "../utils/index";
import { derived, get, writable } from "svelte/store";

const makeForms = (items) => {
  var res = Array.isArray(items);
  if (!res) {
    return formMaker(items);
  }

  let ret = [];
  if (items.length) {
    items.forEach((item) => ret.push(formMaker(item)));
  }
  return ret;
};

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

    let compare = (field, oldData, newData) => {
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
    Object.values($errors).every((v) => v === "")
  );

  function update(newData) {
    data = newData;
    reset();
  }

  function setValidators(newValidators) {
    validators = newValidators;
    formData.set(get(formData));
  }

  function reset(e) {
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

const notEmpty = (v) => v && v.trim() !== "";

const noDigits = (v) => !/\d/.test(v);

const withMsg = (msg, fn) => (v, otherFields) => fn(v, otherFields) ? "" : msg;

export { makeForms, notEmpty, noDigits, withMsg };
