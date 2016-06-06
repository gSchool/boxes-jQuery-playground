'use strict';

console.log("hello world");

//Exercise 1
$(document).ready(function(){

//Exercise 2
    //1
        // var secBox = $('#secretBox');
        // secBox.css('background-color', 'white');
        // secBox.html('secret box!');

    //2
        // var firstRow = $('#container').children().first().children().addClass('boxType3');
        // console.log("firstRow: ", firstRow);

    //3
        // var lastRow = $('#container').children().last();
        // console.log("last row: ", lastRow);
        // lastRow.children().last().css('display', 'none');

    //4
        // var red = "rgb(255, 0, 0)";
        // var boxes = $('.box');
        //     $.map(boxes, function(box) {
        //         // console.log("box background: ", $(box).css('background-color'));
        //         if ($(box).css('background-color') === red) {
        //             $(box).css('background-color', 'white');
        //         }
        //     });

    //5
        // var rowTwoChildren = $('#row2').children();
        // console.log("rowTwoChildren: ", rowTwoChildren);
        // for (var r = 0; r < 2; r++) {
        //     console.log("rowTwoChildren[r]: ", $(rowTwoChildren[r]));
        //     $(rowTwoChildren[r]).removeClass('box');
        // }

    //6
        // console.log("boxes.find: ", $('div').not('#container').not('.row').not("#secretBox"));
        // $('div').not('#container').not('.row').not("#secretBox").css('width', '2px');


//Exercise 3
    //1
        var container = $('#container');
            container.on('click', function(e) {
                console.log("e.clientY: ", e.clientY);
                console.log("e.clientX: ", e.clientX);
            });
    //2
        var red = "rgb(255, 0, 0)";
        var boxes = $('.box');
            $.map(boxes, function(box) {
                if ($(box).css('background-color') === red) {
                    $(box).append('<a href="http://www.galvanize.com/">Galvanize</a>')
                        .on('click', function(e) {
                            confirm("No navigate for you!");
                            e.preventDefault();
                        });
                }
    //3
                $(box).on('click', function() {
                    if ($(this).children().length > 0) {
                        $(this).find('img').remove();
                    } else {
                        //add cute puppy image
                        var puppy = $("<img src='https://dncache-mauganscorp.netdna-ssl.com/thumbseg/72/72007-bigthumbnail.jpg'></img>");
                            puppy.css({
                                'height': '100%',
                                'width': '100%'
                            });
                        $(this).append(puppy);
                    }
                });
            });

    //4
        container.on('click', function(e) {
            //this == container div
            $(this).css('background-color', 'black');
            //target == target div
            $(e.target).css('background-color', 'white');
            //if target div === container div
            if ($(e.target).context === $(this).context) {
                $(this).css('background-color', 'lime');
            }
        });
});
