var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.height-30;

var dx = 2;
var dy = -2;

var ballRadius = 10;

var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;

// 공 그리기
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
}

// 패들 그리기
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    // 공과 벽 충돌
    // 좌우 벽
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    // 윗벽
    if(y + dy < ballRadius) {
        dy = -dy;
    } 
    // 아랫벽
    else if(y + dy > canvas.height-ballRadius) {
        // 공과 패들 충돌
        if(x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy;
        }
        // 게임오버
        else {
            alert("GAME OVER");
            document.location.reload();
        }
    }

    // 패들 이동
    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }
    
    x += dx;
    y += dy;
}


// 키보드 입력 이벤트
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

// 눌렀을때
function keyDownHandler(e) {
    // 오른쪽
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    // 왼쪽
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

// 땠을때
function keyUpHandler(e) {
    // 오른쪽
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    // 왼쪽
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

setInterval(draw, 10);