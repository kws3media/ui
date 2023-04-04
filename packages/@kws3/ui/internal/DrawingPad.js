// @ts-nocheck
import UndoManager from "./UndoManager";

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

export default function DrawingPad(app, opts) {
  let canvas = app.CANVAS;
  let context = canvas.getContext("2d");
  let drawing = false;
  let currentPos = { x: 0, y: 0 };
  let lastPos = currentPos;
  let scaleFactor = opts.initialScale;
  let drawingType = "Pen";

  // if (drawingType === "line") {
  //   context.strokeStyle = opts.penColor || "#3d44c8";
  //   context.lineWidth = opts.penWidth || 1;
  // }

  if (opts.expanded) {
    scaleFactor = opts.expand;
  }

  this.undoManager = new UndoManager();

  let _prevState = null;

  let prevent = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  };

  let getPosition = (e) => {
    let x, y;
    let rect = canvas.getBoundingClientRect();

    if (e.type.indexOf("touch") !== -1) {
      // Touch event
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      // Mouse event
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    return { x: x / scaleFactor, y: y / scaleFactor };
  };

  let render = () => {
    draw();
    if (drawing) {
      typeof window !== "undefined" && window.setTimeout(render, 1000 / 60);
    }
  };

  let draw = () => {
    if (drawing) {
      context.beginPath();
      context.moveTo(lastPos.x, lastPos.y);
      context.lineCap = "round";
      context.lineTo(currentPos.x, currentPos.y);
      context.stroke();
      if (drawingType === "Pen") {
        context.globalCompositeOperation = "source-over";
        context.strokeStyle = opts.penColor;
        context.lineWidth = opts.penWidth;
        lastPos = currentPos;
      }
      if (drawingType === "Eraser") {
        context.globalCompositeOperation = "destination-out";
        context.lineWidth = opts.eraserWidth || 4;
      }
    }
  };

  let move = (e) => {
    console.log("moving");
    prevent(e);
    currentPos = getPosition(e);
  };

  let end = (e) => {
    prevent(e);
    drawing = false;

    addHistory();

    document.removeEventListener("touchmove", move);
    document.removeEventListener("mousemove", move);
    document.removeEventListener("touchend", end);
    document.removeEventListener("mouseup", end);

    fire("change");
  };

  let start = (e) => {
    prevent(e);
    drawing = true;
    currentPos = getPosition(e);
    lastPos = currentPos;

    document.addEventListener("touchmove", move, eventOpts);
    document.addEventListener("mousemove", move, eventOpts);
    document.addEventListener("touchend", end, eventOpts);
    document.addEventListener("mouseup", end, eventOpts);

    _prevState = getImageData();

    render();
  };

  let addHistory = () => {
    let _nextStack = getImageData();
    let _prevStack = _prevState;
    this.undoManager.add({
      undo: function () {
        setImageData(_prevStack.data);
      },
      redo: function () {
        setImageData(_nextStack.data);
      },
    });
  };

  let resetHistory = () => {
    this.undoManager.clear();
  };

  let getImageData = () =>
    context.getImageData(0, 0, canvas.width, canvas.height);

  let setImageData = (data) => {
    let imageData = getImageData();
    for (let i = 0; i < imageData.data.length; i++) {
      imageData.data[i] = data[i];
    }
    context.putImageData(imageData, 0, 0);
  };

  let setImage = (imgSrc, callBackFn) => {
    if (imgSrc) {
      let img = new Image();
      img.src = imgSrc;
      img.onload = () => {
        context.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          0,
          0,
          canvas.width,
          canvas.height
        );
        if (callBackFn) {
          callBackFn();
        }

        fire("change");
      };
    }
  };

  let fire = (type) => {
    switch (type) {
      case "change":
        app.fire("change", {
          canUndo: canUndo(),
          canRedo: canRedo(),
          canvasImage: canvas.toDataURL(),
        });
        break;
    }
  };

  let canUndo = () => this.undoManager.hasUndo();

  let canRedo = () => this.undoManager.hasRedo();

  this.init = () => {
    this.is_readonly = opts.readonly || false;
    this.imageDataUrl = opts.image || "";

    resetHistory();

    setImage(this.imageDataUrl);

    this.addEvent();
  };

  //this is for syncing incoming data from another source
  this.syncImage = (imgData) => {
    var curUrl = canvas.toDataURL();
    if (curUrl !== imgData) {
      _prevState = getImageData();
      context.clearRect(0, 0, canvas.width, canvas.height);
      setImage(imgData, () => {
        addHistory();
      });
    }
  };

  this.addEvent = () => {
    if (!this.is_readonly) {
      canvas.addEventListener("touchstart", start, false);
      canvas.addEventListener("mousedown", start, false);
    }
  };

  this.removeEvent = () => {
    canvas.removeEventListener("touchstart", start);
    canvas.removeEventListener("mousedown", start);
  };

  this.undo = () => {
    if (canUndo()) {
      this.undoManager.undo();
      fire("change");
    }
  };

  this.redo = () => {
    if (canRedo()) {
      this.undoManager.redo();
      fire("change");
    }
  };

  this.reset = () => {
    _prevState = getImageData();
    context.clearRect(0, 0, canvas.width, canvas.height);
    addHistory();
    fire("change");
  };

  this.setScaleFactor = (f) => {
    scaleFactor = f;
  };

  this.setTool = (toolType) => {
    drawingType = toolType;
  };

  this.setColor = (color) => {
    context.strokeStyle = color;
  };
}

