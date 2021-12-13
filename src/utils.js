const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const setCanvasMethods = (canvas) => {
  const root = document.getElementById("root");

  canvas.getElements = (qry) => [...root.querySelectorAll(qry)];
};

export { sleep, setCanvasMethods };
