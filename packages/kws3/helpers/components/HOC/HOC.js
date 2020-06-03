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

    let newFire = (name, event) => {
      Component.prototype.fire.call(comp, name, event);
      Component.prototype.fire.call(comp, '*', {
        name,
        event
      });
    };


    if (comp.proxyTarget) {
      //this is a HMR enabled component
      //need to handle it differently
      let oldMount = comp._mount;
      comp._mount = function () {
        oldMount.apply(comp, arguments);
        if (!comp.proxyTarget.__FIRE_PATCHED__) {
          let oldFire = comp.proxyTarget.fire;
          comp.proxyTarget.fire = (name, event) => {
            oldFire.call(comp.proxyTarget, name, event);
            oldFire.call(comp.proxyTarget, '*', { name, event });
          }
          comp.proxyTarget.__FIRE_PATCHED__ = true;
        }
      }
    } else {
      comp.fire = newFire;
    }

    return comp;
  }

}