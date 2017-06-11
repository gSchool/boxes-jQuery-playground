$(document).ready(function() {
  alert('I am ready for DOM manipulation');
  // $( '#secretBox' ).css({ 'background-color': 'white' }).append( '<h1>secret box!</h1>' );
  // $( '#row1 > div' ).addClass( 'boxType3' ).removeClass( 'boxType1' );
  // $( '#row4 > div:last-child' ).css({ 'display': 'none' });
  // $( '.boxType1' ).css({ 'background-color': 'white' });
  // $( '#row2 > div:nth-child(-n+2)' ).css({ 'all': 'unset' });
  // $( '#container > .row > .box:not(#secretBox)' ).css({ 'width': '2px' });

  $('#container').click(function(cord) {
    var offset = $(this).offset();
    var x = (cord.pageX - offset.left);
    var y = (cord.pageY - offset.top);
    console.log("X: " + x + "  Y: " + y);
  });

  $('.boxType1').append('<a href="http://www.galvanize.com/">Galvanize</a>');
  $('.boxType1 a').click(function() {
    alert('You can never leave this page');
    return false;
  });

  $('div.box').click(function() {
    if ($(this).css('background-image') == 'none') {
      $(this).css({
        'background-image': 'url("http://cdn.hasinstinct.com/2015/08/12/white-cute-puppy-jpg.jpg")',
        'background-size': '154px 154px'
      });
    } else {
      $(this).removeAttr("style");
    }
  });

  $('#container').click(function() {
    if (event.target == this) {
      $(this).css({
        'background-color': 'limeGreen'
      });
    } else {
      $(event.target).css({
        'background-color': 'white'
      });
      $(this).css({
        'background-color': 'black'
      });
    }
  });

});
