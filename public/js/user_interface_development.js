


$(document).ready(function() {

    var num_soundpatterns = $('tr').length;
    var num_beats_per_soundpattern = $('td').length / num_soundpatterns;
    var id=1;


    function highlightColumn() {
        $('td').css("background", "white");
        $('td:nth-child(' + id + ')').css("background", "yellow");
        id += 1;
        if (id > 8) { id = 1; };
    }


    $('#play_button').on('click', highlightColumn);

});






    // function loopSequence() {
    //     for (i=1; i<=num_beats_per_soundpattern; i++) {
    //         $('#play_button').on('click', highlightColumn(i));
    //         // $('td').css("background", "white");
    //     };
    // };
