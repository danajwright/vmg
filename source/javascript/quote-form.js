$(document).ready(function() {

  $('#quoteForm').on("submit", function(event) {

    event.preventDefault();

    var sampleData = {
      fullName: $("#quoteName").val(),
      email: $("#quoteEmail").val(),
      phone: $("#quotePhone").val(),
      pickupZip: $("#quotePickupZip").val(),
      pickupDate: $("#quotePickupDate").val(),
      deliverZip: $("#quoteDeliverZip").val(),
      deliverDate: $("#quoteDeliverDate").val(),
      cargoVal: $("#quoteCargoVal").val(),
      cargoWeight: $("#quoteCargoWeight").val(),
      cargoDims: $("#quoteCargoDims").val(),
    }

    $.ajax({
      url: '/quote-email',
      type: 'post',
      dataType: 'json',
      
      data: sampleData,
      success: function(data) {
        console.log(data);
        $("#quoteForm").removeClass("modal-form-wrap").addClass("modal-form-wrap-hide");
        $("#form-submit-confirm-id").removeClass("form-submit-confirm-hide").addClass("form-submit-confirm-show");
        $("#modal-header").addClass("modal-header-hide");
        $("#modal-header-success").addClass("modal-header-success-show");
      }
    });

  });


});