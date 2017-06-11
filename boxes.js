$( document ).ready(function() {
  alert("Ready for DOM manipulation.");
});
$(function() {
  alert("Ready for DOM manipulation.");
  $("#secretBox").css({'background': 'white'});

  var $div = $('<div>', {
    'id':'secretBox'
  }).appendTo('#secretBox');
  $("<h1></h1>").text("secret box!").appendTo($div);

  $("#row1").addClass("boxType3");

  $("#row4 :last-child").hide();

  $(".boxType1").css({'background': 'white'});

  $("#row2 :nth-child(-n+2)").css({'background': 'transparent'});

  $('.box:not(div#secretBox)').width('2px')

  $("#container").on('click', function(e) {
    console.log(e.pageX, e.pageY);
  });

  $(".boxType1").on('click', function() {
    $(".boxType1").wrap('<a href="www.galvanize.com"></a>');
    alert("You can never leave this page!");
    event.preventDefault();
  });

  $('.box').on('click', function() {
    $(this).css({'background-image': 'url(https://pbs.twimg.com/profile_images/562466745340817408/_nIu8KHX.jpeg)'});
  })

  $(function(){
      $('#container').on('click', function(event){
        $(this).css({'background-color': 'black'})
        $(event.target).css({'background-color': 'white'})
        if (event.target == this) {
          $(this).css({'background-color': 'rgb(50, 255, 46)'})
        }
      })
    })
});
