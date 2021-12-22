class Rectangle {
   constructor(width, height, x, y) {
       this._x = x;
       this._y = y;
       this._width = width;
       this._height = height;
   }

   perimeter() {
       return (this._width + this._height) * 2;
   }

   setWidth(newWidth) {
       this._width = newWidth;
   }

   draw() {
       let canvas = document.getElementById('my-canvas');
       let ctx = canvas.getContext('2d');
       ctx.clearRect(this._x,this._y, this._width, this._height)
       ctx.beginPath();
       ctx.rect(this._x, this._y, this._width, this._height);
       ctx.stroke();
       ctx.closePath();
   }

}
