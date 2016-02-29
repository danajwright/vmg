$(document).ready(function() {

  $('#trackForm').on("submit", function(event) {

    event.preventDefault();

    var sampleData = {
      trackName: $("#trackName").val(),
      trackEmail: $("#trackEmail").val(),
      trackPhone: $("#trackPhone").val(),
      trackNumber: $("#trackNumber").val(),
      trackIssue: $("#trackIssue").val(),
    }

    $.ajax({
      url: '/track-email',
      type: 'post',
      dataType: 'json',
      
      data: sampleData,
      success: function(data) {
        console.log(data);
        $("#trackForm").removeClass("track-form-wrap").addClass("track-form-wrap-hide");
        $("#track-submit-confirm-id").removeClass("track-submit-confirm-hide").addClass("track-submit-confirm-show");
        $("#track-header").addClass("track-success-header-hide");
        $("#track-header-success").addClass("track-header-success-show");
      }
    });
  });
});