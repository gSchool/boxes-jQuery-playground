$( document ).ready(function() {
    alert( 'I am ready for DOM manipulation' );
    $( '#secretBox' ).css({ 'background-color': 'white' }).append( '<h1>secret box!</h1>' );
    $( '#row1 > div' ).addClass( 'boxType3' ).removeClass( 'boxType1' );
    $( '#row4 > div:last-child' ).css({ 'display': 'none' });
    $( '.boxType1' ).css({ 'background-color': 'white' });
    $( '#row2 > div:nth-child(-n+2)' ).css({ 'all': 'unset' });
    $( '#container > .row > .box:not(#secretBox)' ).css({ 'width': '2px' });

});
