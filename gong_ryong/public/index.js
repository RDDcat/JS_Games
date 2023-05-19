var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

var dino = {
    x : 10,
    y : 200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y, this.width,this.height);
    }
}



class Cactus {
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height =50;
    }
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x,this.y, this.width,this.height);
    }
}


var timer =0;
var cactus여러개 = []; // 오브젝트 풀링으로 개선 가능할듯?


// 1초에 60번 (모니터 fps에 따라 다름)
function 프레임마다실행(){
    requestAnimationFrame(프레임마다실행)
    timer++;

    ctx.clearRect(0,0, canvas.width, canvas.height); // 그려진거 지우기

    if(timer % 120 === 0){ // 1초에 1번
        var cactus = new Cactus();
        cactus여러개.push(cactus);
    }

    cactus여러개.forEach((a, i, o)=>{
        // x 좌표가 0미만이면 제거
        if(a.x < 0){
            o.splice(i,1);
        }
        a.x--;
        a.draw();
    })
    
    dino.draw();
}

프레임마다실행();


