let events = [
  {name: 'enter', code: 13},
  {name: 'tab', code: 9},
  {name: 'escape', code: 27},
  {name: 'space', code: 32},
  {name: 'leftarrow', code: 37},
  {name: 'rightarrow', code: 39},
  {name: 'downarrow', code: 40},
  {name: 'uparrow', code: 38},
  {name: 'backspace', code: 8},
  {name: 'del', code: 46},
];

export function keyboardEvents(node) {
  function keydownHandler(event) {
    events.forEach(({name, code}) => {
      let which = event.which || event.keyCode;
      if (which === code) {
        node.dispatchEvent(
          new CustomEvent(name)
        );
      }
    });
  }
  node.addEventListener('keydown', keydownHandler, false);

  return {
    destroy() {
      node.removeEventListener('keydown', keydownHandler, false);
    }
  };
}
