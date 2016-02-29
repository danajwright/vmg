$(document).ready(function() {

  $('#feedbackForm').on("submit", function(event) {

    event.preventDefault();

    var sampleData = {
      feedbackName: $("#feedbackName").val(),
      feedbackEmail: $("#feedbackEmail").val(),
      feedbackPhone: $("#feedbackPhone").val(),
      feedbackIssue: $("#feedbackIssue").val(),
    }

    $.ajax({
      url: '/feedback-email',
      type: 'post',
      dataType: 'json',
      
      data: sampleData,
      success: function(data) {
        console.log(data);
        $("#feedbackForm").removeClass("feedback-form-wrap").addClass("feedback-form-wrap-hide");
        $("#feedback-submit-confirm-id").removeClass("feedback-submit-confirm-hide").addClass("track-submit-confirm-show");
        $("#feedback-header").addClass("feedback-success-header-hide");
        $("#feedback-header-success").addClass("feedback-header-success-show");
      }
    });
  });
});