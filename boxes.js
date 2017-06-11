$(function() {
  alert('Ready for DOM manipulation.');
});

$(function() {
  $('#secretBox').css({
    'background-color': 'white'
  });
});

$(function() {
  $('#row1 > div').toggleClass('boxType3');
});

$(function() {
  $('#row4 div:last-child').css({
    'display': 'none'
  });
});

$(function() {
  $('.boxType1').css({
    'background': 'white'
  });
});

$(function() {
  $('#row2 div:lt(2)').css({
    'background': 'none'
  });
});

// $(function() {
//   $('.box').not('#secretBox').css({
//     'width': '2px'
//   });
// });

$(function() {
  $('#container').click(function(loc) {
    console.log(loc.pageX, loc.pageY);
  });
});

$(function() {
  $('.boxType1').append('<a href="http://www.galvanize.com">Galvanize!</a>');
  $('.boxType1').on('click', function(e) {
    alert('You can\'t escape!!!');
    e.preventDefault();
  })
});

$(function() {
  var clicked = false;
  $('.box').on('click', function() {
    if (!clicked) {
      $(this).css({'background-image': 'url("http://www.acuteaday.com/blog/wp-content/uploads/2011/08/french-bulldog-puppy.jpg")'});
      clicked = true;
    } else {
      $(this).css({'background-image': 'none'});
      clicked = false;
    }
  });
});

$(function() {
  $('#container').on('click', function(event) {
    if (event.target.id === 'container') {
      $(this).css({'background-color': 'limegreen'});
    } else {
      $(this).css({'background-color': 'black'});
      $(event.target).css({'background-color': 'white'});
    }
  });
})
