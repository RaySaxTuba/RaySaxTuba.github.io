var agp, mahCandy;

function preload() {
  soundFormats('wav', 'mp3');
  agp = loadImage("data/AngryGrampa.jpg");
  mahCandy = loadSound("data/The kitchen has finally closed!.wav");
}

function setup() {
  createCanvas(500, 500);
  imageMode(CENTER);
  textAlign(CENTER);
  // Make volume get higher as the sound loops!
  // Multiple quotes!
  // Make the "I've had it with you!" quote!
  mahCandy.play();
}

function draw() {
  background("red");
  translate(width/2, height/2);
  rotate(millis()/1000);
  image(agp, 0, 0, 100, 100);
  rotate(millis()*2/1000);
  text("Lesbian Burgers!", 0, 0);
}
// Make an app that has your audio quotes in it!
