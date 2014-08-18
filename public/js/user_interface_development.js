


$(document).ready(function() {

    var num_soundpatterns = $('tr').length;
    var num_beats_per_soundpattern = $('td').length / num_soundpatterns;

    // start at 2 because sound name is in position 1

    var current_beat_position=2;
    var last_beat_position = 1;

    function highlightColumn() {
        $('.currentBeat').removeClass("currentBeat");
        $('td:nth-child(' + current_beat_position + ')').addClass("currentBeat");

        current_beat_position += 1;
        last_beat_position += 1;

        // odd logic, but it works!
        if (current_beat_position > num_beats_per_soundpattern) { current_beat_position = 2; };
        if (last_beat_position > num_beats_per_soundpattern) { last_beat_position = 2; };
    }


    // $('#play_button').on('click', highlightColumn);

});


// resolve this - change to current beat
// <<<<<<< HEAD
//     var beat_position=2;

//     // TODO: add a class to the CSS file, for '.currentBeat'
//     // instead of changing color - add and remove the class of '.currentBeat' to selected column - will make for easier to read code in js setup
//     function highlightColumn() {
//         $('.currentBeat').removeClass("currentBeat");
//         $('td:nth-child(' + beat_position + ')').addClass("currentBeat");
//         beat_position += 1;
//         if (beat_position > num_beats_per_soundpattern) { beat_position = 2; };
// =======


