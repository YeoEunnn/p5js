let c1, c2;

function setup() {
  createCanvas(600, 400);
  colorMode(RGB);
  c1 = color('#c3d0c5');
  c2 = color('#096c28');
}

function draw() {
  background(220, 240, 255);
  let t = millis() / 1000;
  let moveX = sin(t) * 30;
  let moveY = cos(t) * 20;
  let sizeChange = 1 + sin(t * 2) * 0.3;
  let colorRate = (sin(t) + 1) / 2;
  let changingColor = lerpColor(c1, c2, colorRate);
  
  // 직사각형
  stroke(255);
  fill(240);
  rect(200, 0, 200, 400);
  
  // weight 5 선
  stroke(200);
  strokeWeight(5);
  line(350, 0, 0, 150);
  line(0, 50, 500, 400);
  line(450, 220, 600, 50);
  
  // weight 2 선
  stroke(180);
  strokeWeight(2);
  line(0, 350, 450, 220);
  line(100, 320, 0, 150);
  line(200, 0, 360, 400);
  
  // weight 1 선
  stroke(120);
  strokeWeight(1);
  line(600, 200, 200, 400);
  
  // 호
  let angle = frameCount * 0.02;
  let centerX = 100;
  let centerY = 320;
  let r = 25;
  let offsetX = 20;
  let offsetY = 15;
  let pointX = centerX + offsetX * cos(angle) - offsetY * sin(angle);
  let pointY = centerY + offsetX * sin(angle) + offsetY * cos(angle);
  push();
  translate(centerX, centerY);
  rotate(angle);
  
  fill(120);
  noStroke();
  arc(0, 0, 100, 100, 0, PI + QUARTER_PI);
  pop();

  
  // 원, 타원 시계방향 순
  fill(changingColor);
  noStroke();
  circle(300 + moveX, 100 + moveY, 100 * sizeChange);
  ellipse(450 + cos(t) * 25, 200 + sin(t) * 20, 150 * sizeChange, 100 * sizeChange);
  circle(300 - moveX, 300 - moveY, 100 * sizeChange);
  circle(150 + sin(t * 1.5) * 20, 200, 70 * sizeChange);
  
  fill(lerpColor(color('#a1b6a4'), color('#d3dcd5'), colorRate));
  quad(525, 200, 495, 240, 400, 300, 470, 205);
  quad(300, 100, 450, 200, 300, 300, 150, 200);
  
  // 점
  stroke('#d3dcd5');
  strokeWeight(10 + sin(t * 3) * 5);
  point(550 + moveX, 350);
  point(80, 80 + moveY);
  
  stroke('#e4e9e5');
  strokeWeight(15);
  point(pointX, pointY);
  point(300, 90);
  point(300, 180);
  point(300, 200);
  point(300, 220);
  point(300, 310);
  
  // 삼각형, 평행사변형
  fill(lerpColor(color('#096c28'), color('#c3d0c5'), colorRate));
  noStroke();
  triangle(550 + moveX, 30, 340, 70 + moveY, 450, 150);
  quad(110, 310, 140, 302, 80, 200, 50, 208);
  
  stroke(lerpColor(color('#096c28'), color('#a1b6a4'), colorRate));
  strokeWeight(30 * sizeChange);
  point(500 + cos(t) * 20, 340 + sin(t) * 20);
}

function keyPressed() {
  if (key === 's') {
    saveGif('20233129_4', 10);
  }
}