function Fruit() {
  this.x;
  this.y;

  this.pickLocation = function() {
    this.x = (Math.floor(Math.random() * row )) * scale;
    this.y = (Math.floor(Math.random() * column )) * scale;
  }

  this.draw = function () {
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(this.x, this.y, scale, scale);
  }

}
