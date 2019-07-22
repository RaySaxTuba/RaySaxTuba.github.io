var word;
let visAmt;
function visitCount() {
  visAmt += 1;
  if (visAmt > 1) {
    word = "views";
  }
  else {
    word = "view";
  }
  document.getElementById('visCnter').innerHTML = visAmt;
  document.getElementById('plur').innerHTML = word;
}
