import flatpickr from "flatpickr";

export default function datepicker(node, [opts, value]) {
  const _opts = {};
  const hooks = [
    "onOpen",
    "onClose",
    "onMonthChange",
    "onYearChange",
    "onReady",
  ];

  //add event dispatcher for each flatpicker event
  hooks.forEach((hook) => {
    //remove "on"
    const hk = hook.charAt(2).toLowerCase() + hook.substring(3);
    const firer = createFirer(hk);
    _opts[hook] = firer;
  });

  //special handler for onChange, so that it does not clobber
  //native on change event of the input
  _opts["onChange"] = createFirer("dateChange");

  opts = Object.assign(
    {
      altInput: true,
      altFormat: "d/m/Y",
      dateFormat: "Y-m-d",
    },
    _opts,
    opts
  );

  let picker = flatpickr(node, opts);

  function createFirer(name) {
    return (selectedDates, dateStr, instance) => {
      node.dispatchEvent(
        new CustomEvent(name, {
          detail: [selectedDates, dateStr, instance],
        })
      );
    };
  }

  return {
    update([opts, value]) {
      if (picker) {
        picker.setDate(value);
        if (opts) {
          if (opts.mode) {
            picker.set("mode", opts.mode);
          }
          picker.set("minDate", opts.minDate ? opts.minDate : "");
          picker.set("maxDate", opts.maxDate ? opts.maxDate : "");
          picker.set("enable", opts.enable ? opts.enable : [() => true]);
          picker.set("disable", opts.disable ? opts.disable : [() => false]);
        }
      }
    },
    destroy() {
      picker && picker.destroy();
    },
  };
}
