var count = 0;
$(document).ready(function(){
  document.getElementById("navMenu").innerHTML =

'<div class="navbar-header">' +
 '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar" id="navButton" onclick="hideShow()">' +
        '<span class="icon-bar"></span>' +
        '<span class="icon-bar"></span>' +
        '<span class="icon-bar"></span> ' +
      '</button>' +
      '<a class="navbar-brand" href="index.html"><img src="navbarHeaven.JPG" id="header"></a>' +
    '</div>' +
    '<div class="collapse navbar-collapse" id="myNavbar">' +
      '<ul class="nav navbar-nav">' +
        '<li><a href="index.html">Home</a></li>' +
        '<li><a href="roster.html">Roster</a></li>' +
        '<li><a href="teamNews.html">News</a></li> ' +
        '<li><a href="aboutUs.html">About Us</a></li>' +
      '</ul>' +
    '</div>'
;
})

function hideShow() {
    if(count%2 ==0)
      document.getElementById("bg").style.top = "16.65em";
    else
      document.getElementById("bg").style.top = "4.11em";
count++;
}




 