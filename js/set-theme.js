// Sets the theme to light or dark depending on the time of day
function setTheme() {
  var hour = new Date().getHours();
  var style = document.createElement("link");
  var responsive = document.createElement("link");
  
  // If it's past 6pm or before 6am, set dark theme
  if (hour > 18 || hour < 6) {
    style.setAttribute("href", "css/style-dark.css");
    style.setAttribute("rel", "stylesheet");
    responsive.setAttribute("href", "css/responsive-dark.css");
    responsive.setAttribute("rel", "stylesheet");
    
    document.getElementsByTagName("head")[0].appendChild(style);
    document.getElementsByTagName("head")[0].appendChild(responsive);
  }
  else {
    style.setAttribute("href", "css/style-light.css");
    style.setAttribute("rel", "stylesheet");
    responsive.setAttribute("href", "css/responsive-light.css");
    responsive.setAttribute("rel", "stylesheet");
    
    document.getElementsByTagName("head")[0].appendChild(style);
    document.getElementsByTagName("head")[0].appendChild(responsive);
  }
}
setTheme();