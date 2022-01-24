import UndoManager from "./UndoManager";

var passiveSupported = false;

try {
  let options = Object.defineProperty({}, "passive", {
    get: () => (passiveSupported = !0),
  });
  window && window.addEventListener("test", null, options);
} catch (err) {}

var eventOpts = passiveSupported ? { passive: false, capture: false } : false;

export default function DrawImage(app, opts) {
  let canvas = app.CANVAS;
  let context = canvas.getContext("2d");
  let drawing = false;
  let currentPos = { x: 0, y: 0 };
  let lastPos = currentPos;
  let scaleFactor = opts.initialScale;
  let drawingType = "line";

  if (opts.expanded) {
    scaleFactor = opts.expandedScale;
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
      window.setTimeout(render, 1000 / 60);
    }
  };

  let draw = () => {
    if (drawing) {
      if (drawingType == "line") {
        context.beginPath();
        context.moveTo(lastPos.x, lastPos.y);
        context.lineTo(currentPos.x, currentPos.y);
        context.stroke();
        lastPos = currentPos;
      } else if (drawingType == "circle") {
        let _x = lastPos.x,
          _y = lastPos.y,
          _r = 60,
          lw = context.lineWidth;
        context.clearRect(
          _x - _r - lw,
          _y - _r - lw,
          _r * 2 + lw * 2,
          _r * 2 + lw * 2
        );
        context.beginPath();
        context.arc(_x, _y, _r, 0, Math.PI * 2);
        context.stroke();
        context.fill();
        lastPos = currentPos;
      }
    }
  };

  let move = (e) => {
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
      img.onload = (e) => {
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
    if (curUrl != imgData) {
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
    if (toolType == "Pen") {
      drawingType = "line";
      context.globalCompositeOperation = "source-over";
      context.strokeStyle = opts.lineColor || "#3d44c8";
      context.lineWidth = opts.lineWidth || 1;
    } else if (toolType == "Eraser") {
      context.globalCompositeOperation = "destination-out";
      context.lineWidth = opts.eraserWidth || 4;
    } else if (toolType == "Circle") {
      drawingType = "circle";
      context.strokeStyle = opts.strokeStyle || "#000000";
      context.lineWidth = opts.lineWidth || 1;
      context.circlefillStyle = opts.circlefillStyle || "";
    }
  };

  this.setLineColor = (color) => {
    context.strokeStyle = color;
  };
}
