class UndoManager {
  constructor() {
    this.commands = [];
    this.index = -1;
    this.isExecuting = false;
    this.callback = null;
  }

  execute(command, action) {
    if (!command || typeof command[action] !== "function") {
      return this;
    }
    this.isExecuting = true;
    command[action]();
    this.isExecuting = false;
    return this;
  }

  add(command) {
    if (this.isExecuting) {
      return this;
    }

    // If we are here after having called undo, invalidate items higher on the stack.
    this.commands.splice(this.index + 1, this.commands.length - this.index);
    this.commands.push(command);
    // Set the current index to the end.
    this.index = this.commands.length - 1;
    if (this.callback) {
      this.callback();
    }
    return this;
  }

  setCallback(callbackFunc) {
    this.callback = callbackFunc;
  }

  undo() {
    const command = this.commands[this.index];
    if (!command) {
      return this;
    }
    this.execute(command, "undo");
    this.index -= 1;
    if (this.callback) {
      this.callback();
    }
    return this;
  }

  redo() {
    const command = this.commands[this.index + 1];
    if (!command) {
      return this;
    }
    this.execute(command, "redo");
    this.index += 1;
    if (this.callback) {
      this.callback();
    }
    return this;
  }

  clear() {
    const prev_size = this.commands.length;
    this.commands = [];
    this.index = -1;
    if (this.callback && prev_size > 0) {
      this.callback();
    }
  }
  hasUndo() {
    return this.index !== -1;
  }
  hasRedo() {
    return this.index < this.commands.length - 1;
  }
  getCommands() {
    return this.commands;
  }
}

export default UndoManager;
