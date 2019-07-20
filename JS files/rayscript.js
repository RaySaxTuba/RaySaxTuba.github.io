// this is the javascript for the website

// This is the copyright updater code
var year = 2019;
// These are quotes from people including me!
var rayQuotes = [
  'The tuba is loud!',
  'The force is strong with mah stinky breath!',
  'Yay chuba yay!',
];

var agpQuotes = [
  'Mah candy!',

  '"Can\'t get no sleep!' +
  'Can\'t get no rest!' +
  'Can\'t get no respect!"',

  'I\'ve had it with you! ' +
  'Ain\'t nothing left to tear up! ' +
  'The kitchen, has finally closed!!'
];

var animeQuotes = [
  'It\'s over 9000!!!!'
];

var quoteList = [
  rayQuotes,
  agpQuotes,
  animeQuotes
];

document.getElementById('copyright').innerHTML = year;

function quoteChoose() {
  var sayer, chosen;
  var chooser = Math.floor(Math.random()*quoteList.length);

  switch (chooser) {
    case 0:
    chosen = quoteList[chooser];
    sayer = "Me!";
      break;
    case 1:
    chosen = quoteList[chooser];
    sayer = "Angry Grandpa";
      break;
    case 2:
    chosen = quoteList[chooser];
    sayer = "Vegeta";
      break;
  }
  var postChoose = Math.floor(Math.random()*chosen.length);
  document.getElementById('footquotes').innerHTML =
  "\""+chosen[postChoose]+ "\"" + " -- " + sayer;
}
quoteChoose();
// Make visit counter.
