console.log('hello from Metronome!')

// placeholder - this is a dumb metronome - but it works for MVP

function Metronome(context, tempoBpm) {
    this._context = context;
    this._tempoBpm = 500;
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
        var internalTempo = this._tempoBpm;
        console.log(internalTempo);
        // window.setTimeout( function(){
        //     _this.dropBeat();
        // }, internalTempo);
        // if (this._isPlaying === true) {
        //     _this.startPlay(this._tempoBpm);
        // }
    }
}



