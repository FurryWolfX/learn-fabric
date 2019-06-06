class Wave {
  canvas = null;
  line = null;
  constructor(canvas, options) {
    this.canvas = canvas;
    const pathString = new PathString();
    pathString.M(0, 600);
    pathString.V(300);
    this.line = new fabric.Path(pathString.path, {
      fill: "",
      stroke: "black",
      objectCaching: false
    });

    this.group = new fabric.Group([this.line], options);
  }

  animate() {}

  addToCanvas() {
    this.canvas.add(this.group);
    this.animate();
  }
}

const canvas = new fabric.Canvas("c");
canvas.setBackgroundColor("#eee", () => {});
const wave = new Wave(canvas, {
  left: 0,
  top: 0,
  originX: "left",
  originY: "top",
  selectable: false
});
wave.addToCanvas();
