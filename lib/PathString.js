class PathString {
  /**
   M = moveto 移动到
   L = lineto 画线到
   H = horizontal lineto 水平线到
   V = vertical lineto 垂直线到
   C = curveto 三次贝塞尔曲线到
   S = smooth curveto 光滑三次贝塞尔曲线到
   Q = quadratic Belzier curve 二次贝塞尔曲线到
   T = smooth quadratic Belzier curveto 光滑二次贝塞尔曲线到
   A = elliptical Arc 椭圆弧
   Z = closepath 关闭路径
   */
  path = "";
  M(x, y) {
    this.path += ` M ${x} ${y}`;
    return this.path;
  }
  L(x, y) {
    this.path += ` L ${x} ${y}`;
    return this.path;
  }
  H(x) {
    this.path += ` H ${x}`;
    return this.path;
  }
  V(y) {
    this.path += ` V ${y}`;
    return this.path;
  }
  C(x1, y1, x2, y2, x, y) {
    this.path += ` C ${x1} ${y1} ${x2} ${y2} ${x} ${y}`;
    return this.path;
  }
  S(x2, y2, x, y) {
    this.path += ` S ${x2} ${y2} ${x} ${y}`;
    return this.path;
  }
  Q(x1, y1, x, y) {
    this.path += ` Q ${x1} ${y1} ${x} ${y}`;
    return this.path;
  }
  T(x, y) {
    this.path += ` T ${x} ${y}`;
    return this.path;
  }
  A(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
    this.path += ` A ${rx} ${ry} ${xAxisRotation} ${largeArcFlag} ${sweepFlag} ${x} ${y}`;
    return this.path;
  }
  Z() {
    this.path += ` Z`;
    return this.path;
  }
}
