/**
 * demo：分组、基础图形、动画、事件
 */
class MyGroup {
  constructor(canvas, options) {
    this.canvas = canvas;
    const circle = new fabric.Circle({
      radius: 50,
      fill: "red",
      left: 0
    });
    const triangle = new fabric.Triangle({
      width: 20,
      height: 30,
      fill: "blue",
      left: 50,
      top: 50
    });
    const rect = new fabric.Rect({
      width: 10,
      height: 20,
      fill: "#f55",
      opacity: 0.7
    });
    // 更多图形：http://fabricjs.com/fabric-intro-part-1#objects

    this.group = new fabric.Group([circle, triangle, rect], options);
    this.group.set('angle', 45);
    this.group.on("mouseover", () => {
      this.group.animate("angle", "+=360", {
        onChange: this.canvas.renderAll.bind(this.canvas),
        duration: 1000,
        easing: fabric.util.ease.easeOutCubic,
        onComplete: () => {
          console.log("onComplete");
        }
      });
      // fabric.util.ease.easeOutBounce as an easing option.
      // Other notable ones include easeInCubic, easeOutCubic, easeInElastic, easeOutElastic, easeInBounce, and easeOutExpo.
    });
    // 更多事件 http://fabricjs.com/events
  }

  addToCanvas() {
    this.canvas.add(this.group);
  }
}

new MyGroup(new fabric.Canvas("c"), {
  left: 200,
  top: 100,
  selectable: false,
  originX: "center",
  originY: "center"
}).addToCanvas();
