


$(document).ready(function() {

    var num_soundpatterns = $('tr').length;
    var num_beats_per_soundpattern = $('td').length / num_soundpatterns;

    // start at 2 because sound name is in position 1
    var current_beat_position=2;
    var last_beat_position = 1;

    function highlightColumn() {
        $('td:nth-child(' + last_beat_position + ')').removeClass("highlight");
        $('td:nth-child(' + current_beat_position + ')').addClass("highlight");

        current_beat_position += 1;
        last_beat_position += 1;

        // odd logic, but it works!
        if (current_beat_position > num_beats_per_soundpattern) { current_beat_position = 2; };
        if (last_beat_position > num_beats_per_soundpattern) { last_beat_position = 2; };
    }


    $('#play_button').on('click', highlightColumn);

});


