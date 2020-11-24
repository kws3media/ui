import flatpickr from 'flatpickr';

export default function datepicker(node, opts){
  var self = this,
    setting = false;

  node.value = self.get().value;

  opts = opts || {};

  self.picker = flatpickr(node, Object.assign({
    altInput: true,
    altFormat: 'd/m/Y',
    dateFormat: 'Y-m-d',
    onChange: function (date, dateStr) {
      setting = true; // to prevent infinite loop
      self.set({ value: dateStr });
      updateClassNames();
      setting = false;
    }
  }, opts));

  self.set({ _setting: setting });

  self.on('update', function ({ changed, current, previous }) {
    var self = this;

    if (changed['value']) {
      if (self.get()._setting) return;
      var { value: date } = current;
      self.picker.setDate(date);
      updateClassNames();
    }

    if (changed['classes']) {
      updateClassNames();
    }

    if (changed['disabled']) {
      updateDisability();
    }
  });

  function updateDisability() {
    var { disabled } = self.get();
    self.picker.input.nextSibling.disabled = disabled;
  }

  function updateClassNames() {
    var cs = self.picker.input.className;
    self.picker.input.nextSibling.className = cs;
  }

  return {
    destroy() {
      if(self && self.picker){
        self.picker.destroy();
      }
    }
  }
}