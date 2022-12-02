import { FlowerRandomizationService } from '../services/blooming-flower.service';

export class BloomingFlowers {
  private readonly context: CanvasRenderingContext2D;
  private readonly canvasWidth: number;
  private readonly canvasHeight: number;
  private readonly flowers: Flower[] = [];
  private readonly randomizationService = new FlowerRandomizationService();
  private raf = 0;
  private stopAnimation = false;

  constructor(
    private readonly canvas: HTMLCanvasElement,
    private readonly nFlowers: number = 30
  ) {
    this.context = this.canvas.getContext('2d');
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.addShadowEffect();
    this.getFlowers();
  }

  bloom() {
    this.raf = window.requestAnimationFrame(() => this.animateFlowers());
    window.setTimeout(() => {
      if (this.raf) {
        window.cancelAnimationFrame(this.raf);
        this.stopAnimation = true;
      }
      console.log('cancelAnimationFrame');
    }, 5000);
  }

  private animateFlowers() {
    if (this.stopAnimation) {
      return;
    }
    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.flowers.forEach(flower => {
      flower.increasePetalRadius();
      flower.draw(this.context);
    });
    window.requestAnimationFrame(() => this.animateFlowers());
  }

  private getFlowers() {
    for (let i = 0; i < this.nFlowers; i++) {
      const flower = this.randomizationService.getFlowerOnCanvas(
        this.canvasWidth,
        this.canvasHeight
      );
      this.flowers.push(flower);
    }
  }

  private addShadowEffect() {
    this.context.shadowBlur = 5;
    this.context.shadowOffsetX = 2;
    this.context.shadowOffsetY = 2;
    this.context.shadowColor = '#333';
    this.context.globalAlpha = 0.8;
  }
}

export class FlowerCenter {
    constructor(
      private readonly centerPoint: Point,
      private readonly centerRadius: number,
      private readonly centerColor: string
    ) {}
  
    draw(context: CanvasRenderingContext2D) {
      context.save();
      context.beginPath();
      context.arc(
        this.centerPoint.x,
        this.centerPoint.y,
        this.centerRadius,
        0,
        2 * Math.PI
      );
      context.fillStyle = this.centerColor;
      context.fill();
      context.restore();
    }
}

export class Flower {
    constructor(
      private readonly flowerCenter: FlowerCenter,
      private readonly numberOfPetals: number,
      private petal: Petal
    ) { }
  
    draw(context: CanvasRenderingContext2D) {
      this.drawPetals(context);
      this.flowerCenter.draw(context);
    }
  
    increasePetalRadius() {
      this.petal = new Petal(
        this.petal.centerPoint,
        this.petal.radius + 0.2,
        this.petal.tipSkewRatio,
        this.petal.angleSpan,
        this.petal.color
      );
    }
  
    private drawPetals(context: CanvasRenderingContext2D) {
      context.save();
      const rotateAngle = (2 * Math.PI) / this.numberOfPetals;
      for (let i = 0; i < this.numberOfPetals; i++) {
        context.translate(this.petal.centerPoint.x, this.petal.centerPoint.y);
        context.rotate(rotateAngle);
        context.translate(-this.petal.centerPoint.x, -this.petal.centerPoint.y);
        this.petal.draw(context);
      }
      context.restore();
    }
}
const rad = Math.PI / 180;
const tangent = 0.2;

export class Petal {
  private readonly vertices: Point[];
  private readonly controlPoints: Point[][];

  constructor(
    public readonly centerPoint: Point,
    public readonly radius: number,
    public readonly tipSkewRatio: number,
    public readonly angleSpan: number,
    public readonly color: string
  ) {
    this.vertices = this.getVertices();
    this.controlPoints = this.getControlPoints(this.vertices);
  }

  draw(context: CanvasRenderingContext2D) {
    context.save();
    context.beginPath();
    context.moveTo(this.centerPoint.x, this.centerPoint.y);
    context.quadraticCurveTo(
      this.controlPoints[1][1].x,
      this.controlPoints[1][1].y,
      this.vertices[1].x,
      this.vertices[1].y
    );
    context.bezierCurveTo(
      this.controlPoints[1][0].x,
      this.controlPoints[1][0].y,
      this.controlPoints[2][1].x,
      this.controlPoints[2][1].y,
      this.vertices[2].x,
      this.vertices[2].y
    );
    context.bezierCurveTo(
      this.controlPoints[2][0].x,
      this.controlPoints[2][0].y,
      this.controlPoints[3][1].x,
      this.controlPoints[3][1].y,
      this.vertices[3].x,
      this.vertices[3].y
    );
    context.quadraticCurveTo(
      this.controlPoints[3][0].x,
      this.controlPoints[3][0].y,
      this.centerPoint.x,
      this.centerPoint.y
    );
    context.fillStyle = this.color;
    context.fill();
    context.restore();
  }

  private getVertices(): Point[] {
    const halfAngleSpan = 0.5 * this.angleSpan * rad;
    const dx = this.radius * Math.sin(halfAngleSpan);
    const dy = this.radius * Math.cos(halfAngleSpan);
    const tipRadius = this.radius * this.tipSkewRatio;
    return [
      this.centerPoint,
      new Point(this.centerPoint.x - dx, this.centerPoint.y - dy),
      new Point(this.centerPoint.x, this.centerPoint.y - tipRadius),
      new Point(this.centerPoint.x + dx, this.centerPoint.y - dy),
      this.centerPoint
    ];
  }

  private getControlPoints(vertices: Point[]): Point[][] {
    const controlPoints: Point[][] = [];
    for (let i = 1; i < vertices.length - 1; i++) {
      const dx = (vertices[i - 1].x - vertices[i + 1].x) * tangent;
      const dy = (vertices[i - 1].y - vertices[i + 1].y) * tangent;
      controlPoints[i] = [];
      controlPoints[i].push(new Point(vertices[i].x - dx, vertices[i].y - dy));
      controlPoints[i].push(new Point(vertices[i].x + dx, vertices[i].y + dy));
    }
    return controlPoints;
  }
}
export class Point {
    constructor(public readonly x = 0, public readonly y = 0) {
      this.x = Math.floor(this.x);
      this.y = Math.floor(this.y);
    }
  }