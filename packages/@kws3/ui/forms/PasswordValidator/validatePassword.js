export default function (password) {
  var result = {
      overall: false,
      min_length: false,
      special: false,
      uppercase: false,
      lowercase: false,
      digit: false,
    },
    regex = {
      min_length: 8,
      special: "[^A-Za-z0-9]", // Special Character
      uppercase: "[A-Z]", // Uppercase Alphabets
      lowercase: "[a-z]", // Lowercase Alphabets
      digit: "[0-9]", // Numbers
    };

  Object.entries(regex).forEach((item) => {
    if (item[0] == "min_length") {
      if (password && password.length >= item[1]) {
        result[item[0]] = true;
      }
    } else {
      if (new RegExp(item[1]).test(password)) {
        result[item[0]] = true;
      }
    }
  });

  var passed = 0,
    values = Object.values(result);
  values.forEach((item) => {
    if (item) {
      passed++;
    }
  });
  if (passed == values.length - 1) {
    result.overall = true;
  }

  return result;
}
