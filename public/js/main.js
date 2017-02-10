window.onload = function() {
  var openNav = document.getElementsByClassName("open-nav")[0];
  var nav = document.getElementById("navigation-mobile");
  openNav.addEventListener("click", displayNav, false);
  function displayNav() {
    var navArray = nav.getElementsByTagName("a");
    for(var i = 0; i < navArray.length; i++) {
      if(navArray[i].style.display === "block") {
        navArray[i].style.display = "none";
      } else {
        navArray[i].style.display = "block";
      }
    }
  }
};
