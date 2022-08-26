//@ts-check
export default function (password, options) {
  const result = {
    items: [],
    overall: false,
  };

  /**
   * @typedef {object} ValidationOption
   * @property {string} name
   * @property {string} text
   * @property {string} identifier
   * @property {RegExp} regex
   * @property {boolean} passed
   * @property {boolean} active
   * @property {number} [value]
   * @property {boolean} [negate]
   */

  result.items = (options || []).slice().map((_opt) => {
    /** @type {ValidationOption} */
    const opt = Object.assign({}, _opt);
    if (opt && opt.active) {
      if (opt.name === "kws_pv_min_length") {
        if (
          typeof opt.value != "undefined" &&
          password &&
          password.length >= opt.value
        ) {
          opt.passed = true;
        }
      } else {
        let passed = new RegExp(opt.regex).test(password);
        if (typeof opt.negate != "undefined" && opt.negate) {
          opt.passed = !passed;
        } else {
          opt.passed = passed;
        }
      }
    }
    return opt;
  });

  result.overall =
    result.items.filter((/** @type {ValidationOption} */ el) => el.passed)
      .length === result.items.length;

  return result;
}
