$(document).ready(function() {
    console.log("ready!");

    $("#secretBox")
        .css("background-color", "white");

    $("#secretBox").append("<h1> Secret Box! </h1>");

    $("#row1").children().addClass("boxType3");

    $(".boxType1").css('background-color', 'white');

    $("#row4 :nth-child(4)").remove();

    // This technically removes the style from the divs, but it does not show up because nothing is overriding the css.
    $("#row2 :nth-child(1)").removeAttr( 'style' );
    $("#row2 :nth-child(2)").removeAttr( 'style' );

    var $bob = ($(".box:not(#secretBox)"));
    for (var i = 0; i < $bob.length; i++) {
      var $obj = $($bob[i]);
      $obj.css('width', '2px');
    }

    $("#container").click(function() {
        console.log(event.pageX, event.pageY);
    });

    var $reds = $('.boxType1');
    for (var i = 0; i < $reds.length; i++) {
        var $boxes = $($reds[i]);
        $boxes.append('<a href= www.galvanize.com>Galvanize</a>');
    }

    $('a').click(function() {
        alert('YOU WILL NEVER LEAVE THIS PAGE ALIVE!');
        event.preventDefault();
    });

    $('.box').click(function() {
        var $thing = $(this);
        if ($thing.css('background-image') !== 'none') {
            $thing.css('background-image', 'none');
        } else {
            $thing.css('background-size', '125%');
            $thing.css('background-image',
                'url(http://ohtoptens.com/wp-content/uploads/2015/05/Grumpy-Cat-NO-1.jpg)');
        }
    });

    $('#container').click(function() {
        var $holder = $(this);
        var $origin = $(event.srcElement);
        if ($origin[0].id === 'container') {
            $holder.css('background-color', 'lime');
        } else {
            $origin.css('background-color', 'white');
            $holder.css('background-color', 'black');
        }
    });

});
