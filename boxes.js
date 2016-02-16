$(function() {
  console.log( "ready!" );
  $('#secretBox').on('mouseover', function(){
    $(this).css({'background-color': 'white', 'border-bottom': '4px solid orange'})
  }).append('<h1>Secret box!</h1>');
  $('#row1 > div').on('mouseover', function(){
    $(this).addClass('boxType3')
  });
  $('#row1 > div:last-child').on('mouseover', function(){
    $(this).css({'display': 'none'})
  });
  $('.boxType1').css({'background-color': 'white', 'border-bottom': '1px solid black'}).append("<a href='http://www.galvanize.com/'>Click Me</a>")
  $('#row2 > div:first-child, #row2 > div:first-child+div').css({'all': 'initial'});
  // $(" #container > div:not(.row), #container > div:not(#secretBox)").css({'width': '2px'});
  $('#container').on('click', function(e) {
        console.log(e.pageX + ' , ' + e.pageY);
    });
  $('.boxType1').on('click', function(e){
    alert("You can never leave the page");
    e.preventDefault();
  });
  $('.box').on('click', function(){
    $(this).addClass('puppy');
    $('.puppy').css({("background-image": "url('https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJTJk1vRYIzRaAzigs2A-338F-fi308r2ySl4DqXyzmU56lBSiFPJ9CSw')"});

  });



});
// console.log("hello world");
