let bg, chooser, sizeOfText;
let quotes, quotes2, name1, name2, qArray;

function preload() {
  
}

function setup() {
  createCanvas(600, 600);
  
  quotes = [
  ["Mah ", " candy!"],
  ["The bonus will come when you squeeze ", "'s rocks!"]
  ];
  name1 = "";
  name2 = "";
  
  bg = color('#ffeead');
  chooser = 0;
  sizeOfText = 20;
  textSize(sizeOfText);
  textAlign(CENTER);
  stroke(0, 132, 132);
  rectMode(CENTER);
}

function draw() {
  background(bg);
  fill(0);
  text("Enter yo name!:", width/2, sizeOfText);
  text(name1, width/2, sizeOfText*2);
  fill(255, 0, 0);
  text(
    name2,
    width/2,
    height/2,
    500,
    sizeOfText*3
  );
}
// They were expensive asstuba!
function keyPressed() {
  if (key == BACKSPACE || key == DELETE) {
    if (name1.length() > 0) {
      name1 = name1.substring(0, name1.length()-1);
    }
  }
  else if (key == ENTER || key == RETURN) {
    if (name1.length() > 0) {
      chooser = int(random(2));
      name2 = quotes[chooser][0] + name1 + quotes[chooser][1];
      print(name2); // Print to console to see name2
      name1 = ""; // Clear the variable
    }
  }
  else if ((key > 31) && (key != CODED)) {
    // If the key is alphanumeric, add it to the String
    name1 += key;
  }
}
