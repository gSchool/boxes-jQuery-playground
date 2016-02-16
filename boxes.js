console.log('hello world!')
  // $(function() {
  //     console.log( "ready!" );
  // });


$(function() {
  $(document).ready(function() {
    console.log("ready!");
    $('#secretBox').css({'background-color':'white'}).append('<h1>Secret Box!</h1>');
    $('#row1').children().addClass('boxType3');
    $('#row4').children().last().hide();
    $('.boxType1').css({'background-color':'white'});
    $('#row2 div:nth-child(1)').removeClass();
    $('#row2 div:nth-child(2)').removeClass();
    $('.box:not(#secretBox').css({width: '2px'});
    $('#container').on('click', function(e) {
      console.log(e.clientX);
      console.log(e.clientY);
    })
    $('.boxType1').wrap('<a href="http://www.galvanize.com"></a>')


    $('a').on('click', function() {
      alert('You may never leave the page!');
      event.preventDefault();
    });
    $('.box').append('<img id="theImg" src="http://www.fillmurray.com/100/100"/>');
    $('.box').children().hide();
    $('.box').on('click', function() {
      $(this).children().toggle();
    });
    $('#container').on('click', function(e) {
      if (e.target.id === 'container') {
        $(this).css({
          "background-color": 'limegreen'
        });
      } else {
        $(e.target).css({
          "background-color": 'white'
        })
        $(this).css({
          "background-color": 'black'
        });
      }
    })
  });

});
