console.log("hello world");

$( document ).ready(function() {
    alert( "ready for DOM manipulation" );


    $( document ).ready(callback())

    function callback() {
        alert( "ready for DOM manipulation 2" );
    };

    $('#secretBox').css({"background-color":"white"}).append("<h1>secret box!</h1>");
    $('#row1').children().addClass( "boxType3" );
    $('#container').children().last().children().last().css({"display":"none"})
    $('.boxType1').css({"background-color": "white"});
    $('#row2 div:nth-child(1)').removeClass();
    $('#row2 div:nth-child(2)').removeClass();
    $('.box:not(#secretBox)').css({"width":"2px"});

    $('#container').on('click', function(e) {
      console.log(e.clientX);
      console.log(e.clientY);
    })

    $('.boxType1').wrap('<a href="http://www.google.com"></a>');

    $('a').on('click', function(event) {
      alert("You can never leave");
      event.preventDefault()
    });


    $('.box').append("<img src='http://www.fillmurray.com/g/100/100'>");
    $('.box').children().hide();

    $('.box').on('click', function() {
        $(this).children().toggle()
    });

    $('#container').on('click', function(e) {
        if (e.target.id  === 'container') {
          $(this).css({"background-color":"limegreen"})
        } else {
          $(e.target).css({"background-color":"white"})
          $(this).css({"background-color":"black"})
        }
      })
});
