/**
 * demo：绘制练习
 */
class MyGroup {
  canvas = null;
  constructor(canvas, options) {
    this.canvas = canvas;
    const circle = new fabric.Circle({
      radius: canvas.height / 2 - 2,
      fill: null,
      left: canvas.width / 2,
      top: canvas.height / 2,
      stroke: "#000",
      originX: "center",
      originY: "center",
      strokeWidth: 2
    });
    const innerCircle = new fabric.Circle({
      radius: canvas.height / 2 - 2 - 10,
      fill: null,
      left: canvas.width / 2,
      top: canvas.height / 2,
      stroke: "#000",
      originX: "center",
      originY: "center",
      strokeWidth: 2
    });
    const path = new fabric.Path(
      `M ${canvas.width / 2} ${10 + 2 * 2}` +
        `L ${canvas.width / 2} ${canvas.height - 10 - 2 * 2}`
    );
    path.set({
      fill: null,
      stroke: "#000",
      opacity: 1,
      strokeWidth: 2,
      left: canvas.width / 2,
      top: canvas.height / 2,
      originX: "center",
      originY: "center"
    });

    let startAngle = 0;
    let groupArray = [path];
    while (startAngle < 360) {
      startAngle += 45;
      path.clone(cloned => {
        cloned.set({ angle: startAngle });
        groupArray.push(cloned);
      });
    }
    this.group = new fabric.Group(
      [circle, innerCircle].concat(groupArray),
      options
    );
  }
  start() {
    this.group.animate("angle", "+=360", {
      onChange: this.canvas.renderAll.bind(this.canvas),
      duration: 5000,
      easing: fabric.util.ease.easeOutCubic,
      onComplete: () => {
        console.log("onComplete");
      }
    });
  }
  addToCanvas() {
    this.canvas.add(this.group);
  }
}

const canvas = new fabric.Canvas("c");
canvas.setBackgroundColor("#eee", () => {});
const myGroup = new MyGroup(canvas, {
  left: canvas.width / 2,
  top: canvas.height / 2,
  originX: "center",
  originY: "center",
  selectable: false
});
myGroup.addToCanvas();
const startBtn = document.getElementById("start");
startBtn.addEventListener("click", () => myGroup.start(), false);
