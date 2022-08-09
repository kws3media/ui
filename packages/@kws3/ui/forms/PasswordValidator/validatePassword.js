//@ts-check
export default function (password, options) {
  const result = {
    items: [],
    overall: false,
  };

  result.items = (options || []).slice().map((_opt) => {
    const opt = Object.assign({}, _opt);
    if (opt && opt.active) {
      if (opt.name === "kws_pv_min_length") {
        if (password && password.length >= opt.value) {
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
    result.items.filter((el) => el["passed"]).length === result.items.length;

  return result;
}
