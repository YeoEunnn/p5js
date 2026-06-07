function setup() {
  createCanvas(600, 400);
  background(220, 240, 255);
}

function draw() {
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
  fill(120);
  noStroke();
  arc(100, 320, 100, 100, 0, PI + QUARTER_PI);
  
  // 원, 타원 시계방향 순
  fill('#c3d0c5');
  circle(300, 100, 100);
  ellipse(450, 200, 150, 100);
  circle(300, 300, 100);
  circle(150, 200, 70);
  
  fill('#a1b6a4');
  quad(525, 200, 495, 240, 400, 300, 470, 205);
  quad(300, 100, 450, 200, 300, 300, 150, 200);
  
  // 점
  stroke('#d3dcd5');
  strokeWeight(10);
  point(550, 350);
  point(80, 80);
  
  stroke('#e4e9e5');
  strokeWeight(15);
  point(120, 335);
  point(300, 90);
  point(300, 180);
  point(300, 200);
  point(300, 220);
  point(300, 310);
  
  // 삼각형, 평행사변형
  fill('#096c28');
  noStroke();
  triangle(550, 30, 340, 70, 450, 150);
  quad(110, 310, 140, 302, 80, 200, 50, 208);
  
  stroke('#096c28');
  strokeWeight(30);
  point(500, 340);
}