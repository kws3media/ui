import UndoManager from "./UndoManager";

/**
 * @typedef {import('@kws3/ui/types').DrawingPadOptions} DrawingPadOptions
 */

var passiveSupported = false;

try {
  let options = Object.defineProperty({}, "passive", {
    get: () => (passiveSupported = !0),
  });
  typeof window !== "undefined" &&
    window.addEventListener("test", null, options);
} catch (err) {
  console.log(err);
}

var eventOpts = passiveSupported ? { passive: false, capture: false } : false;

export class DrawingPad {
  /**
   * DrawingPad constructor
   * @param {{CANVAS:HTMLCanvasElement, fire:(string, object)=>void}} app
   * @param {DrawingPadOptions} opts - Parameter description.
   */
  constructor(app, opts) {
    this.app = app;
    this.canvas = this.app.CANVAS;
    this.context = this.canvas.getContext("2d");
    this.drawing = false;
    this.currentPos = { x: 0, y: 0 };
    this.lastPos = this.currentPos;
    this.scaleFactor = opts.initialScale;
    this.drawingType = "Pen";

    this.penColor = opts.penColor;
    this.penWidth = opts.penWidth;
    this.eraserWidth = opts.eraserWidth;
    this.readonly = opts.readonly;
    this.image = opts.image;
    this.tools = opts.tools;

    if (opts.expanded) {
      this.scaleFactor = opts.expand;
    }

    this.undoManager = new UndoManager();
    this.prevState = null;

    this.START = this.start.bind(this);
    this.MOVE = this.move.bind(this);
    this.END = this.end.bind(this);
    this.RENDER = this.render.bind(this);
  }

  prevent(e) {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }

  getPosition(e) {
    let x, y;
    let rect = this.canvas.getBoundingClientRect();

    if (e.type.indexOf("touch") !== -1) {
      // Touch event
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      // Mouse event
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    return { x: x / this.scaleFactor, y: y / this.scaleFactor };
  }

  render() {
    this.draw();
    if (this.drawing) {
      typeof window !== "undefined" &&
        window.setTimeout(() => this.render(), 1000 / 60);
    }
  }

  draw() {
    if (this.drawing) {
      this.context.strokeStyle = this.penColor;
      this.context.lineWidth = this.penWidth;
      if (this.drawingType === "Eraser") {
        this.context.lineWidth = this.eraserWidth;
      }
      this.tools[this.drawingType].draw(this);
    }
  }

  move(e) {
    this.prevent(e);
    this.currentPos = this.getPosition(e);
  }

  end(e) {
    this.prevent(e);
    this.drawing = false;

    this.addHistory();

    document.removeEventListener("touchmove", this.MOVE);
    document.removeEventListener("mousemove", this.MOVE);
    document.removeEventListener("touchend", this.END);
    document.removeEventListener("mouseup", this.END);

    this.fire("change");
  }

  start(e) {
    this.prevent(e);
    this.drawing = true;
    this.currentPos = this.getPosition(e);
    this.lastPos = this.currentPos;

    document.addEventListener("touchmove", this.MOVE, eventOpts);
    document.addEventListener("mousemove", this.MOVE, eventOpts);
    document.addEventListener("touchend", this.END, eventOpts);
    document.addEventListener("mouseup", this.END, eventOpts);

    this.prevState = this.getImageData();

    this.render();
  }

  addHistory() {
    let nextStack = this.getImageData();
    let prevStack = this.prevState;
    this.undoManager.add({
      undo: () => {
        this.setImageData(prevStack.data);
      },
      redo: () => {
        this.setImageData(nextStack.data);
      },
    });
  }

  resetHistory() {
    this.undoManager.clear();
  }

  getImageData() {
    return this.context.getImageData(
      0,
      0,
      this.canvas.width,
      this.canvas.height
    );
  }

  setImageData(data) {
    let imageData = this.getImageData();
    for (let i = 0; i < imageData.data.length; i++) {
      imageData.data[i] = data[i];
    }
    this.context.putImageData(imageData, 0, 0);
  }

  setImage(imgSrc, callBackFn) {
    if (imgSrc) {
      let img = new Image();
      img.src = imgSrc;
      img.onload = () => {
        this.context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          0,
          0,
          this.canvas.width,
          this.canvas.height
        );
        if (callBackFn) {
          callBackFn();
        }

        this.fire("change");
      };
    }
  }

  fire(type) {
    switch (type) {
      case "change":
        this.app.fire("change", {
          canUndo: this.canUndo(),
          canRedo: this.canRedo(),
          canvasImage: this.canvas.toDataURL(),
        });
        break;
    }
  }

  canUndo() {
    return this.undoManager.hasUndo();
  }

  canRedo() {
    return this.undoManager.hasRedo();
  }

  init() {
    this.is_readonly = this.readonly || false;
    this.imageDataUrl = this.image || "";

    this.resetHistory();

    this.setImage(this.imageDataUrl);

    this.addEvent();
  }

  syncImage(imgData) {
    let curUrl = this.canvas.toDataURL();
    if (curUrl !== imgData) {
      this.prevState = this.getImageData();
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.setImage(imgData, () => {
        this.addHistory();
      });
    }
  }

  addEvent() {
    if (!this.is_readonly) {
      this.canvas.addEventListener("touchstart", this.START, false);
      this.canvas.addEventListener("mousedown", this.START, false);
    }
  }

  removeEvent() {
    this.canvas.removeEventListener("touchstart", this.START);
    this.canvas.removeEventListener("mousedown", this.START);
  }

  undo() {
    if (this.canUndo()) {
      this.undoManager.undo();
      this.fire("change");
    }
  }

  redo() {
    if (this.canRedo()) {
      this.undoManager.redo();
      this.fire("change");
    }
  }

  reset() {
    this.prevState = this.getImageData();
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addHistory();
    this.fire("change");
  }

  setScaleFactor(f) {
    this.scaleFactor = f;
  }

  setTool(toolType) {
    this.drawingType = toolType;
  }

  setColor(color) {
    this.penColor = color;
  }
}

export let Pen = {
  name: "Pen",
  icon: "pencil",
  draw: (instance) => {
    instance.context.beginPath();
    instance.context.moveTo(instance.lastPos.x, instance.lastPos.y);
    instance.context.lineCap = "round";
    instance.context.lineTo(instance.currentPos.x, instance.currentPos.y);
    instance.context.stroke();
    instance.context.globalCompositeOperation = "source-over";
    instance.lastPos = instance.currentPos;
  },
};

export let Eraser = {
  name: "Eraser",
  icon: "eraser",
  draw: (instance) => {
    instance.context.beginPath();
    instance.context.moveTo(instance.lastPos.x, instance.lastPos.y);
    instance.context.lineTo(instance.currentPos.x, instance.currentPos.y);
    instance.context.stroke();
    instance.context.globalCompositeOperation = "destination-out";
  },
};
