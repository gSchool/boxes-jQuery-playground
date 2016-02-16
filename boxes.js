
$(function(){
  console.log("ready");

  $('#container').on('click', function(e){

    if(!$(event.target).is($(this))){

      $(event.target).css('background','white');
      $(this).css('background','black');

    } else

      $(this).css('background','lime');

  });


  $( ".boxType1").append("<a href='http://www.galvanize.com'>Galvanize</a>")
      .on('click', function(){

        if(alert("Sorry you can't leave")){
        }else
          $('a').attr('href', 'http://localhost:63342/boxes-jQuery-playground/boxes.html');
  });


  $('div .box').append("<img style='display: none' src='http://wallpaperhdbase.com/wp-content/gallery/ugly-puppy-pictures/Old+Ugly+Chi.jpg' height='140px'>")
      .on('click', function(){

      $(this).children().toggle('fast');
  });

});


