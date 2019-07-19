// Yay this randomises the website icon!
var iconList = [
  "agp.jpg",
  "Ray demon.jpeg",
  "Alexis Rhodes sketch.JPG",
  "Angry Austrailian Dad.jpg",
  "Ray!.jpeg"
];
var pathAdd = "images/";
var listLen = iconList.length;

document.getElementById("rando").setAttribute("href",
pathAdd + iconList[Math.floor(Math.random()*listLen)]
);
