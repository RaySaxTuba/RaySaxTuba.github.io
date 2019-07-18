let mainMenu, agp;

function preload() {
  agp = loadImage("data/AngryGrampa.jpg");
}

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  imageMode(CENTER);
  
  mainMenu = new Screen(
  color(255, 255, 0), 
  "Welcome to Ray's Character Thing Quiz!",
  "Main Menu",
  "Start",
  agp,
  "Tuba Rage!"
  );
}

function draw() {
  mainMenu.display();
}
// Put particles for effect!
