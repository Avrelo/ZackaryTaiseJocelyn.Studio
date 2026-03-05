let R, G, B;
let TitleCard;

function setup() {
  createCanvas(windowWidth, windowHeight);
  R = G = B = 255;
  TitleCard =
    "zackarytaisejocelyn.studio \n We will see you soon. \n with love,\n \n @Avrelo_South";
}

function draw() {
  background(R, G, B);

  fill(R / 2, G / 2, B / 2);
  textSize(24);
  textAlign(CENTER);
  textFont("Didot");
  text(TitleCard, width / 2, height / 2);

  //console.log("X:",mouseX,'Y:',mouseY);
  
}

function mousePressed(){
 
  if (dist(mouseX, mouseY, width / 2, height / 2) < 100 && mouseIsPressed) {
    let stored;

    stored = R;
    R = (G / 2 + R) % 255;
    G = (B + G / 3) % 255;
    B = stored;
  } 
  
  
}
