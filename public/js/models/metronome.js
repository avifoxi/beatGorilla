console.log('hello from Metronome!')



function Metronome(context, tempoBpm) {
    this._context = context;
    this._tempoBpm = tempoBpm;

    this.beatDropped = new Event(this);

    var _this = this;


}

Metronome.prototype = {
    proxyBeat : function() {
        this.beatDropped.notify();
    }
}
