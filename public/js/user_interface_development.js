


$(document).ready(function() {

    var num_soundpatterns = $('tr').length;
    var num_beats_per_soundpattern = $('td').length / num_soundpatterns;

    // start at 2 because sound name is in position 1
    var beat_position=2;


    function highlightColumn() {
        $('td').css("background", "white");
        $('td:nth-child(' + beat_position + ')').css("background", "yellow");
        beat_position += 1;
        if (beat_position > num_beats_per_soundpattern) { beat_position = 2; };
    }


    $('#play_button').on('click', highlightColumn);

});






    // function loopSequence() {
    //     for (i=1; i<=num_beats_per_soundpattern; i++) {
    //         $('#play_button').on('click', highlightColumn(i));
    //         // $('td').css("background", "white");
    //     };
    // };
