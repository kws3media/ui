import flatpickr from "flatpickr";

function createFlatpickrAction(defaultOpts, hooks, type) {
  return function (
    node,
    // eslint-disable-next-line no-unused-vars
    { opts, value, placeholder, klass, style, disabled, color }
  ) {
    const _opts = {};

    const colorClass = opts.color ? opts.color : "primary";

    //add event dispatcher for each flatpicker event
    hooks.forEach((hook) => {
      //remove "on"
      const hk = hook.charAt(2).toLowerCase() + hook.substring(3);
      const firer = createFirer(hk);
      _opts[hook] = firer;
    });

    //special handler for onReady, so we can append a theme class
    const readyFirer = createFirer("ready");
    _opts["onReady"] = (selectedDates, dateStr, instance) => {
      applyColorClass(instance, colorClass);
      applyInitialInputAttributes(instance, { style });
      readyFirer(selectedDates, dateStr, instance);
    };

    //special handler for onChange, so that it does not clobber
    //native on change event of the input
    if (defaultOpts.enableTime && defaultOpts.noCalendar) {
      _opts["onChange"] = createFirer("timeChange");
    } else {
      _opts["onChange"] = createFirer("dateChange");
    }

    let OPTS = Object.assign(defaultOpts, _opts, opts);

    let picker = flatpickr(node, OPTS);

    function createFirer(name) {
      return (selectedDates, dateStr, instance) => {
        node.dispatchEvent(
          new CustomEvent(name, {
            detail: [selectedDates, dateStr, instance],
          })
        );
      };
    }

    function applyColorClass(instance, color) {
      let contains = false;
      if (instance && instance.calendarContainer) {
        instance.calendarContainer.classList.forEach((c) => {
          if (c.charAt(3).toLowerCase() === "is-") {
            contains = c;
          }
        });

        if (contains) {
          instance.calendarContainer.classList.remove(contains);
        }

        instance.calendarContainer.classList.add("is-" + color);
      }
    }

    function applyInitialInputAttributes(instance, { style }) {
      const visibleInput = instance.input.nextSibling;
      visibleInput.style = `${style}`;
    }

    return {
      update({ opts, value, placeholder, klass, style, disabled, color }) {
        if (!picker.isOpen) {
          picker = flatpickr(node, Object.assign(OPTS, opts));
        }

        if (picker) {
          picker.setDate(value);
          if (opts) {
            if (opts.color) {
              applyColorClass(picker, opts.color);
            }
            if (opts.mode) {
              picker.set("mode", opts.mode);
            }
            if (type === "time") {
              picker.set("altFormat", opts.time_24hr ? "H:i" : "h:i K");
            }
          }
          //respond reactively to props
          /** @type {any} */
          const visibleInput = picker.input.nextSibling;
          if (visibleInput) {
            visibleInput.className = `input is-${color} ${klass}`;
            visibleInput.style = `${style}`;
            visibleInput.disabled = disabled;
            visibleInput.placeholder = placeholder;
          }
        }
      },
      destroy() {
        picker && picker.destroy();
      },
    };
  };
}

export let datepicker = createFlatpickrAction(
  {
    altInput: true,
    altFormat: "d/m/Y",
    dateFormat: "Y-m-d",
  },
  ["onOpen", "onClose", "onMonthChange", "onYearChange", "onReady"],
  "date"
);

export let timepicker = createFlatpickrAction(
  {
    altInput: true,
    altFormat: "h:i K",
    dateFormat: "H:i",
    enableTime: true,
    noCalendar: true,
  },
  ["onOpen", "onClose", "onReady"],
  "time"
);
