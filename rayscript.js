//This will calculate how many visitors came to this site.
var visit;
function getVisitors() {
	return visit + 1;
}
document.getElementById("viscount").innerHTML = visit;
/*Also check if Angry Grandpa visited the website.
	If so, then greet him!
	And put a stress relieving button that gives feedback!
*/