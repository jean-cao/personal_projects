var rect = {
  x: 0,
  y: 0,
  count: 0
}

var rect2 = {
  x: 0,
  y: 0,
  count: 0
}

var ball = {
  x: 0,
  y: 0,
  xspeed: 10,
  yspeed: -5,
  game: 1,
    start: 0
}

function init(){
    rect.x = windowWidth / 50;
  rect.y = windowHeight / 3;
  ball.x = rect.x + 30;
  ball.y = rect.y + 60;
  rect2.x = windowWidth - 50;
  rect2.y = windowHeight / 3;  
    ball.xspeed = 10;
  ball.yspeed = -5;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    init();
}

function rectmove() {
  if (keyIsDown(83) && rect.y < (height - 150))
    rect.y += 10;
  if (keyIsDown(87) && rect.y > 0)
    rect.y -= 10;
  if (keyIsDown(83) && rect.y < (height - 150) && keyIsDown(67))
    rect.y += 20;
  if (keyIsDown(87) && rect.y > 0 && keyIsDown(67))
    rect.y -= 20;
  if (keyIsDown(40) && rect2.y < (height - 150))
    rect2.y += 10;
  if (keyIsDown(38) && rect2.y > 0)
    rect2.y -= 10;
  if (keyIsDown(40) && rect2.y < (height - 150) && keyIsDown(49))
    rect2.y += 20;
  if (keyIsDown(38) && rect2.y > 0 && keyIsDown(49))
    rect2.y -= 20;
}

function ballmove() {
  if (ball.x < 0 || ball.x > width)
    ball.game = 0;
  if (ball.y < 0 || ball.y > (height - 25))
    ball.yspeed = ball.yspeed * -1;
  if (ball.x < (rect.x + 25) && ball.y > rect.y && ball.y <= (rect.y + 150))
  {
    ball.xspeed = ball.xspeed * -1;
    ball.xspeed = ball.xspeed + 3;
  }
  if (ball.x > (rect2.x - 25) && ball.y > rect2.y && ball.y <= (rect2.y + 150))
  {
    ball.xspeed = ball.xspeed * -1;
    ball.xspeed = ball.xspeed - 3;
  }
  ball.x += ball.xspeed;
  ball.y += ball.yspeed;
}

function draw() {
  background(0);
  fill(255);
  rect(rect.x, rect.y, 25, 150);
  rect(rect2.x, rect2.y, 25, 150);
  rect(ball.x, ball.y, 25, 25);
    rectmove();
    //textSize(32);
  //text("pout", 10, 30);
    if (key == ' ')
        ball.start = 1;
  if (ball.game == 1 && ball.start == 1)
    ballmove();
    else
    {
        init();
        ball.game = 1;
        ball.start = 0;
    }
}