const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const setCanvasMethods = (canvas) => {
  const root = document.getElementById("root");

  canvas.getByClassName = (className) => [
    ...root.querySelectorAll(`.${className}`),
  ];
};

export { sleep, setCanvasMethods };
