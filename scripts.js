$(document).ready(function(){
    copyText()
    darkMode()
    darkModeLabel()
});

function copyText(){
    $(".copy-btn").click(function (e) {
        var temp = $("<input>")
        $("body").append(temp);
        e.preventDefault();
        txtID = $(this).data("content")
        var txt = $(`${txtID}`)
        temp.val(txt.text()).select()
        document.execCommand("copy")
        console.log("Hello")
        temp.remove()
    });
}


$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();

//   var viewportTop = 0;
//   var viewportBottom = 200;

  console.log("Element Top", elementTop)
  console.log("Element Bottom", elementBottom)
  console.log("View Top", viewportTop)
  console.log("View Bottom", viewportBottom)
  console.log("*********************************")

  return elementBottom > viewportTop && elementTop < viewportBottom-700;
};

$(window).on('resize scroll', function() {
  $('.content-tag').each(function() {
      var activeTag = $(this).attr('id');
    if ($(this).isInViewport()) {
      $(`#${activeTag}-tag`).addClass('content-active');
    } else {
      $(`#${activeTag}-tag`).removeClass('content-active');
    }
  });
});


function darkMode(){
  $('#darkmode-switch').change(function () {
    if($('#darkmode-switch').hasClass('active')){
      $('#darkmode-switch').removeClass('active')
      $('#switch-label').text('Change Dark Mode')
      $('body').css('background', 'white');
      $('body').css('color', 'black');
      $('.content-menu-link').removeClass('text-white');
      $('.content-menu-link').css('color', 'black');
    }
    else{
      $('#switch-label').text('Change Light Mode')
      $('#darkmode-switch').addClass('active')
      $('body').css('background', '#2C2C2B');
      $('body').css('color', 'white');
      $('.content-menu-link').css('color', 'white');
    }
  });
}