import flatpickr from "flatpickr";

export default function datepicker(node, [opts, value]) {
  let setting = false;

  opts = Object.assign(
    {
      altInput: true,
      altFormat: "d/m/Y",
      dateFormat: "Y-m-d",
      onChange: function (date, dateStr) {
        setting = true; // to prevent infinite loop
        dateChanged(dateStr);
        setting = false;
      },
    },
    opts
  );

  function dateChanged(dateStr) {
    console.log(dateStr);
  }

  let picker = flatpickr(node, opts);

  return {
    update([opts, value]) {
      if (picker && !setting) {
        picker.setDate(value);
      }
    },
    destroy() {
      picker && picker.destroy();
    },
  };
}
