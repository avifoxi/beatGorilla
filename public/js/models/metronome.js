console.log('hello from Metronome!')

// placeholder - this is a dumb metronome - but it works for MVP

function Metronome(context, tempo) {
    this._context = context;
    this._tempo = tempo;
    this._isPlaying = false;

    this.beatDropped = new Event(this);

    var _this = this;


}

Metronome.prototype = {
    dropBeat : function() {
        this.beatDropped.notify();
    },
    startPlay : function () {
        var _this = this;
        this._isPlaying = true;
        this.recursiveTimer()
    },
    recursiveTimer : function() {

        var _this = this;
        var internalTempo = this._tempo;

        window.setTimeout( function(){
            console.log(_this);
            _this.dropBeat();
            if (_this._isPlaying === true) {
                _this.startPlay(this._tempo);
            }
        }, internalTempo);

    }
}



