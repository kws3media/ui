export function createHOC(data) {
  return function (opts) {
    opts.data || (opts.data = {});
    Object.assign(opts.data, data);

    try {
      var Component = opts.data.target;
      var comp = new Component(opts);
    } catch (e) {
      throw new Error('The value of `target` should be a component')
    }

    comp.fire = (name, event) => {
      Component.prototype.fire.call(comp, name, event);
      Component.prototype.fire.call(comp, '*', {
        name,
        event
      });
    };

    return comp;
  }

}