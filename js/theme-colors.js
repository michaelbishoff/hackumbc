// Draws all of the background images
function drawBackground() {
  refresh({element: document.getElementById('intro-background'),
           parent: document.getElementById("intro"),
           color: 'BuPu',
           idAttr: "intro-background",
           classAttr: "intro-background",
           cell_size: 75});

  refresh({element: document.getElementById('faq-tri'),
           parent: document.getElementById('faq-background'),
           color: 'BuPu',
           idAttr: 'faq-tri',
           classAttr: 'banner-background'});

  refresh({element: document.getElementById('sponsors-tri'),
           parent: document.getElementById('sponsors-background'),
           color: "BuPu",
           idAttr: 'sponsors-tri',
           classAttr: 'banner-background'});

  refresh({element: document.getElementById('team-tri'),
           parent: document.getElementById('team-background'),
           color: "BuPu",
           idAttr: 'team-tri',
           classAttr: 'banner-background'});
}

// Re-draws the background
function refresh(params) {
  // Removes the background if it's already there
  if (params.element != undefined) {
    params.element.remove();
  }
  
  // Creates the triangle pattern
  var pattern = Trianglify({
    width: params.parent.clientWidth,
    height: params.parent.clientHeight,
    x_colors: params.color,
    cell_size: params.cell_size || 110
  });
  
  params.element = pattern.svg();
  params.element.setAttribute("id", params.idAttr);
  params.element.setAttribute("class", params.classAttr);

  // Inserts the background as the first element in the parent
  params.parent.insertBefore(params.element, params.parent.firstChild);
}

window.onresize = drawBackground;
drawBackground();

// Changes the theme to dark or light when the logo is clicked
$('#logo').click(function (){
  // If we're on the light theme, switch to dark
  if ($('link[href="css/style-light.css"]').attr('href')) {
    $('link[href="css/style-light.css"]').attr('href','css/style-dark.css');
    $('link[href="css/responsive-light.css"]').attr('href','css/responsive-dark.css');
  }
  else {
     $('link[href="css/style-dark.css"]').attr('href','css/style-light.css');
    $('link[href="css/responsive-dark.css"]').attr('href','css/responsive-light.css');
  }
});