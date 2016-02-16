$(document).ready(function(){
//  alert("ready for DOM Manipulation!");
  $('#secretBox').append('<h1>Secret Box!</h1>')
  //$('#row1').children().removeClass().addClass("box boxType3")
  $('#secretBox').css({'background-color': 'white'})
//  $('#row4').children().last().css({'display':'none'})
  //$('.boxType1').css({'background-color':'white'})
//  $('#row2').children(':nth-child(1)').removeClass()
  //$('#row2').children(':nth-child(2)').removeClass()
  //$('.box:not(#secretBox)').css({'width':'2px'})

  //Events
  $('#container').on('click', function(){
      console.log(event.pageX, event.pageY)
  })
  $('.boxType1').append
    ("<a href='http://galvanize.com'>Galvanize</a>")
  $('a').on('click', function(){
      alert("please don't go")
      return false;
    })

  $('.box').append("<img src='http://drodd.com/images12/husky-puppies15.jpg' alt='puppy' width='100%'>")
    $('.box').children().hide();

     $('.box').on('click', function(){
     $(this).children().toggle();
     })

$('#container').on('click', function(event){
  if(event.target.id === 'container'){
    $(this).css({'background-color':'#32CD32'})
  }else {
    $(this).css({'background-color':'black'})
    $(event.target).css({'background-color':'white'})
  }
})





})
