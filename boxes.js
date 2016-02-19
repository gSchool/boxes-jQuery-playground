// // Exercise 1,2
// $(function() {
//   // alert("Ready for DOM manipulation, baby.");
//   $("#secretBox").css("background-color","white").append("<span><h1>secret box!</h1></span>")
//   $('#row4 div:last-child').css("display", "none");
//   $('.boxType1').css("background-color","white");
//   $('#row2 div:eq(0)').css("background","none");
//   $('#row2 div:eq(1)').css("background","none");
//   //$('#row2 div:nth-last-child(n+3)').css("background","none");
//   $('#row1').children().attr("class","box boxType3");
//   $("div").not(".row, #secretBox, #container").css("width", "2px");
// });

// console.log("hello world");

// Events, exercise 3
// $(function(){
//   $('#container').on('click', function(e){
//     var offset = $(this).offset();
//     console.log(e.pageX - offset.left);
//     console.log(e.pageY - offset.top);
//   });
  // $('.boxType1').on('click', function(){
  //   window.location = 'http://www.galvanize.com';
  // });
  // $('.boxType1').on('click',function(){
  //   window.stop();
  //   alert("DON'T GO ANY FURTHER. GALVANIZE IS BLOCKED PUNK!")
  // });
  // $('.box').append('<img style="display: none" src="http://media.mydogspace.com.s3.amazonaws.com/wp-content/uploads/2013/08/puppy-500x350.jpg" height="128px" width="128px">')
  //  $('.box').on('mouseup', function(){
  //   $(this).children().toggle('slow');
  // });

  // ternary operator
  // $(event.target).hasClass('box') ? $(event.target).css("background-color","white") : $(event.target).css("background-color","limegreen")

  // $('#container').on('click', function(e){
  //   $(this).css("background-color","black");
  //   var 

  //     if ($(e.target).hasClass('box')){
  //       $(e.target).css("background-color","white");
  //     } else {
  //       $(e.target).css("background-color","limegreen");
  //     }
  // });
// });