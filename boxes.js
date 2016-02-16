$(function() {
    alert( "ready for DOM manipulation" );
    // $("#secretBox").css({backgroundColor: 'white'}).prepend('<h1>secret box!</h1>');
    // $("#row1").children().attr('class', 'box boxType3');
    // $('#row4').children().last().hide();
    // $('.boxType1').css({backgroundColor: 'white'});
    // $('#row2').children().slice(0,2).attr('class', 'blop');
    // $('#container div').not(".row").not("#secretBox").css({width: '2px'});
    // $('#container').on('click', function() {
    //  console.log(event.pageX + ", " + event.pageY);
    // });
    // $('.boxType1').wrap('<a href="http://www.galvanize.com"/>')
    // $('.boxType1').on('click', function() {
    //  alert("You can never leave this page!");
    //  event.preventDefault();
    // });
    // $('.box').wrapInner('<img src="http://www.vetsallnatural.com.au/wp-content/uploads/2014/04/puppy.jpg" height ="100px" width: "120px" >');
    // $('img').hide();
    // $('.box').on('click', function(){
    //   $(this).closest('div').find('img').slideToggle();
    // })
    $('#container').on('click', function(e){
      if ($(e.target).is('#container')) {
        $(this).css({backgroundColor: 'limegreen'});
      }
      else {
        $(e.target).closest('#container').css({backgroundColor: 'black'});
        $(e.target).css({backgroundColor: 'white'});
      }
    });
});
