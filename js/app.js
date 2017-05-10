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

//email form

  //on click of portrait open email form-control

  //take email form data

  //send email form data
$function() {
  var $form = $("#contactForm");
  var $formMessages = $(#formMessages);
  //event listener for the contact form
    $form.submit(function(event) {
      //stop the browser from submitting form
      event.preventDefault();
      //serialize the form data
      var $formData = $form.serialize();
      //Submit the form using ajax
      $.ajax({
        type: 'POST',
        url: $form.attr('action'),
        data: $formData
      })
      .done(function(response) {
        //Make sure that the formMessages div has the "success" class
        $formMessages.removeClass("error");
        $formMessages.addClass("success");

        // Set the message text
        $formMessages.text(response);

        //Clear the form
        $("#name").val('');
        $("#email").val('');
        $('#message').val('');
      })
      .fail(function(data) {
        //Make sure the formMessages div has the 'error' class
        $formMessages.removeClass('success');
        $formMessages.addClass('error');

        // Set the message text.
        if (data.responseText !== '') {
          $formMessages.text(data.responseText);
        } else {
          $formMessages.text("Oops! An error occured and your message could not be sent.")
        }

      });
    }

  )
}
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
