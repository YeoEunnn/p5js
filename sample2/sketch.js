function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('#E8EEF7');
  
  // 배경 장식
  noStroke();
  fill('#F5F5F5');
  rect(170, 30, 260, 320, 20);
  
  fill(210, 225, 240);
  ellipse(300, 200, 300, 300);
  
  fill(235, 190, 210, 150);
  ellipse(120, 90, 40, 40);
  fill(120, 150, 180, 150);
  ellipse(500, 300, 50, 50);
  
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
  
  // 눈
  noStroke();
  fill('#FFFFFF');
  ellipse(265, 190, 28, 18);
  ellipse(335, 190, 28, 18);
  
  fill('#1F1A17');
  ellipse(265, 190, 15, 15);
  ellipse(335, 190, 15, 15);
  
  fill('#FFFFFF');
  ellipse(269, 186, 5, 5);
  ellipse(339, 186, 5, 5);
  
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