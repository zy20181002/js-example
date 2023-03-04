class Graph {
  constructor(id) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.context = null;
    this.id = id;
  }
  //   图形初始化
  init() {
    const canvas = document.querySelector(this.id);
    if (!canvas.getContext) {
      console.warn("Browser not supported");
      return;
    }
    this.context = this._createHDCanvas(canvas, this.width, this.height);
  }
  // 创建高清晰的canvas
  _createHDCanvas(canvas, w, h) {
    const ratio = window.devicePixelRatio || 1;
    canvas.width = w * ratio; // 实际渲染像素
    canvas.height = h * ratio; // 实际渲染像素
    canvas.style.width = `${w}px`; // 控制显示大小
    canvas.style.height = `${h}px`; // 控制显示大小
    const ctx = canvas.getContext("2d");
    ctx.scale(ratio, ratio);
    return ctx;
  }
  // 绘制圆形
  createArc(options) {
    const {
      x,
      y,
      radius,
      startAngle = 0,
      endAngle = 2 * Math.PI,
      counterclockwise = false,
      strokeStyle = "#000000",
      fill = false,
      fillStyle = "#ffffff",
    } = options;
    this.context.beginPath();
    this.context.arc(x, y, radius, startAngle, endAngle, counterclockwise);
    if (fill) {
      this.context.fillStyle = fillStyle;
      this.context.fill();
    }
    this.context.strokeStyle = strokeStyle;
    this.context.stroke();
  }
  // 绘制三角形
  createTriangle(options) {
    const {
      c1,
      c2,
      c3,
      strokeStyle = "#000000",
      lineWidth = 1,
      fill = false,
      fillStyle,
    } = options;
    this.context.beginPath();
    this.context.lineTo(c1, c2); // 定点1
    this.context.lineTo(c3, c2); // 定点2
    this.context.lineTo(c2, c3); // 定点3
    this.context.lineWidth = lineWidth;
    this.context.strokeStyle = strokeStyle;
    if (fill) {
      this.context.fillStyle = fillStyle;
      this.context.fill();
    }
    this.context.closePath();
    this.context.stroke();
  }
  // 绘制描边矩形
  createStrokeRect(options) {
    const {
      width,
      height,
      x,
      y,
      strokeStyle,
      lineWidth = 1,
      lineCap = "butt",
      lineJoin = "bevel",
    } = options;
    this.context.strokeStyle = strokeStyle;
    this.context.lineWidth = lineWidth;
    this.context.lineCap = lineCap;
    this.context.lineJoin = lineJoin;
    this.context.strokeRect(x, y, width, height);
  }
  // 绘制填充矩形
  createFillRect(options) {
    const { width, height, x, y, fillStyle } = options;
    this.context.fillStyle = fillStyle;
    this.context.fillRect(x, y, width, height);
  }
}

export default Graph;
