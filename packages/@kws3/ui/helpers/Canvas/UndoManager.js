var undoManager = () => {
  "use strict";

  let commands = [],
    index = -1,
    isExecuting = false,
    callback,
    execute;

  execute = (command, action) => {
    if (!command || typeof command[action] !== "function") return this;

    isExecuting = true;
    command[action]();
    isExecuting = false;

    return this;
  };

  return {
    /**
     * Add a command to the queue.
     * @param {*} command
     * @returns
     */
    add: (command) => {
      if (isExecuting) return this;

      /**
       * if we are here after having called undo
       * invalidate items higher on the stack
       */
      commands.splice(index + 1, commands.length - index);
      commands.push(command);

      /**
       * set the current index to the end
       */
      index = commands.length - 1;
      callback && callback();

      return this;
    },

    /**
     *  Pass a function to be called on undo and redo actions.
     * @param {*} callbackFunc
     */
    setCallback: (callbackFunc) => (callback = callbackFunc),

    /**
     * Perform undo: call the undo function at the current index and decrease the index by 1.
     * @returns
     */
    undo: () => {
      let command = commands[index];

      if (!command) return this;

      execute(command, "undo");

      index -= 1;
      callback && callback();

      return this;
    },

    /**
     * Perform redo: call the redo function at the next index and increase the index by 1.
     * @returns
     */
    redo: () => {
      let command = commands[index + 1];
      if (!command) return this;

      execute(command, "redo");
      index += 1;
      callback && callback();

      return this;
    },

    /**
     * Clears the memory, losing all stored states. Reset the index.
     */
    clear: () => {
      let prev_size = commands.length;

      commands = [];
      index = -1;

      if (callback && prev_size > 0) callback();
    },

    hasUndo: () => index !== -1,
    hasRedo: () => index < commands.length - 1,
    getCommands: () => commands,
  };
};

export default undoManager;
