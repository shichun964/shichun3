// 使用自调用函数，创建一个新的局部作用域，防止命名冲突

(function(){
  function Game(map){
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
  }
  Game.prototype.start = function(){
    this.food.render(this.map);
    this.snake.render(this.map)
  }
  window.Game = Game;
})()
// 测试
var map = document.getElementById('map');
var game = new Game(map);
game.start();
