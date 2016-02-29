$(document).ready(function() {

  $('.job-button').click(function(event){

    event.preventDefault();

    // figure out if we're open or closed
    $el = $(this).parent().parent().find('li:nth-child(2)');
    $button = $(this)

    // if closed
    if($el.is(':visible')) {
      $el.slideUp(function(){
        $button.find(plus).text("+");
      });
    } else {
      $el.slideDown(function(){
        console.log(this);
        $button.find(plus).text("-");
      });
    }

  });
});