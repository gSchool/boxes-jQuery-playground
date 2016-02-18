console.log("hello world");

$( document ).ready(function() {
    // $("#secretBox").css({'background-color': 'white'});
    // $('#secretBox').append('<h1>secret box!<h1>');
    //
    // $("#row1 > div").addClass("boxType3");
    //
    // $("#row4 > div:last-child").css({'display': 'none'});
    //
    // $('.boxType1').css({'background-color':'white'})
    //
    // $("#row1 > div:first").removeClass();
    // $("#row1 > div:nth-child(2)").removeClass();
    //
    // $(".box:not(#secretBox)").css({'width':'2px'});
    //
    // $('#container').on('click', function(e){
    //   console.log(e.pageX);
    //   console.log(e.pageY);
    // })

    // $('.boxType1').append('<a href="www.galvanize.com">Click me</a>')
    // $('a').on('click', function(){
    //   alert("You can never leave!!");
    //   event.preventDefault();
    // })
    //
    // $('.box').append('<img src="http://lorempixel.com/image_output/animals-q-c-150-150-6.jpg">')
    // $('.box').children().hide();
    // $('.box').on('click', function(){
    //   $(this).children().toggle();
    // })

    $("#container").on('click', function(e){
      if(e.target.id === 'container'){
        $(this).css({'background-color':'#32CD32'})
      }else {
      $(this).css({'background-color':'black'})
      $(e.target).css({'background-color':'white'})
    }
    })

});
