// this is the javascript for the website
// This is the copyright year updater code
var year = 2019;
// These are quotes from people including me!
var rayQuotes = [
  'The tuba is loud!',

  'The force is strong with mah stinky breath!',

  'Yay chuba yay!',

  'I hope the Psycho Dad doesn\'t touch Ratchet and Clank!',

  'Mah asstuba!'
];
// Make more dimensions of the quote array.
var agpQuotes = [
  'Mah candy!',

  'Can\'t get no sleep! ' +
  'Can\'t get no rest! ' +
  'Can\'t get no respect!',

  'I\'ve had it with you! ' +
  'Ain\'t nothing left to tear up! ' +
  'The kitchen, has finally closed!!',

  'I want a B, U, N! Not B, R, E, A, D. ' +
  'I ain\'t eating no goddamn sandwich!!',

  'You bought your bastards! Clean it up!'
];

var vegetaQuotes = [
  'It\'s over 9000!!!!'
];

var shrekQuotes = [
  'Ogres are like onions!',

  'I don\'t care, what everyone likes. ' +
  'Ogres are not like cakes!',

  'No! You dense, irritating, immature beast of burden! ' +
  'Ogres are like onions! End of story! ' +
  'Bye bye. See you later.',

  'For five minutes, could you not be yourself... ' +
  'For five minutes!!??'
];

var grimQuotes = [
  'Me Grimlock no like you!',

  'Me Grimlock, like!'
];

var opQuotes = [
  'Bumblebee, stop lubricating the man!'
];

var ratchetQuotes = [
  'Touch him, and it\'s plasma city!'
];

var robertQuotes = [
  'Nova 6 asstuba!',
  'Her asstuba is Nova 6.',
  'Mah stinky breath burrito...'
];

var razielQuotes = [
  'Damn you Kain! You are not God! ' +
  'This act of genocide is unconscionable!',

  'Answer me brother, ' +
  'or I will beat an answer from your horrid lips!'
];

var quoteList = [
  rayQuotes,
  agpQuotes,
  vegetaQuotes,
  shrekQuotes,
  grimQuotes,
  opQuotes,
  ratchetQuotes,
  robertQuotes
];

document.getElementById('copyright').innerHTML = year;

function quoteChoose() {
  var sayer, chosen;
  var chooser = Math.floor(Math.random()*quoteList.length);
  chosen = quoteList[chooser];
  /*
  for (i = 0; i <= quoteList.length; i++) {
    if ()
  }
  */

  switch (chooser) {
    case 0:
      sayer = "Me!";
      break;
    case 1:
      sayer = "Angry Grandpa";
      break;
    case 2:
      sayer = "Vegeta";
      break;
    case 3:
      sayer = "Shrek";
      break;
    case 4:
      sayer = "Grimlock"
      break;
    case 5:
      sayer = "Optimus Prime"
      break;
    case 6:
      sayer = "Ratchet (R&C)"
      break;
    case 7:
      sayer = "Robert Brickey"
      break;
  }

  var postChoose = Math.floor(Math.random()*chosen.length);
  document.getElementById('footquotes').innerHTML =
  '"'+chosen[postChoose]+ '"' + " -- " + sayer;
}
quoteChoose();
// Make visit counter and button to change quote.
document.getElementById('kw').content =
"Raymond Raps, funny, Robert Brickey, " +
"rage, angry, anime, Angry Grandpa, Psycho Dad, " +
"tuba, saxophone, Tourettes Guy, multi-instrumentalist, " +
"Metroid, Zelda, Legacy of Kain, filmnstuff";
