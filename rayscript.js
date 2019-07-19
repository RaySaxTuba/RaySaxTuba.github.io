// this is the javascript for the website

document.getElementsByTagName("nav").innerHTML =
"<ul>\n" +
"<li><a href=\'index.html\'>Home</a></li>\n" +
"<li><a href=\'raybio.html\'>About Me</a></li>\n" +
"<li><a href=\'images.html\'>My images</a></li>\n" +
"<li><a href=\'music.html\'>My music</a></li>\n" +
"<li><a href=\'video.html\'>My videos</a></li>\n" +
"<li><a href=\'quotes.html\'>Favorite Funny Quotes</a></li>\n" +
"<li><a href=\'software.html\'>Ray\'s apps</a></li>\n" +
"</ul>";

currYear = "2019";// Make currYear automatically update itself.
// Make visit counter!

document.getElementById('copyright').innerHTML = currYear;
/*
document.getElementsByTagName('footer').innerHTML =
"&#169; 2017-" + currYear + " Raymond Raps<br>\n" +
"<a href=\"terms_privacy.html\">Terms and Privacy</a><br>\n" +
"Email: <a href=\"mailto:rjraps@gmail.com\">rjraps@gmail.com</a>\n" +
"<br>";
*/
function warn()
{
	window.alert(
		"Warning! This website contains a crazy genius and screwed up content that might be too much for kids. Viewer's discretion is advised."
	);
}
