//Create a select and append to #menu
var $select = $("<select></select>");
$(".main-header").append($select);

//Cycle over menu links
$("#main-nav a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option>");

  //Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //option's value is the href
  $option.val($anchor.attr("href"));
  //option's text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});

//Bind change listener to the select
$select.change(function(){
  //Go to select's location
  window.location = $select.val();
});

//about-overlay jquery
var $aboutOverlay = $('<div id="about-overlay"></div>');
var $story = $("<p></p>");

$aboutOverlay.append($story);

$("body").append($aboutOverlay);

$(".profile a").click(function(event){
  event.preventDefault();
})

//lightbox jquery
var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

$overlay.append($image);

$overlay.append($caption);

$("body").append($overlay);

$("#propSold a").click(function(event){
  event.preventDefault();
  var imageLocation = $(this).attr("href");
  $image.attr("src", imageLocation);
  $overlay.show();
  var captionText = $(this).children("img").attr("alt");
  $caption.text(captionText);
});

$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});
