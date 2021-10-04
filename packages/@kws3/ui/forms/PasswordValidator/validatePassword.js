export default function (password, options) {
  const result = {
    items: [],
    overall: false,
  };

  result.items = (options || []).slice().map((_opt) => {
    const opt = Object.assign({}, _opt);
    if (opt && opt.active) {
      if (opt.name == "kws_min_length") {
        if (password && password.length >= opt.value) {
          opt.passed = true;
        }
      } else {
        if (new RegExp(opt.regex).test(password)) {
          opt.passed = true;
        }
      }
    }
    return opt;
  });

  result.overall =
    result.items.filter((el) => el.passed).length == result.items.length;

  return result;
}
