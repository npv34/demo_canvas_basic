class Circle {

    constructor(x, y, radius, color, ctx) {
        this._x = x;
        this._y = y;
        this._radius = radius;
        this._color = color;
        this._ctx = ctx;
    }

    draw() {

        this._ctx.beginPath();
        this._ctx.fillStyle = this._color;
        this._ctx.arc(this._x, this._y, this._radius, 0, Math.PI * 2);
        this._ctx.fill();
        this._ctx.closePath();
    }

}
