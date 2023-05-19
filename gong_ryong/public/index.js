var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(10,10, 100,100);
    }
}



