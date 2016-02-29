$(document).ready(function() {

  $('#podForm').on("submit", function(event) {

    event.preventDefault();

    var sampleData = {
      podName: $("#podName").val(),
      podEmail: $("#podEmail").val(),
      podPhone: $("#podPhone").val(),
      podNumber: $("#podNumber").val(),
      podHot: $("#podHot:checked").val(),
      podIssue: $("#podIssue").val(),
    }

    $.ajax({
      url: '/pod-email',
      type: 'post',
      dataType: 'json',
      
      data: sampleData,
      success: function(data) {
        console.log(data);
        $("#podForm").removeClass("pod-form-wrap").addClass("pod-form-wrap-hide");
        $("#pod-submit-confirm-id").removeClass("pod-submit-confirm-hide").addClass("pod-submit-confirm-show");
        $("#pod-header").addClass("pod-success-header-hide");
        $("#pod-header-success").addClass("pod-header-success-show");
      }
    });
  });
});