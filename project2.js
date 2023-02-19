$(document).ready(function() {
  // Toggle the receive spam checkbox
  $("#receivespambutton").click(function() {

    if($($("#receivespambutton").children()[0]).attr("src")=="pics/unchecked.png") {
      $($("#receivespambutton").children()[0]).attr("src","pics/checked.png");
      $("#spamyn").val("y");
    } else {
      $($("#receivespambutton").children()[0]).attr("src","pics/unchecked.png");
      $("#spamyn").val("n");
    }
  });


  // Play video
  $("#videoplayer").mousedown(function() {

    if($($("#videoplayer").children()[0]).attr("src")=="pics/play.png") {
      $($("#videoplayer").children()[0]).attr("src","pics/pause.jpg");
      $("#thevideo")[0].play();
    } else {
      $($("#videoplayer").children()[0]).attr("src","pics/play.png");
      $("#thevideo")[0].pause();
    }
  });
// Form validation
$("#signupbutton").click(function() {
  var isChecked = $("#spamyn").prop("checked");
  var additionalInfo = $("#additional-info").val();

  if ($("#first-name").val() == "" || $("#last-name").val() == "") {
    $("#name").addClass("error");
    alert("Please fill out all name fields.");
    return;
  } else {
    $("#name").removeClass("error");
  }

  if ($("#email").val() == "") {
    $("#email").addClass("error");
    alert("Please fill out the email field.");
    return;
  } else {
    $("#email").removeClass("error");
  }

  if (!isChecked) {
    alert("Please opt in to receive occasional emails with offers from us.");
    return;
  }

  alert("Thank you for subscribing to our " + (isChecked ? "promotions" : "newsletters") + "! " + (additionalInfo ? ("Additional Information: " + additionalInfo) : ""));
  $(this).attr("aria-pressed", "true");
});


