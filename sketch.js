let x = 100;
let y = 100;
let speed = 5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(x, y, 50, 50); // ボールを描画
  if (keyIsDown(LEFT_ARROW)) x -= speed;
  if (keyIsDown(RIGHT_ARROW)) x += speed;
  if (keyIsDown(UP_ARROW)) y -= speed;
  if (keyIsDown(DOWN_ARROW)) y += speed;
}