
$(function(){

  $('#container').on('click', function(e){

    if(!$(e.target).is($(this))){

      $(e.target).css('background','white');
      $(this).css('background','black');

    } else

      $(this).css('background','lime');
  });


  $(".boxType1").append("<a href='http://www.galvanize.com'>Galvanize</a>")
      .on('click', function(){

        alert("Sorry you can't leave");
          event.preventDefault();
  });


  $('div .box').append("<img style='display: none' src='http://wallpaperhdbase.com/wp-content/gallery/ugly-puppy-pictures/Old+Ugly+Chi.jpg' height='140px'>")
      .on('click', function(){

        $(this).children().toggle('fast');
  });

});


