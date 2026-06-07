let circle1X = 120;
let circle1Y = 90;
let circle1DX = 2;
let circle1DY = 2;
let circle1Size = 40;

let circle2X = 500;
let circle2Y = 300;
let circle2DX = -2;
let circle2DY = 2;
let circle2Size = 50;

let moveCircles = false;

let backR = 210;
let backG = 225;
let backB = 240;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#E8EEF7');

  // 배경 장식
  // 흰 직사각형
  noStroke();
  fill('#F5F5F5');
  rect(170, 30, 260, 320, 20);

  // 인물 뒤 원
  fill(backR, backG, backB);
  ellipse(300, 200, 300, 300);

  // @@ r 누르면 공 이동 @@
  if (moveCircles) {
    circle1X += circle1DX;
    circle1Y += circle1DY;
    
    circle2X += circle2DX;
    circle2Y += circle2DY;
    
    // 벽 튕김
    if (circle1X - circle1Size / 2 < 0 || circle1X + circle1Size / 2 > width) {
      circle1DX *= -1;
    }
    if (circle1Y - circle1Size / 2 < 0 || circle1Y + circle1Size / 2 > height) {
      circle1DY *= -1;
    }

    if (circle2X - circle2Size / 2 < 0 || circle2X + circle2Size / 2 > width) {
      circle2DX *= -1;
    }
    if (circle2Y - circle2Size / 2 < 0 || circle2Y + circle2Size / 2 > height) {
      circle2DY *= -1;
    }
  }
  
  // 작은 두 원 >> 움직임
  fill(235, 190, 210, 150);
  ellipse(circle1X, circle1Y, circle1Size);
  fill(120, 150, 180, 150);
  ellipse(circle2X, circle2Y, circle2Size);

  // 머리 뒤쪽
  noStroke();
  fill('#6B4E3D');
  rect(200, 80, 200, 280, 90, 90, 20, 20);

  // 귀
  fill('#E8C9B5');
  ellipse(220, 185, 24, 32);
  ellipse(380, 185, 24, 32);

  // 얼굴
  fill('#F5DDCF');
  ellipse(300, 185, 145, 175);

  // 상의
  fill('#394264');
  rect(222, 288, 160, 120, 40, 40, 0, 0);

  // 목
  fill('#F5DDCF');
  rect(278, 245, 44, 45);
  triangle(278, 290, 322, 290, 300, 320);

  // 머리 앞부분
  fill('#6B4E3D');
  arc(300, 135, 165, 110, PI, TWO_PI);
  quad(229, 180, 290, 165, 320, 130, 210, 130);
  quad(371, 180, 310, 165, 280, 130, 390, 130);

  // 눈썹
  stroke('#5C4335');
  strokeWeight(4);
  line(252, 165, 278, 170);
  line(322, 170, 348, 165);

  // 눈 흰자
  noStroke();
  fill('#FFFFFF');
  ellipse(265, 190, 28, 18);
  ellipse(335, 190, 28, 18);

  // @@@@ 눈동자 mouse interaction @@@@
  
  // 왼쪽 눈
  let dx1 = mouseX - 265;
  let dy1 = mouseY - 190;
  let d1 = dist(mouseX, mouseY, 265, 190);
  
  if (d1 > 4) {
    dx1 = dx1 / d1 * 4;
    dy1 = dy1 / d1 * 4;
  }
  
  let lx = 265 + dx1;
  let ly = 190 + dy1;
  
  // 오른쪽 눈
  let dx2 = mouseX - 335;
  let dy2 = mouseY - 190;
  let d2 = dist(mouseX, mouseY, 335, 190);
  
  if (d2 > 4) {
    dx2 = dx2 / d2 * 4;
    dy2 = dy2 / d2 * 4;
  }
  
  let rx = 335 + dx2;
  let ry = 190 + dy2;
  
  // 눈동자
  fill('#1F1A17');
  ellipse(lx, ly, 15, 15);
  ellipse(rx, ry, 15, 15);

  fill('#FFFFFF');
  ellipse(lx + 4, ly - 4, 5, 5);
  ellipse(rx + 4, ry - 4, 5, 5);

  // 코
  fill('#E7C7B5');
  triangle(300, 198, 292, 215, 308, 215);

  // 볼
  fill(245, 180, 190, 120);
  ellipse(248, 220, 28, 18);
  ellipse(352, 220, 28, 18);

  // 입
  fill('#D98F8F');
  ellipse(300, 240, 34, 18);

  // 귀걸이
  fill('#D9D9D9');
  ellipse(386, 205, 10, 16);
  fill('#F5CF16')
  ellipse(220, 205, 10, 16);
}

// @@@ keyboard interaction @@@
function keyPressed() {
  if (key === 'r' || key === 'R') {
    moveCircles = true;
  }
  
  if (key === 'w' || key === 'W') {
    backR = random(100, 256);
    backG = random(100, 256);
    backB = random(100, 256);
  }
  
  if (key === 's' || key === 'S') {
    saveGif('20233129_3', 7);
  }
}