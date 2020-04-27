const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d"); //provides 2d rendering context
const scale = 10;
const row = canvas.height / scale;
const column = canvas.width / scale;

var snake;

(function setup() {
  snake = new Snake(); //get Snake from snake.js
  snake.draw();  //this.draw (snake.js)

  window.setInterval(()=> {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    snake.update();
    snake.draw()
  }, 250);
}());
