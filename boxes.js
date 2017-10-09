
console.log("hello world");

$(document).ready(function () {
  console.log("ready for DOM manipulation");

  // $('#secretBox').css({'background-color': 'white'});
  // $('#secretBox').prepend('<h1>secret box!</h1>');
  // $('#row1').children().addClass('boxType3');
  // $('#row4 div:last-child').css('display', 'none');
  // $('.boxType1').css({'background-color':'white'});
  // $('#row2 div:nth-child(-n+2)').removeClass();
  // $('.box:not(#secretBox)').css({'width': '2px'});

  $('#container').on('click', function (a) {
    console.log(a.pageX + ", "+ a.pageY);
  });

  // $('.boxType1').wrap('<a href="http://www.galvanize.com"></a>');
  // $('.boxType1').on('click', function () {
  //   console.log("You can never leave this page.");
  //   return false;
  // });
  //

  $('.box').on('click', function () {
    var self = this;
    $(this).addClass('box-animate');

    var animate = setInterval(function(){
      // image is already in the .box and we want to remove it.
      var imgExistsAlready = $(self).children('img')[0] ? true : false;
      if ( imgExistsAlready ) {
        $(self).empty();
        return exitAnimate(self);
      }


      // add an image to the box.
      $(self).append('<img src="http://loremflickr.com/150/150/dog">');
      // check if image was added.
      var imgExists = $(self).children('img')[0] ? true : false;
      if (imgExists) {
        return exitAnimate(self);
      } else {
        $(self).empty();
        return exitAnimate(self);
      }
    }, 100);

    function exitAnimate (klass) {
      $(klass).removeClass('box-animate');
      return clearInterval(animate);
    }

  });
//
// document.getElementById('container').addEventListener('click', function (event) {
//   if(event.target.id == 'container') {
//     $(this).css({'background-color': 'rgb(0, 209, 8)'});
//   }
//   else {
//     $('#container').css({'background-color': 'black'});
//     $(event.target).css({'background-color': 'white'});
//     console.log(event);
//   }
//   });
//
//
// });