class DrawingPadS {
  constructor(app, opts) {
    this.canvas = app.CANVAS;
    this.context = this.canvas.getContext("2d");
    this.drawing = false;
    this.currentPos = { x: 0, y: 0 };
    this.lastPos = this.currentPos;
    this.scaleFactor = opts.initialScale;
    this.drawingType = "Pen";

    this.penColor = opts.penColor;
    this.penWidth = opts.penWidth;
    this.eraserWidth = opts.eraserWidth;

    if (opts.expanded) {
      this.scaleFactor = opts.expand;
    }

    this.undoManager = new UndoManager();
    this.prevState = null;
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
        window.setTimeout(this.render, 1000 / 60);
    }
  }

  draw() {
    if (this.drawing) {
      this.context.beginPath();
      this.context.moveTo(this.lastPos.x, this.lastPos.y);
      this.context.lineCap = "round";
      this.context.lineTo(this.currentPos.x, this.currentPos.y);
      this.context.stroke();
      if (this.drawingType === "Pen") {
        this.context.globalCompositeOperation = "source-over";
        this.context.strokeStyle = this.penColor;
        this.context.lineWidth = this.penWidth;
        this.lastPos = this.currentPos;
      }
      if (this.drawingType === "Eraser") {
        this.context.globalCompositeOperation = "destination-out";
        this.context.lineWidth = this.eraserWidth || 4;
      }
    }
  }

  move(e) {
    console.log("moving");
    this.prevent(e);
    this.currentPos = this.getPosition(e);
  }

  end(e) {
    this.prevent(e);
    this.drawing = false;

    this.addHistory();

    document.removeEventListener("touchmove", this.move);
    document.removeEventListener("mousemove", this.move);
    document.removeEventListener("touchend", this.end);
    document.removeEventListener("mouseup", this.end);

    this.fire("change");
  }

  start(e) {
    this.prevent(e);
    this.drawing = true;
    this.currentPos = this.getPosition(e);
    this.lastPos = this.currentPos;

    document.addEventListener("touchmove", this.move, eventOpts);
    document.addEventListener("mousemove", this.move, eventOpts);
    document.addEventListener("touchend", this.end, eventOpts);
    document.addEventListener("mouseup", this.end, eventOpts);

    this.prevState = this.getImageData();

    this.render();
  }

  addHistory() {
    let nextStack = this.getImageData();
    let prevStack = this.prevState;
    this.undoManager.add({
      undo: function () {
        this.setImageData(prevStack.data);
      },
      redo: function () {
        this.setImageData(nextStack.data);
      },
    });
  }

  resetHistory() {
    this.undoManager.clear();
  }

  getImageData() {
    this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
  }

  setImageData(data) {
    let imageData = this.getImageData();
    for (let i = 0; i < imageData.data.length; i++) {
      imageData.data[i] = data[i];
    }
    this.context.putImageData(imageData, 0, 0);
  }
}
