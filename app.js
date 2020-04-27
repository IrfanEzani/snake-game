const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d"); //provides 2d rendering context
const scale = 10;
const row = canvas.height / scale;
const column = canvas.width / scale;

var snake;

(function setup() {
  snake = new Snake(); //get Snake from snake.js
  fruit = new Fruit();
  fruit.pickLocation();
  console.log(fruit.pickLocation());

  window.setInterval(()=> {
    ctx.clearRect(0,0,canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if(snake.eat(fruit)) {
      fruit.pickLocation();
    }
  }, 250);
}());


window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}))
